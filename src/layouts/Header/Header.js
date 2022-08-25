import React from "react";
import LoginRegisterButton from "../../components/LoginRegisterButton/LoginRegisterButton";
import LogoSite from "../../components/LogoSite/LogoSite";
import HeadImage from "../../components/HeadImage/HeadImage";
import SearchBox from "../../components/SearchBox/SearchBox";
import ShoppingCartButton from "../../components/ShoppingCartButton/ShoppingCartButton";
import styles from "./Header.module.scss";
import Nav from "../Nav/Nav";
const Header = () => {
  return (
    <>
      <header>
        <div className="image-head-link">
          <HeadImage/>
        </div>
        <div className={`${styles.bg_header}`}>
          <div className="container-4xl-w mx-auto">
            <div className="d-flex justify-content-between align-items-center flex-row-reverse py-2">
              <div className="head-left d-flex justify-content-between flex-row-reverse align-items-center">
                <ShoppingCartButton />
                <LoginRegisterButton />
              </div>
              <div className="head-right">
                <LogoSite/>
                <SearchBox />
              </div>
            </div>
          </div>
        </div>
        <nav className={`${styles.headerNavightion} d-flex align-items-center justify-content-between flex-column`}>
             <div className="d-flex w-full container-4xl-w mx-auto pos-relative justify-content-between  flex-grow-1">
                 <div className={`d-flex pos-relative ${styles.navContainer}`}>
                      <Nav/>
                 </div>
             </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
