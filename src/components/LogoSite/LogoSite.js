import React from 'react'
import Logo from "./logo.png";
import { Link } from "react-router-dom";
const LogoSite = () => {
  return (
    <>
    <div className='logo-site'>
    <Link to="/">
    <img src={Logo} alt="logo" />
      </Link>
    
    </div>
      
    </>
  )
}

export default LogoSite
