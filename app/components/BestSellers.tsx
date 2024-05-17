import React, { Suspense, useEffect, useState } from "react";
import Ratings from "./Ratings";
import Image from "next/image";
interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  price: number;
  fuelType: string;
  transmission: string;
  engine: string;
  horsepower: number;
  features: string[];
  owners: number;
  image: string;
}

const BestSellers = () => {
  const [allCars, setAllCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async (count = 10): Promise<void> => {
      const endpoint = "https://freetestapi.com/api/v1/cars";
      try {
        let selectedCars: Car[] = [];
        //Fetch Data From Endpoint and Cache
        const res = await fetch(endpoint, { next: { revalidate: 10 } });
        const response: Car[] = await res.json();
        selectedCars = response;
        count = Math.min(count, selectedCars.length);
        const shuffledCars = selectedCars.sort(() => Math.random() - 0.5);
        const randomSubset = shuffledCars.slice(0, count);
        setAllCars(randomSubset);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCars();
  }, []);

  return (
    <section className="py-12 sm:px-12">
      <div className="mx-8">
        <h4 className="font-semibold mx-12 sm:mx-16">BEST SELLERS</h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
          {allCars.map((car) => (
            <div className="card">
              <figure>
                <Image
                  // src="/images/pad.png"
                  src={car?.image as string}
                  alt="Shoes"
                  quality={100}
                  className="w-28"
                  width={28}
                  height={28}
                />
              </figure>
              <div className="card-body text-center">
                <div className="">
                  <span className="font-semibold">
                    {car?.make + ` ${car?.year}`}
                  </span>
                  <br />
                  <span className="text-sm">{car?.engine}</span>
                  <Ratings />
                  <p className="text-sm">{`$${car?.price}`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
