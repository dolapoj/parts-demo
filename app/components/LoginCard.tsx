"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import SocialIcons from "./SocialIcons";
import axios from "axios";
import toast from "react-hot-toast";
import { CiUser } from 'react-icons/ci';
import { TbPassword } from "react-icons/tb";

import Link from "next/link";
import { useRouter } from "next/navigation";

type ErrorsType = { [key: string]: string };

const LoginCard = () => {
  const router = useRouter();

  //Set Form State
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<ErrorsType>({});
  const [responseData, setResponseData] = useState(null);

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

    //Make API call to the Login Endpoint
    const endpoint = "http://partdirectafrica.com/auth/login/";
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(
          endpoint,
          {
            email: formData.email,
            password: formData.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        // console.log('Data successfully posted: ', response.data)
        if (response.status === 200) {
          setResponseData(response.data.user);
          console.log('Data successfully posted: ', response.data)
          
          //Save responseData to sessionStorage
          sessionStorage.setItem('userData', JSON.stringify(response.data.user))
          router.push('/')
        } 
        if (response.status === 400) {
          console.log('status 400')
          toast.error("Invalid email or password.");
          // toast.error({response.message});
          validationErrors.invalid =
            "You have provided an invalid email or password. Please check and try again";
            console.log(response.data.message)
        }
      } catch (error) {
        console.error("There is an error:", error);
        toast.error("Invalid email or password.")
        // toast.error(`Error: ${error.message}`)
      }

      setFormData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <main className="py-4 2xl:py-16 sm:px-6 2xl:mx-32">
      <p style={{ fontWeight: "700" }} className="text-2xl mb-8 font-semibold">
        Sign In
      </p>
      <form onSubmit={handleSubmit}>
        <label className="mt-8 text-left sm:ml-4">Email</label>
        <div className="mb-6 relative shadow-sm">
          <div className="pointer-event-none mt-2 absolute left-0 inset-y-0 flex items-center pl-3">
            <span className="text-gray-500 text-sm">
              <CiUser className="text-green-500" />
            </span>
          </div>
          <input
            type="text"
            name="email"
            value={formData.email}
            placeholder=""
            autoComplete="email"
            onChange={handleInputChange}
            className="rounded-md w-full pr-7 pl-8 border-gray-300 outline-offset-2 outline-transparent focus:border-green-500 focus:ring-green-300 focus:ring-2 text-sm"
            required
          />
        </div>
        <label className="mt-4 text-left sm:ml-4">Password</label>
        <div className="mb-6 relative shadow-sm">
          <div className="pointer-event-none mt-2 absolute left-0 inset-y-0 flex items-center pl-3">
            <span className="text-gray-500 text-sm">
              <TbPassword className="text-green-500" />
            </span>
          </div>
          <input
            type="password"
            name="password"
            placeholder=""
            value={formData.password}
            onChange={handleInputChange}
            autoComplete="off"
            className="rounded-md w-full pr-7 pl-8 border-gray-300 outline-offset-2 outline-transparent focus:border-green-500 focus:ring-green-300 focus:ring-2 text-sm"
            required
          />
          {errors.password && (
            <p className="mt-2 text-xs text-red-600">{errors.invalid}</p>
          )}
        </div>
        <p
          style={{ textAlign: "right" }}
          className="text-sm mt-2 text-blue-600 cursor-pointer"
        >
          <Link href="/reset-password">Forgot password?</Link>
        </p>
        <div className="strike mt-4">
          <span>or with</span>
        </div>
        <div className="mb-8">
          <SocialIcons />
        </div>
        <button
          type="submit"
          className="button m-auto font-medium text-white w-full p-2 hover:scale-105 hover:shadow-lg hover:shadow-green-300 transition-all"
        >
          Sign In
        </button>
      </form>
    </main>
  );
};

export default LoginCard;
