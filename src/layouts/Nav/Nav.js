import React from "react";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";
import { GrMenu, GrPhone, GrStatusInfo } from "react-icons/gr";
const Nav = () => {
  return (
    <>
      <div className={`d-flex category-menu ${styles.HeaderNavigation_navGroup}`}>
      <div className="nav-item h-full align-items-center  pl-3">
        <span className="d-flex text-nowrap align-items-center">
            <div className="d-flex ml-1">
              <GrMenu size="1rem" />
            </div>
            دسته‌بندی کالاها
        </span>

      </div>
      </div>
      <div className={`d-flex ${styles.HeaderNavigation_navGroup}`}>
        <div className="nav-item h-full align-items-center px-2 px-3">
          <Link to="/aboutus" className="d-flex align-items-center text-nowrap">
            <div className="d-flex ml-1">
              <GrStatusInfo size="1rem" />
            </div>
            درباره ما
          </Link>
        </div>
        <div className="nav-item h-full align-items-center px-2 px-3">
          <Link to="/contact" className="d-flex align-items-center text-nowrap">
            <div className="d-flex ml-1">
              <GrPhone size="1rem" />
            </div>
            تماس با ما
          </Link>
        </div>
      </div>
      <div className={`d-flex ${styles.HeaderNavigation_navGroup}`}>
        <div className="nav-item h-full align-items-center px-2 px-3">
          <Link to="/faq" className="d-flex align-items-center text-nowrap">
            <div className="d-flex ml-1"></div>سوالی دارید؟
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
