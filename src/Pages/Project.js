import React from 'react'
import "../Pages/css/Project.css";

export default function Project() {
  const projectdata = [
    {
      name: "Markify [Live Project]",
      desc: "A web-based system that automates Excel report generation based on marks entered by faculty. Faculty can log in to input subject-wise marks, while administrators manage users, subjects, and academic structures.",
      tech: "React.js, Redux, Node.js, Express.js, MySQL, JWT",
      code: 'https://github.com/NandiniVishwa05'
    },
    {
      name: "EVENT EASE [Live Project]",
      desc: "A web-based application designed to manage and organize academic and extracurricular event records in an institution. Faculty can add, update, and upload event details and documents, while the admin has access to track all records and manage users and system data securely.",
      tech: "React.js, Redux, Node.js, Express.js, MySQL, JWT",
      code: 'https://github.com/NandiniVishwa05'
    }
  ]
  return (
    <>
      <div className="project skill">
        <div className="skillheader"><p>PROJECT WORK</p></div>
        <div className="projectcarddiv">
          {projectdata.map((data, index) => (
            <div className="projectcard" key={index}>
              <>
                <div className="projectname"><p className='pname'>{data.name}</p></div>
                <div className="projecttech"><p className='ptech'>Tech Stack : {data.tech}</p></div>
                <div className="projectdesc"><p className='desc'>{data.desc}</p></div>
                <div className="projectcode"><a href={data.code}><button className='code'>Code</button></a></div>
              </>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}
