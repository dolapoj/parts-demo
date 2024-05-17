'use client';
import React, { Suspense, useEffect, useState } from "react";
import Landing from "./components/Landing";
import Skeleton from "./components/Skeleton";
import { useSession } from "next-auth/react";
import NavBar from "./components/NavBar";

type UserData = {
  first_name: string;
  last_name: string;
  // Add other properties as needed
};

export default function Home() {
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
    <main className="bg-landing">
      <Suspense fallback={Skeleton()}>
        <NavBar userData={userData} />
        <Landing />
      </Suspense>
    </main>
  );
}
