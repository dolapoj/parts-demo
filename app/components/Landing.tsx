"use client";
import React, { useState, useEffect, Suspense } from "react";
import InnerSearch from "./InnerSearch";
import BestSellers from "./BestSellers";
import MoreParts from "./MoreParts";
import Brands from "./Brands";
import Carousel from "./Carousel";
import LoadingSpinner from "./LoadingSpinner";
import ElasticCarousel from "./ElasticCarousel";

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

interface CarResponse {
  data: Car[];
}

const usePartsData = () => {
  const [parts, setParts] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getParts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://partdirectafrica.com/part/parts-list/"
          // "https://freetestapi.com/api/v1/cars"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const partsData: CarResponse = await response.json();
        console.log(partsData)
        // setParts(partsData.data);
        setParts(partsData.data);
      } catch (error) {
        console.error('Error fetching parts data:', error);
        setError("Failed to fetch parts data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getParts();
  }, []);

  return { parts, loading, error };
};

const Landing: React.FC = () => {
  const { parts, loading, error } = usePartsData();

  return (
    <main className="bg-landing">
      {loading && <LoadingSpinner />}
      {error && <div className="error-message">{error}</div>}
      {!loading && !error && (
        <>
          <Carousel parts={parts} />
          <InnerSearch />
          <BestSellers parts={parts} />
          <MoreParts color="#02026B" props="SHOP MORE PARTS" />
          <MoreParts props="SHOP BY MAKE" color="white" text="black" />
          <Brands />
        </>
      )}
    </main>
  );
};

export default Landing;
