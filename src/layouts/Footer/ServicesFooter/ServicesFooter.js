import React from 'react'
import styles from './ServicesFooter.module.scss'
const ServicesFooter = () => {
    const servicesFooter = [
        {
           id:1, 
          icon:
            "https://www.digikala.com/statics/img/svg/footer/express-delivery.svg",
            title:"اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس"
        },
        {
            id:2, 
           icon:
             "https://www.digikala.com/statics/img/svg/footer/cash-on-delivery.svg",
             title:"امکان پرداخت در محل"
         },
         {
            id:3, 
           icon:
             "https://www.digikala.com/statics/img/svg/footer/support.svg",
             title:"۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ"
         },
         {
            id:4, 
           icon:
             "https://www.digikala.com/statics/img/svg/footer/days-return.svg",
             title:"هفت روز ضمانت بازگشت کالا"
         },
         {
            id:5, 
           icon:
             "https://www.digikala.com/statics/img/svg/footer/original-products.svg",
             title:"ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ"
         },
      ];
  return (
    <>
      <div className={`${styles.servicesFooter} d-flex py-5 `}>
          
      {servicesFooter.map((item) => {
            return (
              <a href="#" className='d-flex flex-column flex-grow-1 text-center' key={item.id}>
                <span className='icon-services-footer'>
                    <img src={item.icon} />
                </span>
                <p>{item.title}</p>
              </a>
            );
          })}

      </div>
    </>
  )
}

export default ServicesFooter
