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

interface PartsDisplayProps {
  parts: Car[];
}

const BestSellers: React.FC<PartsDisplayProps> = ({ parts }) => {
  return (
    <section className="py-12 sm:px-12">
      <div className="mx-8">
        <h4 className="font-semibold mx-12 sm:mx-16">BEST SELLERS</h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
          {parts.map((car) => (
            <div key={car.client_id} className="card mb-4">
              <figure>
                <Image
                  src={car?.image as string}
                  alt="Shoes"
                  quality={100}
                  className="w-28 max-h-16"
                  width={28}
                  height={28}
                />
              </figure>
              <div className="card-body text-center p-0">
                <div className="">
                  <span className="font-semibold">
                    {car?.make + ` ${car?.year}`}
                  </span>
                  <br />
                  <span className="text-sm">{car?.model}</span>
                  <Ratings />
                  {/* <p className="text-sm">{`${car?.model}`}</p> */}
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
