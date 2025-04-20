import React from 'react'
import "./css/Education.css"

export default function Education() {
    const data = [
        { study: "Bachelor of Science in Information Technology", college: "Ramanand Arya Dav College", marks: "9.90 CGPA | Bhandup", timeline: "2022 - 2025" },
        { study: "Higher Secondary School Certificate (HSC)", college: "Ramniranjan Jhunjhunwala College", marks: "60.81% | Ghatkopar", timeline: "2020 - 2022" },
        { study: "Secondary School Certifcate (SSC)", college: "Dnyanjyot Vidyalaya", marks: "79.42% | Kharghar", timeline: "2019 - 2020" }
    ]
    return (
        <>
            <div className=" education skill" >
                <div className="skillheader"><p>EDUCATION</p></div>
                <div className="educationsection">
                    {data.map((data, index) => (
                        <>
                            <div className="ecard" key={index}>
                                <div className="ecardsubdiv collegeinfo">
                                    <p>{data.study}</p>
                                    <p>{data.timeline}</p>
                                </div>
                                <div className="ecardsubdiv collegeinfo2">
                                    <p>{data.college}</p>
                                    <p>{data.marks}</p>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}
