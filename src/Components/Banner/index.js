import React, { useState } from 'react'
import Picbanner from '../../images/Thumbnail.png'
import Chapter from '../../icon/Chapters.png'
import View from '../../icon/View.png'

// sau nay lam nhieu banner thi truyen props o () => ({Thumbnail,Chapter,Views,Description})
const index = () => {
    return (
        <div >
            <h3 className="p-8 text-3xl font-bold text-center text-white ">Genius Mage in a Cultivation World
            </h3>
            <div className="flex flex-col w-3/6 py-2 mx-auto">
                <div className="flex mx-auto">
                    <img src={Picbanner} alt="firstbanner" />
                </div>
                <div className="flex justify-between py-2">
                    <span className="flex items-center ">
                        <img src={Chapter} alt="Chuong" />
                        <span className="text-sm font-bold text-white">12 Chapter</span>
                    </span>
                    <span className="flex items-center">
                        <img src={View} alt="View" />
                        <span className="text-sm font-bold text-white">12 Chapter</span>
                    </span>
                </div>
            </div>
            <p className="px-12 py-4 font-medium text-white opacity-40 ">
                Layn's life was relatively simple. Married to a princess, working as the top archmage of the country... Everything would be great if he never learned that his wife was actually cheating on him!....
            </p>
        </div>
    )
}

export default index
