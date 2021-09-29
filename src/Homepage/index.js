import React from 'react'
import Navbar from '../Components/Navbar/index'
import Banner from '../Components/Banner/index'
import Listmovies from '../Components/Listmovies/Index'
import Footer from '../Components/Footer/index'
import Slick from '../Components/Slick/index'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const index = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Slick />
            <Listmovies />
            <Footer />
        </div>
    )
}

export default index
