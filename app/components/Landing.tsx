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
interface CarResponse {
  data: Car[];
}

const getPartsData = () => {
  const [parts, setParts] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getParts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://partdirectafrica.com/part/parts-list"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const parts: CarResponse = await response.json();
        setParts(parts.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    getParts();
  }, []);

  return { parts, loading, error };
};

const Landing: React.FC = () => {
  const { parts, loading, error } = getPartsData();

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
