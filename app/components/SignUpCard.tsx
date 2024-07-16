"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { z } from "zod";
import { FormDataSchema } from "@/lib/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { CiUser } from "react-icons/ci";
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { CiLocationArrow1 } from "react-icons/ci";
import { TbPassword } from "react-icons/tb";
import { MdPhoneIphone } from "react-icons/md";
import toast from "react-hot-toast";

import { motion } from "framer-motion";

import SocialIcons from "./SocialIcons";
import styles from "../(auth)/signup/signup.module.scss";
import Square from "../../images/square.svg";

type Inputs = z.infer<typeof FormDataSchema>;

interface ApiResponse {
  activation_link: string;
}

const steps = [
  {
    id: "Step 1",
    name: "Registration",
    fields: ["email"],
  },
  {
    id: "Step 2",
    name: "Information",
    fields: [
      "role",
      "first_name",
      "last_name",
      "email",
      "country",
      "password",
      "confirm_password",
      "phone_number",
      "company_name",
    ],
  },
  {
    id: "Step 3",
    name: "Verification",
  }
];

const SignUpCard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formEmail, setFormEmail] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  //State to track the selected value in the select form
  const [selectedValue, setSelectedValue] = useState("");

  //State to show the visibility of the additional input field
  const [showInputField, setShowInputField] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  const processForm: SubmitHandler<Inputs> = async (data) => {
    //Make POST API call to the Register endpoint
    const endpoint = "http://partdirectafrica.com/auth/register/";
    try {
      const response = await axios.post<ApiResponse>(endpoint, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("You can now check your email for account activation.");
    } catch (error) {
      console.error("Error posting data:", error);
      toast.error('');
    }
    reset();
  };

  type FieldName = keyof Inputs;

  //Handle Next logic
  const handleNext = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    // REFIX NEXT LINE 
    if (!output && currentStep < 2) return null;

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await handleSubmit(processForm)();
      }
      // setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  //Handle Previous logic
  // const handlePrevious = () => {
  //   if (currentStep > 0) {
  //     // setPreviousStep(currentStep);
  //     setCurrentStep((step) => step - 1);
  //   }
  // };

  // Handler function to update the selected value and show/hide th input field
  const handleSelectChange = (e: any) => {
    const value = e.target.value;
    setSelectedValue(value);
    setShowInputField(value === "Fleet Manager");
  };

  return (
    <main className="sm:p-6 sm:x-8 2xl:mx-12">
      <p style={{ fontWeight: "700" }} className="text-2xl">
        Create Account
      </p>
      <div className="mt-4">
        {/* STEPS */}
        <nav aria-label="Progress">
          <ol
            role="list"
            className="space-y-2 md:flex md:space-x-8 md:space-y-0"
          >
            {steps.map((step, index) => (
              <li key={step.name} className="md:flex-1">
                {currentStep > index ? (
                  <div className="group flex w-full flex-col border-l-4 stepColorBorder py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                    <span className="text-sm font-medium stepColorBorder transition-colors ">
                      {step.id}
                    </span>
                    <span className="text-sm font-medium">{step.name}</span>
                  </div>
                ) : currentStep === index ? (
                  <div
                    className="flex w-full flex-col border-l-4 stepColorBorder py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                    aria-current="step"
                  >
                    <span className="text-sm font-medium stepColor">
                      {step.id}
                    </span>
                    <span className="text-sm font-medium">{step.name}</span>
                  </div>
                ) : (
                  <div className="group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                    <span className="text-sm font-medium text-gray-500 transition-colors">
                      {step.id}
                    </span>
                    <span className="text-sm font-medium">{step.name}</span>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* FORM */}

        <form className="py-12" onSubmit={handleSubmit(processForm)}>
          {/* Step One Form */}
          {currentStep === 0 && (
            <motion.div
              initial={{ x: currentStep >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <label className="text-left sm:ml-4 font-semibold">
                Sign Up with Email
              </label>
              <div className="mb-6">
                <div className="mb-0 relative shadow-sm">
                  <div className="pointer-event-none mt-2 absolute left-0 inset-y-0 flex items-center pl-3">
                    <span className="text-gray-500 text-sm">
                      <CiUser className="text-green-700" />
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your email here"
                    {...register("email")}
                    autoComplete="email"
                    onChange={(e) => setFormEmail(e.target.value)}
                    className="rounded-md order w-full pr-7 pl-8 border-gray-300 outline-offset-2 outline-transparent focus:border-green-500 focus:ring-green-300 focus:ring-2 text-sm"
                  />
                </div>
                {errors.email?.message && (
                  <span className="text-xs text-red-400">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="strike mt-8">
                <span>or with</span>
              </div>
              <SocialIcons />
            </motion.div>
          )}

          {/* Step 2 Form */}

          {currentStep === 1 && (
            <motion.div
              initial={{ x: currentStep >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="flex flex-col mb-4">
                {/* <button className="p-4 bg-black text-white" onClick={handleVin}>Hit me!</button> */}
                <label className="text-left sm:ml-4">
                  What type of user are you?{" "}
                  <span className="text-sm italic">(optional)</span>
                </label>
                <select
                  className="block w-full rounded-md border-gray-300 outline-offset-2 outline-transparent focus:border-green-500 focus:ring-green-300 focus:ring-2 text-sm"
                  {...register("role")}
                  value={selectedValue}
                  onChange={handleSelectChange}
                  defaultValue={"Vehicle Owner"}
                >
                  <option value="Individual">Individual</option>
                  <option value="Fleet Manager">Fleet Manager</option>
                  <option value="Mechanic">Mechanic</option>
                </select>
                {errors.role?.message && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.role.message}
                  </p>
                )}
              </div>
              {/* Company Name */}
              {showInputField && (
                <div className="flex flex-col mt-4 mb-4">
                  <label className="text-left sm:ml-4">Company</label>
                  <input
                    type="text"
                    placeholder="Ade & Sons"
                    {...register("company")}
                    autoComplete="off"
                    className="inputField rounded-md border-gray-300 outline-offset-2 outline-transparent focus:border-green-500 focus:ring-green-300 focus:ring-2 text-sm"
                  />
                  {errors.company?.message && (
                    <p className="mt-2 text-xs text-red-400">
                      {errors.company.message}
                    </p>
                  )}
                </div>
              )}
              <label className="text-left sm:ml-4">Firstname</label>
              <div className="mb-6 relative shadow-sm">
                <div className="pointer-event-none mt-2 absolute left-0 inset-y-0 flex items-center pl-3">
                  <span className="text-gray-500 text-sm"></span>
                </div>
                <input
                  type="text"
                  autoComplete="off"
                  {...register("first_name")}
                  className="rounded-md w-full border-gray-300 outline-offset-2 outline-transparent focus:border-green-500 focus:ring-green-300 focus:ring-2 text-sm"
                />
                {errors.first_name?.message && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.first_name.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-left sm:ml-4">Lastname</label>
                <input
                  type="text"
                  {...register("last_name")}
                  autoComplete="off"
                  className="rounded-md border-gray-300 outline-offset-2 outline-transparent focus:border-green-500 focus:ring-green-300 focus:ring-2 text-sm"
                />
                {errors.last_name?.message && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.last_name.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col mt-4 mb-4">
                <label className="text-left sm:ml-4">Email Address</label>
                <input
                  type="text"
                  {...register("email")}
                  autoComplete="off"
                  className={`${styles.inputBg} rounded-md focus:outline-none border-gray-300 outline-offset-2 outline-transparent focus:border-green-500 focus:ring-green-300 focus:ring-2 text-sm`}
                  // readOnly
                  disabled
                />
                {errors.email?.message && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <label className="text-left sm:ml-4">Country/Region</label>
              <div className="mb-6">
                <div className="relative shadow-sm">
                  <div className="pointer-event-none mt-2 absolute left-0 inset-y-0 flex items-center pl-3">
                    <span className="text-gray-500 text-sm">
                      <CiLocationArrow1 className="text-green-500" />
                    </span>
                  </div>
                  <input
                    type="text"
                    {...register("country")}
                    autoComplete="off"
                    className="rounded-md pr-7 pl-8 w-full border-gray-300 outline-offset-2 outline-transparent focus:border-green-500 focus:ring-green-300 focus:ring-2 text-sm"
                  />
                </div>
                {errors.country?.message && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.country.message}
                  </p>
                )}
              </div>
              <label className="text-left sm:ml-4">Password</label>
              <div className="mb-6">
                <div className="relative shadow-sm">
                  <div className="pointer-event-none mt-2 absolute left-0 inset-y-0 flex items-center pl-3">
                    <span className="text-gray-500 text-sm">
                      <TbPassword className="text-green-500" />
                    </span>
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    autoComplete="off"
                    className="rounded-md w-full pr-7 pl-8 border-gray-300 outline-offset-2 outline-transparent focus:border-green-500 focus:ring-green-300 focus:ring-2 text-sm"
                  />
                  {/* show or hide password */}
                  <div
                    className="absolute top-4 right-2 text-xl text-gray-700 cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                  </div>
                </div>
                {errors.password?.message && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <label className="text-left sm:ml-4">Confirm Password</label>
              <div className="mb-6">
                <div className="relative shadow-sm">
                  <div className="pointer-event-none mt-2 absolute left-0 inset-y-0 flex items-center pl-3">
                    <span className="text-gray-500 text-sm">
                      <TbPassword className="text-green-500" />
                    </span>
                  </div>
                  <input
                    type="password"
                    autoComplete="off"
                    {...register("confirm_password")}
                    className="rounded-md w-full pr-7 pl-8 border-gray-300 outline-offset-2 outline-transparent focus:border-green-500 focus:ring-green-300 focus:ring-2 text-sm"
                  />
                  {/* show or hide password */}
                  <div
                    className="absolute top-4 right-2 text-xl text-gray-700 cursor-pointer"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                  >
                    {showConfirmPassword ? <IoMdEye /> : <IoMdEyeOff />}
                  </div>
                </div>
                {errors.confirm_password?.message && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.confirm_password.message}
                  </p>
                )}
              </div>
              <label className="text-left sm:ml-4">Mobile Number</label>
              <div className="mb-6">
                <div className="relative shadow-sm">
                  <div className="pointer-event-none mt-2 absolute left-0 inset-y-0 flex items-center pl-3">
                    <span className="text-gray-500 text-sm">
                      <MdPhoneIphone className="text-green-500" />
                    </span>
                  </div>
                  <input
                    type="tel"
                    placeholder="012-3456-789"
                    {...register("phone_number")}
                    autoComplete="off"
                    className="inputField rounded-md w-full pr-7 pl-8 border-gray-300 outline-offset-2 outline-transparent focus:border-green-500 focus:ring-green-300 focus:ring-2 text-sm"
                    required
                  />
                </div>
                {errors.phone_number?.message && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.phone_number.message}
                  </p>
                )}
              </div>
              <div>
                <label className="flex flex-row justify-start label cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-primary mr-2 w-4 h-4 mb-2"
                  />
                  <span className="label-text text-xs text-gray-600">
                    I agree to the{" "}
                    <span className="text-blue-900 font-bold cursor-pointer">
                      User Agreement
                    </span>{" "}
                    and the{" "}
                    <span className="text-blue-900 font-bold cursor-pointer">
                      Privacy Policy
                    </span>
                  </span>
                </label>
              </div>
            </motion.div>
          )}

          {/* Step 3 Form */}

          {currentStep === 2 && (
            <motion.div
              initial={{ x: currentStep >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <p className="text-xs mt-2">
                <span className="text-blue-600">Please check your email</span>{" "}
                and continue your registration within 1 hour
              </p>
              <p className="mt-4 text-sm font-medium">
                Having problems receiving email?
              </p>
              <p className="flex flex-row items-center mb-2 mt-2 space text-xs">
                <Image className="w-1" src={Square} alt="rectangle" />
                <span className="text-black pl-2">
                  Please check your spam folder
                </span>
              </p>
              <p className="flex flex-row items-center mb-2 mt-2 space text-xs">
                <Image className="w-1" src={Square} alt="rectangle" />
                <span className="text-black pl-2">
                  Click here to{" "}
                  <span className="text-blue-600 cursor-pointer">
                    resend the email
                  </span>
                </span>
              </p>
              <p className="flex flex-row items-center mb-2 mt-2 space text-xs">
                <Image className="w-1" src={Square} alt="rectangle" />
                <span className="text-black pl-2">
                  Have you received? Try to{" "}
                  <span className="text-blue-600 cursor-pointer">
                    change your email address
                  </span>{" "}
                  instead of {formEmail}
                </span>
              </p>
            </motion.div>
          )}
          {currentStep === 3 && (
            <div className="mb-8">
              <h1
                style={{ color: "#00E600" }}
                className="text-base text-center mt-6 sm:text-3xl  font-bold leading-7"
              >
                Welcome Back
              </h1>
              <p className="mt-1 text-center text-sm leading-6">
                You have successfully created an account
              </p>
            </div>
          )}
        </form>

        <div className="flex mt-8">
          <button
            type="button"
            className={`button m-auto font-medium text-white w-full p-2 hover:scale-105 hover:shadow-lg hover:shadow-green-300 transition-all`}
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
          >
            {currentStep === 2 ? (
              <Link className="w-100" href="/login">
                Sign In
              </Link>
            ) : (
              "Next"
            )}
          </button>
        </div>
      </div>
    </main>
  );
};

export default SignUpCard;
