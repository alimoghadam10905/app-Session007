import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./AmazingOffer.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { GrFormPrevious } from "react-icons/gr";
import { FreeMode, Navigation } from "swiper";
import Card from "../Card/Card";

const AmazingOffer = () => {
  const images1 = [
    {
      id: 1,
      price:849000,
      original:
        "https://dkstatics-public.digikala.com/digikala-products/2ae1b6a670d26320492e63ff02871c78ff489cb5_1641392544.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 2,
      price:80000,
      original:
        "https://dkstatics-public.digikala.com/digikala-products/6da45875afc4346bbb47c1da06d4780ee7c5d63c_1636871786.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 3,
      price:350000,
      original:
        "https://dkstatics-public.digikala.com/digikala-products/554bb9e443ea704f97a2590f610302b0b0497ea5_1646228400.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 4,
      price:812000,
      original:
        "https://dkstatics-public.digikala.com/digikala-products/2738d78a65e435f38db373a933f235741721c797_1651323936.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 5,
      price:60000,
      original:
        "https://dkstatics-public.digikala.com/digikala-products/4cb2c577a39e0a4ea0d133f1f64cd84058dc2ba5_1661064718.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 6,
      price:200000,
      original:
        "https://dkstatics-public.digikala.com/digikala-products/afa9cf455844b4582f1ee3c3121276ecb7fff79f_1656411699.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 7,
      price:309000,
      original:
        "https://dkstatics-public.digikala.com/digikala-products/6f8166cb9480523771810a5bd75b052521bd370d_1605786928.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 8,
      price:333000,
      original:
        "https://dkstatics-public.digikala.com/digikala-products/635442d4d728e5813198f1cf390956672571732a_1642839205.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 9,
      price:22000,
      original:
        "https://dkstatics-public.digikala.com/digikala-products/a91dc08e727cb821b550aa952ab55ff022384e9e_1640423902.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 10,
      price:222000,
      original:
        "https://dkstatics-public.digikala.com/digikala-products/4bf91e16cb1b0ba0efe80749d75e2775ce19b1e9_1654679129.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 11,
      price:76000,
      original:
        "https://dkstatics-public.digikala.com/digikala-products/8342cd31fe6f67881e9084546fbde3a64ec48a61_1606253319.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      id: 12,
      price:606000,
      original:
        "https://dkstatics-public.digikala.com/digikala-products/ff666e97a05a1258a2564629f6484bc60e9cde0f_1655794029.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
  ];
  return (
    <>
      <div className="container mx-auto px-4-lg px-0-2xl">
        <div
          className={`${style.amazingOffer} d-flex pos-relative overflow-hidden flex-nowrap`}
        >
          <Swiper
            dir="rtl"
            spaceBetween={2}
            slidesPerView={7}
            navigation={true}
            freeMode={true}
            modules={[FreeMode, Navigation]}
            className="mySwiper1"
          >
            <SwiperSlide>
              <div className="ml-2 mr-5 d-flex my-auto h-full flex-column justify-content-center align-items-center">
                <a
                  href="#"
                  className="d-flex  flex-column justify-content-center align-items-center"
                >
                  <div className="image-first-text">
                    <img src="https://www.digikala.com/statics/img/svg/amazing-typo.svg" />
                  </div>
                  <div className="mt-2 image-first-box">
                    <img src="https://www.digikala.com/statics/img/png/specialCarousel/box.png" />
                  </div>
                  <div className="mt-2 d-flex justify-content-center align-items-center first-text-more">
                    مشاهده همه
                    <GrFormPrevious size="1.6rem" />
                  </div>
                </a>
              </div>
            </SwiperSlide>

            {images1.map((item) => {
              return (
                <SwiperSlide className="item-amazing-offer">
                  <Card key={item.id} image={item.original} price={item.price} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default AmazingOffer;
