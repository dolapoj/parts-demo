'use client';
import React, { Component, Suspense, useEffect, useState } from "react";
import { AppProps } from "next/app";
import Landing from "./components/Landing";
import { useSession } from "next-auth/react";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
import Layout from "./components/Layout";

type UserData = {
  first_name: string;
  last_name: string;
  // Add other properties as needed
};

const Home: React.FC = () => {
  const [userData, setUserData] = useState<UserData | any>({});
  const { data: session } = useSession();
  // const user = session ? session.user : null;

  useEffect(() => {
    //Retrieve userData from sessionStorage when component mounts
    const storedUserData = sessionStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
    // console.log(storedUserData);
  }, []);
  return (
    <div className="bg-landing">
        <Landing />
    </div>
  );
}

export default Home
