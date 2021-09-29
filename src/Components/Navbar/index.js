import React from 'react'
import Logo from '../../icon/NovelSky1.png'

const index = () => {

    return (
        <div className="flex p-4">
            <div>
                <span className="cursor-pointer">
                    <svg width="33" height="29" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="33" height="5" rx="2.5" fill="#C4C4C4" />
                        <rect y="11.7393" width="22" height="5" rx="2.5" fill="#C4C4C4" />
                        <rect y="23.478" width="33" height="5" rx="2.5" fill="#C4C4C4" />
                    </svg>
                </span>
            </div>

            <div className="flex mx-auto">
                <img src={Logo} alt="novelsky-logo" />
            </div>
        </div>
    )
}

export default index
