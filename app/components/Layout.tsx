import React, { ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Landing from "./Landing";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar userData={undefined} />
        <Landing />
      <Footer />
    </>
  );
};

export default Layout;
