import React from 'react'
import './Center.scss'
import img from '../b1.jpg'
import pro from '../logo.svg'
function Storygenerator() {
    return (
        <div className="storybox">
            <img src={img} alt=""  width="150px" />
        <div className="propic">
            <img src={pro} alt="" sizes="cover" />
        </div>
      </div>
    )
}

export default Storygenerator
