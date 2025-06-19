"use client";
import React from 'react'
import { useState } from "react";
import ProjectTag from "./ProjectTag";
import ProjectCard from "./ProjectCard";

const projectsData = [
    {
      id: 1,
      title: "Masakin Website",
      description: {
        intro: "A mobile-friendly website to make cooking easier. Masakin helps you find dishes, explore regional cuisines, and master new meals with detailed recipes and ingredient lists.",
        features: [
          "Search for specific food types and explore regional dishes.",
          "View detailed food descriptions and step-by-step recipes.",
          "Get a complete list of required ingredients for any meal."
        ],
        outro: "I developed key components for this project, including the Landing Page, Registration, and Recipe pages."
      },
      image: "/images/projects/Masakin.png",
      tag: ["All", "Web"],
      deployUrl: "https://masakin-fe-irfans-projects-8d4765df.vercel.app//",
      gitUrl: "https://github.com/isnendyankp/masakin_FE",
    },
    {
      id: 2,
      title: "Pure Water Website",
      description: {
        intro: "A user-friendly website showcasing a range of water filtration products designed to provide cleaner, safer water for everyday household needs.",
        features: [
          "Browse a catalog of water purification systems and accessories.",
          "Learn about the benefits of water filtration and different purification technologies.",
          "User account management for a personalized experience (e.g., order history, preferences)."
        ],
        outro: "I was responsible for developing the secure and efficient login and registration sections for this platform."
      },
      image: "/images/projects/purewater.png",
      tag: ["All", "Web"],
      deployUrl: "https://purewater-revou.netlify.app/",
      gitUrl: "https://github.com/isnendyankp/RevoU-Final-Project-FE-Group-D/",
      },
    {
      id: 3,
      title: "Animated Template",
      description: "In this project, I learn how to use AOS (animation on scroll) & add inside HTML. And also this project uses Unsplash images and random user images.",
      image: "/images/projects/Animatedtemplate.png",
      tag: ["All", "Web"],
      deployUrl: "https://isnendyankp.github.io/animatedtemplate.github.io/",
      gitUrl: "https://github.com/isnendyankp/animatedtemplate.github.io",
      },
    {
      id: 4,
      title: "Calculator",
      description: "In this project, I learned how to create calculator project.",
      image: "/images/projects/Calculator.png",
      tag: ["All", "Mobile"],
      deployUrl: "https://isnendyankp.github.io/calculator.github.io/",
      gitUrl: "https://github.com/isnendyankp/calculator.github.io",
      },
    {
      id: 5,
      title: "React Firebase Template",
      description: "Authentication and CRUD operations",
      image: "/images/projects/5.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      },
    {
      id: 6,
      title: "Full-stack Roadmap",
      description: "Project 5 description",
      image: "/images/projects/6.png",
      tag: ["All", "Web"],
      gitUrl: "/",
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
            deployUrl={project.deployUrl}
            />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection