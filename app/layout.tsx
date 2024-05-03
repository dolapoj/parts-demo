import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from '@react-oauth/google'
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kinetic Parts",
  description: "Get your automobile parts",
};

interface RootLayoutProps {
  children: React.ReactNode;
  session: any; // Define the type of session here
}

export default function RootLayout({ children, session }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-center" />
        <GoogleOAuthProvider clientId="806292803476-urs300nfiqdfc0gekdnf3mrrpml5ehg9.apps.googleusercontent.com">
          {children}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
