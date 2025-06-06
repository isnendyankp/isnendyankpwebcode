"use client";
import React from 'react'
import { useState } from "react";
import ProjectTag from "./ProjectTag";
import ProjectCard from "./ProjectCard";

const projectsData = [
    {
      id: 1,
      title: "React Portfolio Website",
      description: "Project 1 description",
      image: "/images/projects/Masakin.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Potography Portfolio Website",
      description: "Project 2 description",
      image: "/images/projects/2.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "E-commerce Application",
      description: "Project 3 description",
      image: "/images/projects/3.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Food Ordering Application",
      description: "Project 4 description",
      image: "/images/projects/4.png",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "React Firebase Template",
      description: "Authentication and CRUD operations",
      image: "/images/projects/5.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 6,
      title: "Full-stack Roadmap",
      description: "Project 5 description",
      image: "/images/projects/6.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
  ];

const ProjectsSection = () => {
    // state    
    const [tag, setTag] = useState("All");
    // handle tag change
    const handleTagChange = (newTag) => {
        setTag(newTag);
        };
    // filtered projects
    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
      );
  return (
    <section id="projects" className="py-24">
      {/* Projects */}
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      {/* Filter */}
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {/* All */}
        <ProjectTag
         onClick={handleTagChange}
         tag="All"
         isSelected={tag === "All"}
        />
        {/* Web */}
        <ProjectTag
         onClick={handleTagChange}
         tag="Web"
         isSelected={tag === "Web"}
        />
        {/* Mobile */}
        <ProjectTag
         onClick={handleTagChange}
         tag="Mobile"
         isSelected={tag === "Mobile"}
        />
      </div>
      {/* Mapping Projects */} 
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project.tag}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection