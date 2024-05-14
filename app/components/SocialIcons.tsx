"use client";
import React from "react";
import Image from "next/image";
import FacebookIcon from "../../images/facebook.png";
import GoogleIcon from "../../images/google.png";
import LinkedIn from "../../images/linkedin.png";

import { signIn, useSession } from "next-auth/react"

// import { GoogleLogin } from '@react-oauth/google';
// import axios from "axios";

const SocialIcons = () => {
  const { data: session } = useSession();
  const endpoint = "http://kineticparts.africa/social/google";


  const onSuccess = (response: any) => {
    console.log(response);
    // Send the received token to the server for authentication
    try {
      // const apiResponse = axios.post(
      //       endpoint, response.accessToken,
      //       {
      //             headers: {
      //               "Content-Type": "application/json",
      //             }
      //       },
      // )
    } catch (error) {
      console.error(error)
    }
  };

  const onError = (error: any) => {
    console.error("Google login failed:", error);
  };

  return (
    <div className="flex flex-row mt-4 justify-center gap-8 text-xs items-center">
      {/* This facebook icon is hidden with tailwind css */}
      <div className="hidden">
        <Image
          src={FacebookIcon}
          alt="Facebook"
          quality={100}
          className="w-8"
        />
      </div>
      {/* End of icon */}
      <div onClick={() => signIn('google', { callbackUrl: '/'})} className="flex items-center text-xs gap-1 cursor-pointer">
        <Image src={GoogleIcon} alt="Google" quality={100} className="w-6" />
        Continue with Google
      </div>

      {/* This LinkedIn icon is hidden with tailwind css */}
      <div className="hidden">
        <Image src={LinkedIn} alt="LinkedIn" quality={100} className="w-8" />
      </div>
      {/* End if icon */}
    </div>
  );
};

export default SocialIcons;
