"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../login/login.module.scss";
import Logo from "../../../images/kinetic-parts-logo.png";
import ResetAnime from "../../../images/resetpwvector.png";
import axios from "axios";
import { useRouter } from "next/navigation";

const ResetPassword = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: ""
  });

  const [activationLink, setActivationLink] = useState("")

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const endpoint = "http://kineticparts.africa/auth/request-reset-email/"

    try {
      const response = await axios.post(
        endpoint,
        {
          email: formData.email,
        },
        {
          headers: {
            "Content-Type": "application/json"
          },
        }
      );
      setActivationLink(response.data.activation_link)
      console.log("Data successfully posted: ", response.data)
      setFormData({
        email: ""
      })
      alert(JSON.stringify(response.data.activation_link))
      router.push("/new-password")
    } catch (error) {
      console.error("Error posting data: " ,error)
    }
  }

  return (
    <main className={`${styles.login_container} min-h-screen`}>
      <div
        className={`flex flex-col justify-start p-8 sm:p-16 sm:px-52 2xl:px-96`}
      >
        <Image
          src={Logo}
          alt="Kinetic Parts"
          quality={100}
          className={`w-28 sm:w-60`}
        />
        <p
          className={`${styles.no_acct_text} text-center text-base sm:text-x sm:text-right mt-8 sm:mt-4`}
        >
          Do not have an account?{" "}
          <Link href="/signup">
            <span className="cursor-pointer">Sign Up Now!</span>
          </Link>
        </p>
        <div className="flex flex-row justify-center mt-4 h-auto text-white w-full">
          <div className="bg-white text-black sm:w-2/3 p-6 sm:px-12 h-full w-full">
            <p style={{ fontWeight: "700" }} className="text-2xl font-semibold">
              Password Reset
            </p>
            <p className="mt-8 text-sm">
              Enter the email address associated with your account and we will
              send you a link to reset your password
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label className="mt-6 text-left sm:ml-4">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder=""
                  onChange={handleInputChange}
                  autoComplete="off"
                  className="rounded-md"
                  required
                />
              </div>
              <div className="flex justify-center mt-14">
                <button className="bgGreen text-white w-full p-2 rounded-md mb-4">
                  Continue
                </button>
              </div>
            </form>
          </div>
          <div
            className={`${styles.bg_blue} hidden sm:block sm:flex sm:px-10 flex-col justify-center items-center sm:w-1/3 p-6`}
          >
            <Image
              src={ResetAnime}
              alt="Reset Password"
              quality={100}
              className="w-28 sm:w-60"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResetPassword;
