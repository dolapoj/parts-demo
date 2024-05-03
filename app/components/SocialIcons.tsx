"use client";
import React from "react";
import Image from "next/image";
import FacebookIcon from "../../images/facebook.png";
// import GoogleIcon from "../../images/google.png";
import LinkedIn from "../../images/linkedin.png";

import { GoogleLogin } from '@react-oauth/google';
import axios from "axios";

const clientId = "806292803476-urs300nfiqdfc0gekdnf3mrrpml5ehg9.apps.googleusercontent.com"

const SocialIcons = () => {
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
      <div>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed")
          }}
          // render={(renderProps) => (
          //   // <button
          //   //   onClick={renderProps.onClick}
          //   //   disabled={renderProps.disabled}
          //   //   className="google-login-button"
          //   // >
          //   //   {/* <Image
          //   //     src={GoogleIcon}
          //   //     alt="Google"
          //   //     quality={100}
          //   //     className="w-8"
          //   //   /> */}
          //   // </button>
          // )}
        />
        {/* <Image src={GoogleIcon} alt="Google" quality={100} className="w-8" /> */}
      </div>

      {/* This LinkedIn icon is hidden with tailwaind css */}
      <div className="hidden">
        <Image src={LinkedIn} alt="LinkedIn" quality={100} className="w-8" />
      </div>
      {/* End if icon */}
    </div>
  );
};

export default SocialIcons;
