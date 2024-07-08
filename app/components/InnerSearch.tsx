"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { IoCarSportSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';

interface FormData {
  make: string;
  year: string;
  model: string;
}

const InnerSearch: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    make: "",
    year: "",
    model: "",
  });

  const fetchItems = async () => {
    const endpoint =
      "http://partdirectafrica.com/part/parts-list/d6c4a436-5f1f-40a0-8184-7d3db09a8431/";
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data)

    const productId = uuidv4();

    // Save responseData to localStorage
    localStorage.setItem("searchProduct", JSON.stringify(data));
    router.push(`/product?productId=${productId}`)
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetchItems();
  };

  return (
    <>
      <section style={{ backgroundColor: "#03013E" }} className="sm:mx-12 py-6">
        <div className="flex flex-col">
          <h5 className="font-semibold text-white pt-6 px-6 sm:text-2xl sm:px-24">
            Search from over 10 Million Auto Parts
          </h5>
          <form onSubmit={handleSubmit}>
            <div className="mt-4 flex justify-start flex-wrap gap-4 px-6 sm:px-24">
              <select
                className="block rounded-md sm:w-52"
                name="make"
                value={formData.make}
                onChange={handleChange}
                required
              >
                <option value="">Select Make</option>
                <option value="acura">acura</option>
                <option value="kia">kia</option>
                <option value="toyota">toyota</option>
              </select>
              <select
                className="block rounded-md sm:w-52"
                name="model"
                value={formData.model}
                onChange={handleChange}
                required
              >
                <option value="">Select Model</option>
                <option value="mdx">mdx</option>
                <option value="sorento">sorento</option>
                <option value="camry">camry</option>
              </select>
              <select
                className="block rounded-md sm:w-52"
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
              >
                <option value="">Select Year</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
              </select>
              <button
                className="btn bg-green-500 text-white px-3 py-0 border-none font-semibold text-sm sm:w-64"
                type="submit"
              >
                <IoCarSportSharp className="text-lg" />
                SEARCH VEHICLE PARTS
              </button>
            </div>
          </form>
          <p className="italic text-white text-sm pt-6 px-6 sm:px-24">
            Filter your results by entering your Make, Model and Year to ensure
            you find the parts that fit your vehicle
          </p>
        </div>
      </section>
    </>
  );
};

export default InnerSearch;
