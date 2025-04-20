import React from 'react'
import '../Pages/css/Navbar.css'
import AOS from 'aos';

export default function NavBar() {
    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const topOffset = section.getBoundingClientRect().top + window.pageYOffset - 100;
            window.scrollTo({ top: topOffset, behavior: 'smooth' });
            section.setAttribute("data-aos", ""); // Clear animation
            setTimeout(() => {
                section.setAttribute("data-aos", 'fade-right'); // Re-apply animation
                AOS.refresh(); // Re-initialize AOS
            }, 600);
        }
    };
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            document.querySelector('.navbar').classList.add('navbar-active');
        } else {
            document.querySelector('.navbar').classList.remove('navbar-active');
        }
    });
    return (
        <>
            <div className="navbar">
                <div className="name"><span>WELCOME !</span></div>
                <div className='navoptions'>
                    <ul>
                        <li onClick={() => handleScroll("about")}>About</li>
                        <li onClick={() => handleScroll("education")}>Education</li>
                        <li onClick={() => handleScroll("skills")}>Skills</li>
                        <li onClick={() => handleScroll("projects")}>Projects</li>
                        <li onClick={() => handleScroll("services")}>Services</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
