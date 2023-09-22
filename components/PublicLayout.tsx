import React, { ReactNode, FC, useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}


const PublicLayout: FC<LayoutProps> = ({ children }) => {

  return (
    <>
      <Header />
      <main className='w-4/5 mx-auto'>{children}</main>
      <Footer />
    </>
  );
};

export default PublicLayout;
