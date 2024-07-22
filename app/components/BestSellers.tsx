import React, { Suspense, useEffect, useState } from "react";
import Ratings from "./Ratings";
import Image from "next/image";

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
  console.log("BestSellers parts:", parts); // Debugging line
  return (
    <section className="py-12 sm:px-12">
      <div className="mx-8">
        <h4 className="font-semibold mx-12 sm:mx-16">BEST SELLERS</h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
          {parts && parts.length > 0 ? (
            parts.map((car) => (
              <div key={car.client_id} className="card mb-4">
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
                    <span className="text-sm">{car.make}</span>
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
