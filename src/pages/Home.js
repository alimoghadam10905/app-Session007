import React from 'react'
import AmazingOffer from "../components/AmazingOffer/AmazingOffer";
import SlideShow from "../components/SlideShow/SlideShow";
import Banner from "../layouts/Banner/Banner";
const Home = () => {
  return (
    <>
        <SlideShow />
        <Banner />
        <AmazingOffer />
    </>
  )
}

export default Home
