import React from "react";

import Footer from "../layouts/Footer/Footer";
import Header from "../layouts/Header/Header";


const MainPage = ({ children }) => {
  return (
    <>

        <Header />
        <main>{children}</main>
        <Footer />


    </>
  );
};

export default MainPage;
