"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Button from "./Button";
import SocialIcons from "./SocialIcons";
import axios from "axios";
import toast from "react-hot-toast";

import Link from "next/link";

type ErrorsType = { [key: string]: string };

const LoginCard = () => {
  //Set Form State
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<ErrorsType>({});

  //Handle Input Chnage in Form Fields
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //Handle Submit
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors: { [key: string]: string } = {};
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(formData.email.trim())
    ) {
      validationErrors.email = "Email is not valid";
    }
    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    }
    setErrors(validationErrors);

    //Make API call to the Login Endpoint
    const endpoint = "http://kineticparts.africa/auth/login/";
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(
          endpoint,
          {
            email: formData.email,
            password: formData.password
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
      } catch (error) {
        console.error("There is an error: " + error);
      }
    }
  };

  return (
    <main className="p-6">
      <p style={{ fontWeight: "700" }} className="text-2xl font-semibold">
        Sign In
      </p>
      <form>
        <div className="flex flex-col">
          <label className="mt-8 text-left sm:ml-4">Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            placeholder=""
            autoComplete="email"
            onChange={handleInputChange}
            className="rounded-md"
          />
          {errors.email && (
            <p className="mt-2 text-xs text-red-400">{errors.email}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label className="mt-4 text-left sm:ml-4">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            autoComplete="off"
            className="rounded-md"
          />
        </div>
        <Link href="/reset-password">
          <p
            style={{ textAlign: "right" }}
            className="text-sm italic cursor-pointer"
          >
            Forgot password?
          </p>
        </Link>
        <div className="strike mt-4">
          <span>or with</span>
        </div>
        <div className="mb-8">
          <SocialIcons />
        </div>
        <button
          type="button"
          className="button m-auto font-medium text-white w-full p-2"
        >
          Sign In
        </button>
      </form>
    </main>
  );
};

export default LoginCard;
