"use client";
import React from "react";
import Image from "next/image";
import FacebookIcon from "../../images/facebook.png";
import GoogleIcon from "../../images/google.png";
import LinkedIn from "../../images/linkedin.png";

import { GoogleLogin } from "react-google-login";
import axios from "axios";

const SocialIcons = () => {
  const endpoint = "http://kineticparts.africa/social/google";
  const responseGoogle = (response: any) => {
    console.log(response);
    // Send the received token to your server for authentication
    try {
      const apiResponse = axios.post(
            endpoint, response.accessToken,
            {
                  headers: {
                    "Content-Type": "application/json",
                  }
            },
      )
    } catch (error) {
      console.error(error)
    }
  };

  const onFailure = (error: any) => {
    console.error("Google login failed:", error);
  };

  return (
    <div className="flex flex-row mt-4 justify-center gap-8 text-xs items-center">
      <div className="">
        <Image
          src={FacebookIcon}
          alt="Facebook"
          quality={100}
          className="w-8"
        />
      </div>
      <div>
        <GoogleLogin
          clientId="806292803476-urs300nfiqdfc0gekdnf3mrrpml5ehg9.apps.googleusercontent.com"
          onSuccess={responseGoogle}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="google-login-button"
            >
              <Image
                src={GoogleIcon}
                alt="Google"
                quality={100}
                className="w-8"
              />
            </button>
          )}
        />
        {/* <Image src={GoogleIcon} alt="Google" quality={100} className="w-8" /> */}
      </div>
      <div>
        <Image src={LinkedIn} alt="LinkedIn" quality={100} className="w-8" />
      </div>
    </div>
  );
};

export default SocialIcons;
