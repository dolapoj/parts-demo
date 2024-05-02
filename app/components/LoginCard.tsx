"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Button from "./Button";
import SocialIcons from "./SocialIcons";
import axios from "axios";
import toast from "react-hot-toast";

import { gapi } from 'gapi-script'

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

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: "806292803476-urs300nfiqdfc0gekdnf3mrrpml5ehg9.apps.googleusercontent.com",
        scope: ""
      })
    }
    gapi.load('client:auth2', start)
  })

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
                          // if (!formData.email.trim()) {
                          //   validationErrors.email = "Email is required";
                          // } else if (
                          //   !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(formData.email.trim())
                          // ) {
                          //   validationErrors.email = "Email is not valid";
                          // }
                          // if (!formData.password.trim()) {
                          //   validationErrors.password = "Password is required";
                          // }
                          // setErrors(validationErrors);

    //Make API call to the Login Endpoint
    const endpoint = "http://kineticparts.africa/auth/login/";
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
          
          //Save responseData to sessionStorage
          sessionStorage.setItem('userData', JSON.stringify(response.data.user))
          router.push('/')
        } 
        else if (response.status === 400) {
          toast.error("Invalid email or password.");
          validationErrors.invalid =
            "You have provided an invalid email or password. Please check and try again";
            console.log(response.data.message)
        }
      } catch (error) {
        console.error("There is an error:", error);
      }

      setFormData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <main className="p-6">
      <p style={{ fontWeight: "700" }} className="text-2xl font-semibold">
        Sign In
      </p>
      <form onSubmit={handleSubmit}>
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
            required
          />
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
          className="button m-auto font-medium text-white w-full p-2"
        >
          Sign In
        </button>
      </form>
    </main>
  );
};

export default LoginCard;
