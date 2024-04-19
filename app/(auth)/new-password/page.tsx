"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "../login/login.module.scss";
import Logo from "../../../images/kinetic-parts-logo.png";
import ResetAnime from "../../../images/resetpwvector.png";

import Image from "next/image";
import Link from "next/link";

type ErrorsType = { [key: string]: string }

const ResetPassword = () => {
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [errors, setErrors] = useState<ErrorsType>({})

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  //Handle Input Chnage in Form Fields
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // console.log(value)
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    console.log(formData)
    event.preventDefault();
    const validationErrors: { [key: string]: string } = {};
    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(formData.password.trim())) {
      console.log('1')
      validationErrors.password = "Must contain at least 8 characters, one digit, one special character and one alphabet"
    }
    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(formData.confirmPassword.trim())) {
      console.log('2')
      validationErrors.confirmPassword = "Must contain at least 8 characters, one digit, one special character and one alphabet"
    }
    if (formData.password.trim() !== formData.confirmPassword.trim()) {
      console.log('3')
      validationErrors.notEqual = "Passwords does not match"
    }
    setErrors(validationErrors)
    await console.log(errors)

    //Make API calls
    if (Object.keys(validationErrors).length === 0) {
      try {
        
      } catch (error) {
        
      }
    }
  }

  function togglePwdVisibility(params: any) {
    setIsRevealPwd((prevState) => !prevState);
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
            <form onSubmit={handleSubmit}>
              <div className="mt-8">
                <label className="py-8 text-left sm:ml-4">New Password</label>
                <div className="relative flex flex-col mb-6">
                  <input
                    type={isRevealPwd ? "text" : "password"}
                    name="password"
                    placeholder=""
                    autoComplete="off"
                    className="rounded-md"
                    onChange={handleInputChange}
                    required
                  />
                  {errors.password && (
                    <p className="mt-2 text-xs text-red-600">{errors.password}</p>
                  )}
                  <div
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                    onClick={togglePwdVisibility}
                  >
                    {isRevealPwd ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <label className="mt-6 text-left sm:ml-4">
                  Confirm Password
                </label>
                <div className="relative flex flex-col">
                  <input
                    type={isRevealPwd ? "text" : "password"}
                    name="confirmPassword"
                    placeholder=""
                    autoComplete="off"
                    className="rounded-md"
                    onChange={handleInputChange}
                    required
                  />
                  {errors.confirmPassword && (
                    <p className="mt-2 text-xs text-red-600">{errors.confirmPassword}</p>
                  )}
                  <div
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                    onClick={togglePwdVisibility}
                  >
                    {isRevealPwd ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                {errors.notEqual && (
                  <p className="mt-2 text-xs text-red-600">{errors.notEqual}</p>
                )}
                <div className="flex justify-center mt-14">
                  <button className="bgGreen text-white w-full p-2 rounded-md mb-4">
                    Continue
                  </button>
                </div>
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
