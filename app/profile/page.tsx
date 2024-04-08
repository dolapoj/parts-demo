"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const UserProfile = () => {
  const [responseData, setResponseData] = useState(null);
  // const router = useRouter();

  // useEffect(() => {
  //   if (router.query.responseData) {
  //     setResponseData(JSON.parse(router.query.responseData as string));
  //   }
  // }, [router.query.responseData]);

  return (
    <div className="text-center text-2xl m-20">
      <p>Welcome, </p>
    </div>
  );
};

export default UserProfile;
