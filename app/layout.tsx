import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
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
        {children}
        {/* {typeof window !== "undefined" && (
          <SessionProvider session={session}>
            {children}
          </SessionProvider>
        )} */}
      </body>
    </html>
  );
}
