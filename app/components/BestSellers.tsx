import React, { Suspense, useEffect, useState } from "react";
import Ratings from "./Ratings";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Car {
  client_id: number;
  make: string;
  year: number;
  model: string;
  image: string;
}
// interface Car {
//   id: number;
//   make: string;
//   model: string
//   year: string
//   color: string
//   mileage: string
//   price: string
//   fuelType: string
//   transmission: string
//   engine: string;
//   horsepower: string
//   features: []
//   owners: number
//   image: string
// }
interface PartsDisplayProps {
  parts: Car[];
}

const BestSellers: React.FC<PartsDisplayProps> = ({ parts }) => {
  const router = useRouter();
  // console.log("BestSellers parts:", parts); // Debugging line

  const handleCarClick = async (car: Car) => {
    // Extract details
    const { make, year, model } = car;

    // Use these details to call another function or endpoint
    console.log(`Car clicked: Make: ${make}, Year: ${year}, Model: ${model}`);

    try {
      const response = await fetch(
        "https://partdirectafrica.com/part/parts-list/d6c4a436-5f1f-40a0-8184-7d3db09a8431/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ make, year, model }), // Send data in the body
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Response data:", data);
      // Save responseData to localStorage
      localStorage.setItem("searchByBestSeller", JSON.stringify(data));
      router.push(`/bestseller`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="py-12 sm:px-12">
      <div className="mx-8">
        <h4 className="font-semibold mx-12 sm:mx-16">BEST SELLERS</h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
          {parts && parts.length > 0 ? (
            parts.map((car) => (
              <div
                key={car.client_id}
                className="card mb-4 cursor-pointer hover:border"
                onClick={() => handleCarClick(car)}
              >
                <figure>
                  <Image
                    src={car.image}
                    alt={`${car.make} ${car.model}`}
                    quality={100}
                    className="w-28 max-h-16"
                    width={28}
                    height={28}
                  />
                </figure>
                <div className="card-body text-center p-0">
                  <div className="">
                    <span className="font-semibold">
                      {car.make} {car.year}
                    </span>
                    <br />
                    <span className="text-sm">{car.model}</span>
                    <Ratings />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No best sellers available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
