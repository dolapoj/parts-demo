import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { SessionWrapper } from "./components/SessionWrapper";
// import { GoogleOAuthProvider } from '@react-oauth/google'
// import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kinetic Parts",
  description: "Get your automobile parts",
};

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
  }>) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <SessionWrapper>{children}</SessionWrapper>
          <Toaster position="top-center" />
        </body>
      </html>
  );
}
