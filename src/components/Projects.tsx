import React from 'react';
import Heading from './Heading';
import Card from './Card';
import '../app/styles/projects.css';

const data = [
    {
        id :0,
        title: "Static Interactive Resume",
        desc: "A Typescript-based interactive resume built with HTML & CSS , allowing users to showcase their skills dynamically.",
        img: "/project.PNG",
        tags: ["NODE","HTML","CSS","TYPESCRIPT"],
    }
]

const Projects = () => {
  return (
    <div id='projects' className="project-container">
        <Heading title='MY PROJECTS'/>
        <div className="projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center">
         {data.map((el) => (
          <Card
         key={el.id}
         title={el.title}
         desc={el.desc}
         img={el.img}
         tags={el.tags}
         />
         ))}
        </div>
    </div>
  )
}

export default Projects
