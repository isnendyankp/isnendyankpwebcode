"use client";
import React from 'react'
import { useState, useRef, useEffect } from "react";
import ProjectTag from "./ProjectTag";
import ProjectCard from "./ProjectCard";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Pagination from "./Pagination";

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
        description: {
          intro: "An extended version of the classic Rock-Paper-Scissors game, featuring two additional choices: Lizard and Spock. Test your luck and strategy against the computer.",
          features: [
            "Play the classic game with a twist: Rock, Paper, Scissors, Lizard, Spock.",
            "Compete against a computer opponent with randomized choices.",
            "Real-time feedback on the winner of each round.",
            "Keeps track of the score for both the player and the computer."
          ],
          outro: "This project was a fun exercise in implementing game logic, handling user input, and updating the UI dynamically with JavaScript."
        },
        image: "/images/projects/Spockrockgame.png",
        tag: ["All", "Mini Project"],
        deployUrl: "https://isnendyankp.github.io/spockrockgame.github.io/",
        gitUrl: "https://github.com/isnendyankp/spockrockgame.github.io",
      },
      {
        id: 8,
        title: "Drag and Drop",
        description: {
          intro: "An interactive Kanban board designed to help you manage tasks and workflows visually. With a clean interface, you can easily track project progress from start to finish.",
          features: [
            "Organize tasks into four distinct columns: Backlog, Progress, Complete, and On Hold.",
            "Seamlessly move tasks between columns with intuitive drag-and-drop functionality.",
            "Dynamically add new items to any column to keep your task board up-to-date.",
            "A responsive interface ensures a smooth experience across various devices."
          ],
          outro: "This project was an excellent exercise in implementing the HTML Drag and Drop API and manipulating the DOM to build a dynamic, interactive user interface."
        },
        image: "/images/projects/Draganddrop.png",
        tag: ["All", "Mini Project"],
        deployUrl: "https://isnendyankp.github.io/draganddrop.github.io/",
        gitUrl: "https://github.com/isnendyankp/draganddrop.github.io",
      },
      {
        id: 9,
        title: "Form Validator",
        description: {
          intro: "A client-side form validation project designed to ensure data accuracy and improve user experience. This application provides real-time feedback to users as they fill out the form, preventing invalid submissions.",
          features: [
            "Validates input fields such as username, email, and password in real-time.",
            "Provides clear and immediate error messages to guide users in correcting their input.",
            "Includes a password confirmation field to prevent typing errors.",
            "Features a clean and responsive layout that works seamlessly on different devices."
          ],
          outro: "This project was a great opportunity to practice JavaScript for implementing complex validation logic, DOM manipulation for displaying feedback, and using regular expressions for pattern matching."
        },
        image: "/images/projects/Formvalidator.png",
        tag: ["All", "Mini Project"],
        deployUrl: "https://isnendyankp.github.io/formvalidator.github.io/",
        gitUrl: "https://github.com/isnendyankp/formvalidator.github.io",
      },
      {
        id: 10,
        title: "Music Player",
        description: {
          intro: "A sleek and stylish web-based music player designed to deliver a seamless listening experience. Immerse yourself in curated tunes with this intuitive and visually appealing application.",
          features: [
            "Full playback control with play, pause, next, and previous track buttons.",
            "A dynamic progress bar to track your position within the current song.",
            "Visually engaging interface with updating song titles and album art.",
            "A curated playlist to set the perfect 'Electric Chill' vibe."
          ],
          outro: "This project was a fantastic opportunity to work with the HTML5 Audio API, handle media events, and build a responsive and interactive user interface with JavaScript."
        },
        image: "/images/projects/Musicplayer.png",
        tag: ["All", "Mini Project"],
        deployUrl: "https://isnendyankp.github.io/musicplayer.github.io/",
        gitUrl: "https://github.com/isnendyankp/musicplayer.github.io",
      },
      {
        id: 11,
        title: "Cat Fans Club",
        description: {
          intro: "A charming and delightful landing page for a 'Cat Fansclub,' created as part of a bootcamp project. This website serves as a central hub for cat lovers to find cute photos, interesting facts, and join a community of fellow enthusiasts.",
          features: [
            "Features a multi-page layout including a homepage, a gallery for cat photos, and an 'About Us' section.",
            "Engaging content such as a cat video, fun articles explaining cat behaviors, and a welcoming message.",
            "A clean and straightforward design, making it easy for users to navigate and enjoy the content.",
            "Includes a clear call-to-action to encourage visitors to join the fansclub."
          ],
          outro: "This project demonstrates solid foundational skills in HTML and CSS, focusing on creating a structured, multi-page static website with engaging content and a clear user flow."
        },
        image: "/images/projects/Catfansclub.png",
        tag: ["All", "Bootcamp Project"],
        deployUrl: "https://cat-fansclub.netlify.app/",
        gitUrl: "https://github.com/revou-fsse-3/module-1-isnendyankp/tree/main/Week-1",
      },
      {
        id: 12,
        title: "Nasa Photo of the Day",
        description: {
          intro: "A captivating web application that brings the wonders of the cosmos to your screen by fetching and displaying stunning images from NASA's public APIs. Explore breathtaking astronomical pictures and curate your own collection of favorites.",
          features: [
            "Dynamically loads spectacular images and their descriptions directly from the NASA API.",
            "Features an infinite scroll-style 'Load More' button to continuously discover new images.",
            "Allows users to save their favorite images to a personal 'Favorites' collection for later viewing.",
            "Provides clear user feedback when an image is successfully added to favorites."
          ],
          outro: "This project is an excellent showcase of consuming third-party REST APIs, handling asynchronous JavaScript operations, and dynamically manipulating the DOM to create an interactive and engaging user experience."
        },
        image: "/images/projects/Nasapod.png",
        tag: ["All", "Mini Project"],
        deployUrl: "https://isnendyankp.github.io/nasaapod.github.io/",
        gitUrl: "https://github.com/isnendyankp/nasaapod.github.io",
      },
      {
        id: 13,
        title: "Paint Clone",
        description: {
          intro: "A classic, web-based paint application that brings digital drawing to your browser. This project faithfully recreates the core functionality of traditional paint software, allowing you to draw, color, and save your creations using the power of the HTML5 Canvas.",
          features: [
            "A comprehensive toolbar with essential drawing tools: Brush, Eraser, and a Background Fill bucket.",
            "Full control over your brush with an adjustable size slider and a dedicated color picker.",
            "Save your artwork in two convenient ways: save the canvas state to local storage to resume later, or download your creation as a standard image file.",
            "Easily manage your workspace with 'Clear Canvas' and 'Clear Local Storage' options."
          ],
          outro: "This project is a deep dive into the HTML5 Canvas API, demonstrating complex state management and user interaction with pure JavaScript. It showcases skills in DOM manipulation for the toolbar, handling canvas drawing logic, and utilizing the Web Storage API for saving and loading user data."
        },
        image: "/images/projects/Paintclone.png",
        tag: ["All", "Mini Project"],
        deployUrl: "https://isnendyankp.github.io/paintclone.github.io/",
        gitUrl: "https://github.com/isnendyankp/paintclone.github.io",
      },
      {
        id: 14,
        title: "Picture in Picture",
        description: {
          intro: "Picture-in-picture (PiP) is a web feature that allows users to watch videos in a floating window while continuing to interact with other content on the page. This feature enhances user experience by providing a more immersive and flexible way to watch videos.",
          features: [
            "Default features",
            "Default features",
            "Default features",
            "Default features"
          ],
          outro: "Default outro"
        },
        image: "/images/projects/.png",
        tag: ["All", "Mini Project"],
        deployUrl: "https://isnendyankp.github.io/musicplayer.github.io/",
        gitUrl: "https://github.com/isnendyankp/musicplayer.github.io",
      },
  ];

