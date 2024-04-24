import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
         <div className="about-left">
            <img src={about_img} alt=""  className='about-img'/>
            {/* <img src={play_icon} alt=""  className='play_icon'/> */}
         </div>
         <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, error autem nam, ea reiciendis qui similique fugiat debitis neque nostrum laudantium rem expedita praesentium. Itaque facilis sed magnam voluptas recusandae!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat commodi voluptatem quos, ut quis rerum ullam deserunt dolorum atque aliquid ipsum at omnis perferendis itaque consequuntur consectetur nostrum, veniam modi.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi unde, dolor quisquam animi eveniet, dignissimos rerum deleniti, doloribus optio debitis ab odit assumenda eos consectetur consequatur voluptatum eaque eum quae!</p>
         </div>
    </div>
  )
}

export default About