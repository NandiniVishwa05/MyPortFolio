import React from 'react'
import './css/Skills.css'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from "../assets/js.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import rest from "../assets/rest.png";
import figma from "../assets/figma.png";
import java from "../assets/java.jpg";
import vs from "../assets/vs.png";
import git from "../assets/git.png";
import github from "../assets/github.webp";
import sql from "../assets/mysql.svg";
export default function Skills() {
  const frontend = [{ image: html }, { image: css }, { image: js }, { image: react }, { image: redux }, { image: node }, { image: express }, { image: java }, { image: rest }, { image: sql },]
  const others = [{ image: vs }, { image: figma }, { image: git }, { image: github }]
  return (
    <>
      <div className="skill">
        <div className="skillheader"><p className="skillheader ">TOOLS & TECHNOLOGY</p></div>
        <div className="tooltechnologysection">
          <p className='subheader'>Technical Skills </p>
          <div className="divcontainer">
            {frontend.map((data, index) => (<><div className="techcontainer " key={index}><img src={data.image} alt="" className='containerimgage' /></div></>))}
          </div>
          <p className='subheader'>Tools</p>
          <div className="divcontainer">{others.map((data, index) => (<><div className="techcontainer" key={index}><img src={data.image} alt="" className='containerimgage' /></div></>))}
          </div>
        </div>
      </div>
    </>
  )
}
