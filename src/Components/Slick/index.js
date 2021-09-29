import React from 'react'
import Slider from "react-slick";
import './style.css'
import Pic1 from '../../images/Thumbnail6.png'
import Pic2 from '../../images/Thumbnail2.png'
import Pic3 from '../../images/Thumbnail3.png'
import Pic4 from '../../images/Thumbnail4.png'
import Pic5 from '../../images/Thumbnail5.png'

const pictures = [
    {
        picture: Pic1
    },
    {
        picture: Pic2
    },
    {
        picture: Pic3
    },
    {
        picture: Pic4
    },
    {
        picture: Pic5
    },
]

const index = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,

    };
    return (
        <div>
            <div className="container flex flex-col mx-auto">
                <Slider {...settings}>
                    {
                        pictures.map(({ picture }, index) => (
                            <div key={index}>
                                <img className="w-full" src={picture} alt="pics" />
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default index