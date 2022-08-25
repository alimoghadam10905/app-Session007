import React from "react";
import style from "./LinkFooter.module.scss";
import { GrInstagram,GrTwitter,GrLinkedin } from "react-icons/gr";
const LinkFooter = () => {
  return (
    <>
      <div className={`${style.linkFooter} d-flex`}>
        <div className="d-block flex-grow-1">
          <h3>با ای شاپ </h3>
          <a href="#" className="d-block mb-2">اتاق خبر</a>
          <a href="#" className="d-block mb-2">فرصت‌های شغلی</a>
          <a href="#" className="d-block mb-2">گزارش تخلف</a>
          <a href="#" className="d-block mb-2">تماس با ما</a>
          <a href="#" className="d-block mb-2">درباره ما</a>
        </div>
        <div className="d-block flex-grow-1">
          <h3>خدمات مشتریان </h3>
          <a href="#" className="d-block mb-2">پاسخ به پرسش‌های متداول</a>
          <a href="#" className="d-block mb-2">رویه‌های بازگرداندن کالا</a>
          <a href="#" className="d-block mb-2">شرایط استفاده</a>
          <a href="#" className="d-block mb-2">حریم خصوصی</a>
          <a href="#" className="d-block mb-2">گزارش باگ</a>
        </div>
        <div className="d-block flex-grow-1">
          <h3>راهنمای خرید از ای شاپ </h3>
          <a href="#" className="d-block mb-2">نحوه ثبت سفارش</a>
          <a href="#" className="d-block mb-2">رویه ارسال سفارش</a>
          <a href="#" className="d-block mb-2">شیوه‌های پرداخت</a>
        </div>
        <div className="social-footer flex-grow-1">
            <h3>با ما همراه باشید!</h3>
            <div className="soical-footer-icon d-flex align-items-center">
                <a href="#" className="ml-5">
                    <GrInstagram size="2rem"/>
                </a>
                <a href="#" className="ml-5">
                    <GrTwitter size="2rem"/>
                </a>
                <a href="#" className="ml-5">
                    <GrLinkedin size="2rem"/>
                </a>
            </div>
        </div>
      </div>
    </>
  );
};

export default LinkFooter;
