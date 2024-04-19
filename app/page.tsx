'use client'
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar"

type UserData = {
  first_name: string;
  last_name: string;
  // Add other properties as needed
};

export default function Home() {
  const [userData, setUserData] = useState<UserData | any>({})

  useEffect(() => {
    //Retrieve userData from sessionStorage when component mounts
    const storedUserData = sessionStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData))
    }
    console.log(storedUserData)
  }, [])

  return (
    <main className="">
      <NavBar userData={userData} />
    </main>
  )
}
