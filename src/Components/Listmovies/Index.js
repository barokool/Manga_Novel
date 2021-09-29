import React, { useState } from 'react'
import Pic1 from '../../images/Thumbnail2.png'
import Pic2 from '../../images/Thumbnail3.png'
import './styles.css'

const Index = () => {
    const [movies, setMovies] = useState([{
        "title": "Rebirth Of The Strongest Celestial",
        "poster": Pic1
    },
    {
        "title": "The Gamer's System TGS",
        "poster": Pic2
    },
    {
        "title": "Rebirth Of The Strongest Celestial",
        "poster": Pic1
    },
    {
        "title": "The Gamer's System TGS",
        "poster": Pic2
    },
    {
        "title": "The Gamer's System TGS",
        "poster": Pic2
    },
    {
        "title": "Rebirth Of The Strongest Celestial",
        "poster": Pic1
    },
    {
        "title": "The Gamer's System TGS",
        "poster": Pic2
    },
    {
        "title": "Rebirth Of The Strongest Celestial",
        "poster": Pic1
    },])

    return (
        <div className="py-8">
            <div className="flex flex-wrap justify-between">
                {

                    movies.map(({ title, poster }, index) => (
                        <div className="flex flex-col px-8 py-4 mx-auto movie">
                            <img className="" src={`${poster}`} alt="pic" />
                            <h3 className="font-bold text-center text-white">{title}</h3>
                        </div>
                    ))
                }
            </div>
            <div className="px-20 pt-12 pb-4">
                <button className="w-full p-1 text-white rounded-md fold-bold ">Xem thêm</button>
            </div>
        </div>

    )
}

export default Index
