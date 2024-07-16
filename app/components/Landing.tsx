"use client";
import React, { useState, useEffect, Suspense } from "react";
import InnerSearch from "./InnerSearch";
import BestSellers from "./BestSellers";
import MoreParts from "./MoreParts";
import Brands from "./Brands";
import Carousel from "./Carousel";

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

  useEffect(() => {
    const getParts = async () => {
      // const response = await fetch("/api/parts");
      const response = await fetch("http://partdirectafrica.com/part/parts-list");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const parts: CarResponse = await response.json();
      setParts(parts.data);
    };

    getParts();
  }, []);

  return parts;
};

const Landing = () => {
  const partsData = getPartsData();

  return (
    <main className="bg-landing">
      <Suspense fallback={<p>Loading...</p>}>
        <Carousel parts={partsData} />
      </Suspense>
      <InnerSearch />
      <BestSellers parts={partsData} />
      <MoreParts color="#02026B" props="SHOP MORE PARTS" />
      <MoreParts props="SHOP BY MAKE" color="white" text="black" />
      <Brands />
    </main>
  );
};

export default Landing;
