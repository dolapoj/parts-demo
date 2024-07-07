import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { SessionWrapper } from "./components/SessionWrapper";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kinetic Parts",
  description: "Get your automobile parts",
};

export default function RootLayout({
  children,
  includeHeaderFooter = true,
}: Readonly<{
  children: React.ReactNode;
  includeHeaderFooter?: boolean;
}>) {
  return (
    <html lang="en" className="bg-landing">
      <body className={inter.className}>
        <SessionWrapper>
          {includeHeaderFooter && <NavBar userData={undefined} />}
          {children}
          {includeHeaderFooter && <Footer />}
        </SessionWrapper>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
