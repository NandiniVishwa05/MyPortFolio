import React from 'react'
import '../Pages/css/About.css'
import profile from '../assets/profile.jpg'

export default function About() {
  return (
    <>
      <div className="about">
        <div className="profilecontainer">
          <img src={profile} alt="profileimage" className="profileimg" />
        </div>
        <div className="profileaboutsection">
          <div className="profilename"><p>NANDINI VISHWAKARMA</p></div>
          <div className="profileheader"><p className='profilerole'>Full-Stack Developer </p></div>
          <div className="profileeducation"><span>Bachelors of Science in Information Technology</span></div>
          <div className="aboutcontact profilelocation"><p className=''> &#x1F4CD; Mumbai, India </p><p><i className="fas fa-phone-alt"></i> +91 8691943721</p><p><i className="fas fa-envelope"></i> nandinivish05@gmail.com </p></div>
          <div className="profiledesc">
            "As a full-stack developer, I build applications that seamlessly integrate front-end design with back-end functionality. Driven by a passion for technology, I focus on creating impactful, scalable user-centric web solutions."
          </div>
        </div>
      </div >
    </>
  )
}
