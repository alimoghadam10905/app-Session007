import React from 'react'
import styles from './ContactFooter.module.scss'
const ContactFooter = () => {
  return (
    <>
      <div className={`${styles.ContactFooter} d-flex align-items-center`}>
           <p>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
           <span className='d-flex px-3'>|</span>
           <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
      </div>
    </>
  )
}

export default ContactFooter
