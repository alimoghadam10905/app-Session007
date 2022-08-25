import React from "react";
import style from "./DownloadAppFooter.module.scss";
import LogoFooterApp from "./footerlogoapp.png";
const DownloadAppFooter = () => {
  return (
    <>
      <div className={`${style.downloadFooterApp} d-flex justify-content-between `}>
        <div className={`${style.LogoFooterApp} d-flex align-items-center `}>
          <img src={LogoFooterApp} alt=" دانلود اپلیکیشن ای شاپ" />
          <h6> دانلود اپلیکیشن ای شاپ</h6>
        </div>
        <div className={`${style.iconAppFooter} d-flex align-items-center justify-content-end flex-grow-1`}>
          <a href="#">
            <img src="https://www.digikala.com/statics/img/svg/appStores/google-play.svg" />
          </a>
          <a href="#">
            <img src="https://www.digikala.com/statics/img/svg/appStores/coffe-bazzar.svg" />
          </a>
          <a href="#">
            <img src="https://www.digikala.com/statics/img/svg/appStores/myket.svg" />
          </a>
          <a href="#">
            <img src="https://www.digikala.com/statics/img/svg/appStores/sib-app.svg" />
          </a>
          <a href="#">
            <span>
              <img src="https://www.digikala.com/statics/img/svg/More.svg" />
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default DownloadAppFooter;
