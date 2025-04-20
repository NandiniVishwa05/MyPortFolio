import React from 'react'
import '../Pages/css/Contact.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Contact() {
  const data = [
    { icon: <i className="fab fa-linkedin"></i>, link: "https://www.linkedin.com/in/nandinivishwa05" },
    { icon: <i className="fas fa-envelope"></i>, link: "mailto:nandinivish05@gmail.com" },
    { icon: <i className="fas fa-phone-alt"></i>, link: "tel:+918691943721" }
  ]
  return (
    <>
      <div className="contact skill">
        <div className="skillheader"><p>CONTACT ME</p></div>
        <div className="contactsection">
          <div className="s1"><p>I'm currently open to new opportunities! Whether you're looking for a frontend, backend or full-stack developer reach out me.<br /> I'm always happy to connect!</p><p>&#10084;</p></div>
        </div>
        <div className="contactdetail" style={{ fontSize: '2vw', display: 'flex', gap: '2vw', justifyContent: 'center', marginTop: '20px' }}>
          {data.map((data, index) => (
            <>
              <div className="subcontactdiv" key={index}><a href={data.link} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}><span className='cicon'>{data.icon}</span></a></div></>
          ))}
        </div>
      </div>
    </>
  )
}
