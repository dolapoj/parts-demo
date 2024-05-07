"use client";
import React, { useState, useEffect, Suspense } from "react";
import NavBar from "./components/NavBar";
// import { SessionProvider } from "next-auth/react";
import InnerSearch from "./components/InnerSearch";
import BestSellers from "./components/BestSellers";
import MoreParts from "./components/MoreParts";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import { useSession } from "next-auth/react";

type UserData = {
  first_name: string;
  last_name: string;
  // Add other properties as needed
};

interface RootLayoutProps {
  session: any; // Define the type of session here
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | any>({});
  const { data: session } = useSession();

  useEffect(() => {
    //Retrieve userData from sessionStorage when component mounts
    const storedUserData = sessionStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
    // console.log(storedUserData);
  }, []);

  const Loading = () => {
    return (
      <div className="min-h-screen flex flex-row justify-center items-center text-2xl">
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  };

  return (
    <main className="bg-landing">
      <Suspense fallback={Loading()}>
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
        <BestSellers />
        <MoreParts
          color="#02026B"
          backgroundImage="/images/hyundai.png"
          props="SHOP MORE PARTS"
        />
        <MoreParts props="SHOP BY MAKE" color="white" text="black" />
        <Brands />
        <Footer />
      </Suspense>
    </main>
  );
}
