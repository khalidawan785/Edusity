import React from 'react'
import './Campus.css'
import campus_1 from '../../Images/gallery-1.png'
import campus_2 from '../../Images/gallery-2.png'
import campus_3 from '../../Images/gallery-3.png'
import campus_4 from '../../Images/gallery-4.png'
import white_arrow from '../../Images/white-arrow.png'


const Campus = () => {
  return (
    <div className='Campus'>
        <div className="gallery">
            <img src={campus_1} alt="" />
            <img src={campus_2} alt="" />
            <img src={campus_3} alt="" />
            <img src={campus_4} alt="" />
        </div>
        <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus