"use client";
import React, { useState, useEffect, Suspense } from "react";
import NavBar from "./NavBar";
// import { SessionProvider } from "next-auth/react";
import InnerSearch from "./InnerSearch";
import BestSellers from "./BestSellers";
import MoreParts from "./MoreParts";
import Brands from "./Brands";
import Footer from "./Footer";
import Carousel from "./Carousel";
import { useSession } from "next-auth/react";
import delay from "delay";

type UserData = {
  first_name: string;
  last_name: string;
  // Add other properties as needed
};

const Landing = () => {
  const [userData, setUserData] = useState<UserData | any>({});
  const { data: session } = useSession();
  const user = session ? session.user : null;
  delay(2000);

  useEffect(() => {
    //Retrieve userData from sessionStorage when component mounts
    const storedUserData = sessionStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
    // console.log(storedUserData);
  }, []);


  return (
    <main className="bg-landing">
      <NavBar userData={userData} />
      <section
        style={{ backgroundColor: "#02026B" }}
        className="text-white font-semibold py-2 px-12"
      >
        <ul className="flex justify-start items-center gap-8">
          <li className="cursor-pointer">Products</li>
          <li className="cursor-pointer">Categories</li>
          <li className="cursor-pointer">Brand</li>
          <li className="cursor-pointer">Deals</li>
          <li className="cursor-pointer">Customer Service</li>
        </ul>
      </section>
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
