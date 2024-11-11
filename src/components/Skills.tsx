import React from 'react';
import "../app/styles/skills.css";

const Skills = () => {
  return (
    <div id='skills' className="skills-container">
      <div className="skills-grid">
        {/* First Column: Heading & paragraph */}
        <div data-aos="zoom-in-up" className="skills-left">
            <h2 className="skills-heading">Technologies I work with</h2>
            <p className="skills-text">I have a solid foundation in web development 
                specialixing in HTML,CSS & javascript. My experience extends to using frameworks
                like React & Next.js to create dynamic & user friendly applications. I am also good 
                in Tailwind CSS for efficient styling & design . With a passion of learning , I stay 
                updated on the latest technologies to enhnace my skill set and contribute effectively
                to projects.
            </p>
        </div>
        <div>
          {/* Second Column : Skills */}
           <div className="skills-right"></div>
             <div className="skills-icon-grid">
                <div className="skills-space">
                   <h2 data-aos="zoom-in-up">Node.js</h2>
                   <h2 data-aos="zoom-in-up">Next.js</h2>
                   <h2 data-aos="zoom-in-up">React.js</h2>
                </div>

                <div className="skills-space">
                   <h2 data-aos="zoom-in-up">Typescript</h2>
                   <h2 data-aos="zoom-in-up">Tailwind</h2>
                   <h2 data-aos="zoom-in-up">CSS</h2>
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
