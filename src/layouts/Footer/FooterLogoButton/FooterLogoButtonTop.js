import React from 'react'
import styles from "./FooterLogoButtonTop.module.scss";
import LogoFooter from "./logo.png";
import { GrFormUp } from "react-icons/gr";
const FooterLogoButtonTop = () => {
  return (
    <>
      <div className='d-flex justify-content-between  align-items-center'>
          <div className={`${styles.logoFooter}`}>
            <img src={LogoFooter} alt="logo footer"/>
          </div>
          <div className={`${styles.buttonTop}`}>
            <button>              <div className='d-flex justify-content-between  align-items-center'>
                  <span>بازگشت به بالا</span>
                  <span className='d-flex icon-top-footer mr-2'>
                    <GrFormUp size="1.5em" color='#a1a3a8'/>
                  </span>
              </div>
            </button>
            </div> 
      </div>
    </>
  )
}

export default FooterLogoButtonTop