const ProjectsSection = () => {
    // state    
    const [tag, setTag] = useState("All");
    const [searchQuery, setSearchQuery] = useState(""); // New state for search
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6;
    const projectsSectionRef = useRef(null);

    // handle tag change
    const handleTagChange = (newTag) => {
        setTag(newTag);
        setCurrentPage(1); // Reset to first page on tag change
    };

    // handle search change
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1); // Reset to first page on search
    };

    // filtered projects
    const filteredProjects = projectsData.filter((project) => {
        const tagMatch = tag === 'All' || project.tag.includes(tag);
        const searchMatch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
        return tagMatch && searchMatch;
    });

    // Pagination logic
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Scroll to top of projects section when page changes
    const isInitialMount = useRef(true);
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            projectsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [currentPage]);

    return (
        <section id="projects" ref={projectsSectionRef} className="py-24 scroll-mt-24">
            {/* Projects */}
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>

            {/* Search and Filter */}
            <div className="flex flex-col items-center gap-8 mb-8">
                {/* Search Input */}
                <div className="relative w-full md:w-1/2">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <MagnifyingGlassIcon className="h-5 w-5 text-[#9CA2A9]" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search for a project..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="w-full pl-10 pr-4 py-3 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block focus:ring-primary-500 focus:border-primary-500"
                    />
                </div>
                {/* Filter Buttons */}
                <div className="text-white flex flex-row justify-center items-center gap-2">
                    <ProjectTag
                        onClick={handleTagChange}
                        name="All"
                        isSelected={tag === "All"}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name="Bootcamp Project"
                        isSelected={tag === "Bootcamp Project"}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name="Mini Project"
                        isSelected={tag === "Mini Project"}
                    />
                </div>
            </div>

            {/* Mapping Projects */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {currentProjects.map((project) => (
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
            <Pagination 
                projectsPerPage={projectsPerPage}
                totalProjects={filteredProjects.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </section>
    );
};

export default ProjectsSection