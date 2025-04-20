import React from 'react'
import './css/Services.css'

export default function Services() {
  const data = [
    { name: "FRONTEND DEVELOPMENT", desc: "I create clean, interactive, and mobile-friendly user-centric interfaces using modern technology in React.js, and animations to enhance user experience." },
    { name: "WEB DEVELOPMENT", desc: "I develop end-to-end web applications, from crafting responsive user interfaces to implementing secure backend APIs and managing databases. Whether it’s a personal project or a full-featured websites." },
  ]
  return (
    <>
      <div className="services skill">
        <div className="skillheader"><p>MY SERVICES</p></div>
        <div className="servicesection">
          {data.map((data, index) => (<><div className="skillcard" key={index}><p className='pname'>{data.name}</p><br /><p className='desc'>{data.desc}</p></div> </>))}
        </div>
      </div>
    </>
  )
}
