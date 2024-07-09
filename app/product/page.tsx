"use client";
import React, { Suspense, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ProductDetail from "../components/ProductDetail";

interface UserData {
  first_name: string;
  last_name: string;
}

const useUserData = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const storedUserData = sessionStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  return userData;
};

const ProductDetailPage = () => {
  const userData = useUserData();

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductDetail />
      </Suspense>
    </>
  );
};

export default ProductDetailPage;
