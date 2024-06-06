"use client";
import React, { useState, useEffect, Suspense } from "react";
import InnerSearch from "./InnerSearch";
import BestSellers from "./BestSellers";
import MoreParts from "./MoreParts";
import Brands from "./Brands";
import Footer from "./Footer";
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
      const response = await fetch("/api/parts");
      const parts: CarResponse = await response.json();
      setParts(parts.data);
      // console.log(parts.data)
    };

    getParts();
  }, []);

  return parts;
};

const Landing = () => {
  const partsData = getPartsData();

  return (
    <main className="bg-landing">
      <Carousel parts={partsData} />
      <InnerSearch />
      <BestSellers parts={partsData} />
      <MoreParts
        color="#02026B"
        backgroundImage="/images/hyundai.png"
        props="SHOP MORE PARTS"
      />
      <MoreParts props="SHOP BY MAKE" color="white" text="black" />
      <Brands />
      <Footer />
    </main>
  );
};

export default Landing;
