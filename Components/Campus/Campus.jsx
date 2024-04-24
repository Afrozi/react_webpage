import React from 'react'
import './Campus.css'
import gallert_1 from '../../assets/gallery-1.png'
import gallert_2 from '../../assets/gallery-2.png'
import gallert_3 from '../../assets/gallery-3.png'
import gallert_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallert_1} alt="" />
        <img src={gallert_2} alt="" />
        <img src={gallert_3} alt="" />
        <img src={gallert_4} alt="" />
      </div>
      <button className='btn dark_btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus
