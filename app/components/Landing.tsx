"use client";
import React, { useState, useEffect, Suspense } from "react";
import NavBar from "./NavBar";
import InnerSearch from "./InnerSearch";
import BestSellers from "./BestSellers";
import MoreParts from "./MoreParts";
import Brands from "./Brands";
import Footer from "./Footer";
import Carousel from "./Carousel";
import { useSession } from "next-auth/react";

const Landing = () => {
  return (
    <main className="bg-landing">
      <Carousel />
      <InnerSearch />
      <Suspense fallback={<p className="text-red-600">Loading...</p>}>
        <BestSellers />
      </Suspense>
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
