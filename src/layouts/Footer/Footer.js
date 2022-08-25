import React from 'react'
import ContactFooter from './ContactFooter/ContactFooter'
import CopyRight from './CopyRight/CopyRight'
import DownloadAppFooter from './DownloadAppFooter/DownloadAppFooter'
import FooterLogoButtonTop from './FooterLogoButton/FooterLogoButtonTop'
import LinkFooter from './LinkFooter/LinkFooter'
import ServicesFooter from './ServicesFooter/ServicesFooter'

const Footer = () => {
  return (
    <>
      <footer>
            <div className='container-4xl-w mx-auto'>
                <div className='footer'>
                    <FooterLogoButtonTop/>
                    <ContactFooter/>
                    <ServicesFooter/>
                    <LinkFooter/>
                    <DownloadAppFooter/>
                    <CopyRight/>
                </div>

            </div>


      </footer>
    </>
  )
}

export default Footer
