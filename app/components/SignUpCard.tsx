"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { z } from "zod";
import { FormDataSchema } from "@/lib/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
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
  },
  {
    id: "Step 4",
    name: "Complete",
  },
];

const SignUpCard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formEmail, setFormEmail] = useState("");
  const [activationLink, setActivationLink] = useState("")

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
    const endpoint = "http://kineticparts.africa/auth/register/";
    try {
      const response = await axios.post<ApiResponse>(endpoint, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data.activation_link)
      setActivationLink(response.data.activation_link)
      // console.log("Data successfully posted: ", response.data);
      toast.success("You can now check your email for account activation.")
    } catch (error) {
      // console.error("Error posting data:", error);
      toast.error("There might be an issue with your internet")
    }
    reset();
  };

  type FieldName = keyof Inputs;

  //Handle Next logic
  const handleNext = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    // REFIX NEXT LINE //
    if (!output && currentStep < 2) return console.log("there is a problem");

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 3) {
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
    <main className="p-6">
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
              <div className="flex flex-col">
                <label className="text-left sm:ml-4 font-semibold">
                  Sign Up with Email
                </label>
                <input
                  type="text"
                  placeholder=""
                  {...register("email")}
                  autoComplete="email"
                  onChange={(e) => setFormEmail(e.target.value)}
                  className="rounded-md"
                />
                {errors.email?.message && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.email.message}
                  </p>
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
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <div className="flex flex-col">
                {/* <button className="p-4 bg-black text-white" onClick={handleVin}>Hit me!</button> */}
                <label className="text-left sm:ml-4">
                  What type of user are you?{" "}
                  <span className="text-sm italic">(optional)</span>
                </label>
                <select
                  className="block w-full rounded-md"
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
                <div className="flex flex-col mt-4">
                  <label className="text-left sm:ml-4">Company</label>
                  <input
                    type="text"
                    placeholder="Ade & Sons"
                    {...register("company")}
                    autoComplete="off"
                    className="inputField rounded-md"
                  />
                  {errors.company?.message && (
                    <p className="mt-2 text-xs text-red-400">
                      {errors.company.message}
                    </p>
                  )}
                </div>
              )}
              <div className="flex flex-col mt-4">
                <label className="text-left sm:ml-4">Firstname</label>
                <input
                  type="text"
                  autoComplete="off"
                  {...register("first_name")}
                  className="rounded-md"
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
                  className="rounded-md"
                />
                {errors.last_name?.message && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.last_name.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-left sm:ml-4">Email Address</label>
                <input
                  type="text"
                  {...register("email")}
                  autoComplete="off"
                  className={`${styles.inputBg} rounded-md focus:outline-none`}
                  readOnly
                />
                {errors.email?.message && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-left sm:ml-4">Country/Region</label>
                <input
                  type="text"
                  {...register("country")}
                  autoComplete="off"
                  className="rounded-md"
                />
                {errors.country?.message && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.country.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-left sm:ml-4">Password</label>
                <input
                  type="password"
                  {...register("password")}
                  autoComplete="off"
                  className="rounded-md"
                />
                {errors.password?.message && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-left sm:ml-4">Confirm Password</label>
                <input
                  type="password"
                  autoComplete="off"
                  {...register("confirm_password")}
                  className="rounded-md"
                />
                {errors.confirm_password?.message && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.confirm_password.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-left sm:ml-4">Mobile Number</label>
                <input
                  type="tel"
                  placeholder="8100617304"
                  {...register("phone_number")}
                  autoComplete="off"
                  className="inputField rounded-md"
                />
                {errors.phone_number?.message && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.phone_number.message}
                  </p>
                )}
              </div>
              <label className="flex items-center mt-2">
                <input type="checkbox" className="mr-2 w-4 h-4" />
                <p className="text-xs text-gray-600">
                  I agree to the{" "}
                  <span className="text-blue-900 font-bold cursor-pointer">
                    User Agreement
                  </span>{" "}
                  and the{" "}
                  <span className="text-blue-900 font-bold cursor-pointer">
                    Privacy Policy
                  </span>
                </p>
              </label>
            </motion.div>
          )}
          {/* Step 3 Form */}
          {currentStep === 2 && (
            <motion.div
              initial={{ x: currentStep >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <p>
                {/* A confirmation mail was sent to your mailbox <br /> */}
                Activate your account with this link <br/>
                <span className="font-bold text-blue-600">
                  {/* {formEmail} */}
                  {activationLink}
                </span>{" "}
                <br />
                {/* with a link to verify your account */}
              </p>
              <p className="text-xs mt-2">
                <span className="text-blue-600">Please check your email</span>{" "}
                and continue your registration with 1 hour
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
        {/* esinxx@afripointgroup.com
        Ayodeji123@ */}
        {/* Navigation */}

        <div className="flex mt-8">
          <button
            type="button"
            className={`button m-auto font-medium text-white w-full p-2`}
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
          >
            {currentStep === 3 ? (
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