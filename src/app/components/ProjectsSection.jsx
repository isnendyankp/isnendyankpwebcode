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
      tag: ["All", "Bootcamp Project"],
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
      tag: ["All", "Bootcamp Project"],
      deployUrl: "https://purewater-revou.netlify.app/",
      gitUrl: "https://github.com/isnendyankp/RevoU-Final-Project-FE-Group-D/",
      },
    {
      id: 3,
      title: "Animated Template",
      description: {
        intro: "A visually engaging and modern landing page template designed to showcase a product or company with dynamic, scroll-based animations.",
        features: [
          "Integrates the AOS (Animate On Scroll) library for smooth, eye-catching animations as the user scrolls.",
          "Features a clean, component-based layout for easy customization.",
          "Utilizes high-quality placeholder images from Unsplash to create a professional look.",
          "Built with a responsive design that adapts to various screen sizes."
        ],
        outro: "This project was a great opportunity to learn how to integrate and configure third-party animation libraries to enhance user experience."
      },
      image: "/images/projects/Animatedtemplate.png",
      tag: ["All", "Mini Project"],
      deployUrl: "https://isnendyankp.github.io/animatedtemplate.github.io/",
      gitUrl: "https://github.com/isnendyankp/animatedtemplate.github.io",
      },
    {
      id: 4,
      title: "Calculator",
      description: {
        intro: "A clean and intuitive web-based calculator for performing basic arithmetic operations with ease.",
        features: [
          "Supports standard operations: addition, subtraction, multiplication, and division.",
          "Includes essential functions like All Clear (AC) and Clear (C) for corrections.",
          "Responsive design for a seamless experience on both desktop and mobile devices.",
          "Intuitive interface for straightforward calculations."
        ],
        outro: "This project sharpened my skills in JavaScript logic, event handling, and DOM manipulation to build an interactive tool."
      },
      image: "/images/projects/Calculator.png",
      tag: ["All", "Mini Project"],
      deployUrl: "https://isnendyankp.github.io/calculator.github.io/",
      gitUrl: "https://github.com/isnendyankp/calculator.github.io",
      },
    {
      id: 5,
      title: "Custom Countdown",
      description: {
        intro: "An interactive web application that allows users to create custom countdowns for any event. Simply input a title and a target date, and the app will dynamically display the remaining time.",
        features: [
          "Set a custom title and date for your countdown.",
          "Real-time display of remaining time in days, hours, minutes, and seconds.",
          "Saves countdown data to local storage to persist between sessions.",
          "Clean and user-friendly interface."
        ],
        outro: "This project was a great exercise in JavaScript DOM manipulation and working with Date objects."
      },
      image: "/images/projects/Customcountdown.png",
      tag: ["All", "Mini Project"],
      deployUrl: "https://isnendyankp.github.io/customcountdown.github.io/",
      gitUrl: "https://github.com/isnendyankp/customcountdown.github.io/",
    },
    {
      id: 6,
      title: "Joke Teller",
      description: {
        intro: "Joke Teller is a web application that allows users to generate random jokes and quotes.",
        features: [
          "Generate random jokes and quotes.",
          "Clean and user-friendly interface.",
          "Built with a responsive design that adapts to various screen sizes."
        ],
        outro: "This project was a great opportunity to learn how to integrate and configure third-party animation libraries to enhance user experience."
      },
      image: "/images/projects/Joketeller.png",
      tag: ["All", "Mini Project"],
      deployUrl: "https://isnendyankp.github.io/JokeTeller.github.io/",
      gitUrl: "https://github.com/isnendyankp/JokeTeller.github.io",
      },
      {
        id: 7,
        title: "SpockRockGame",
        description: "Spock Rock Game is a web application that allows users to play a game of Spock Rock.",
        image: "/images/projects/Spockrockgame.png",
        tag: ["All", "Mini Project"],
        deployUrl: "https://isnendyankp.github.io/spockrockgame.github.io/",
        
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
          name="All"
          isSelected={tag === "All"}
          />
        {/* Bootcamp Project */}
        <ProjectTag
          onClick={handleTagChange} 
          name="Bootcamp Project" 
          isSelected={tag === "Bootcamp Project"}
          />
        {/* Mini Project */}
        <ProjectTag
          onClick={handleTagChange} 
          name="Mini Project" 
          isSelected={tag === "Mini Project"}
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