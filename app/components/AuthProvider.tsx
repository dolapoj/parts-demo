"use client";
import React, { ReactNode } from "react";
import AuthProvider from "react-auth-kit";

// interface AuthProviderProps {
//   children: ReactNode;
//   authType: string;
//   authName: string;
// }

const AppAuthProvider = ({ children, authType, authName }: any) => {
  // const finalAuth = `${authType}, cookie`
  return (
    // <AuthProvider
    //   authName={"_auth"}
    //   cookieDomain={window.location.hostname}
    //   cookieSecure
    // >
    //   {children}
    // </AuthProvider>
    <></>
  );
};

export default AppAuthProvider;
