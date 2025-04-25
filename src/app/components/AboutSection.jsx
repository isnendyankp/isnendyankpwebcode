"use client"

import React from 'react'
import Image from 'next/image'
import { useState, useTransition } from 'react'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
          <ul className="list-disc pl-2">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
          </ul>
        ),
      },
      {
        title: "Experience",
        id: "experience",
        content: (
          <ul className="list-disc pl-2">
            
          </ul>
        ),
      },
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills")
  const [startTransition, isPending] = useTransition()

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className="text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
            <Image src="/images/about-image.png" width={500} height={500} />
            <div>
                {/* Title */}
                <h2 className="text-4xl font-bold text-white mb-4">
                    About Me
                </ h2>
                {/* Description */}
                <p className="text-base lg:text-lg">
                    Hello, I'm Nendy, I am an Accounting graduate transitioning into a Front-End Engineer. I have previously completed RevoU’s Full-Stack Engineer Bootcamp, where I gained hands-on experience and skills. My recent work experience at Hijra Alami has allowed me to develop a versatile skill set, where I worked as a Freelance QA Automation Engineer ensuring a smooth transition for their core banking system, and then transitioned into a Front-End Engineer role in the finance and deposits division. In this role, I directly contributed to improving user experience and streamlining financial processes. I am proficient in front-end technologies such as Next.js, TypeScript, Playwright, and Tailwind CSS, and have an understanding of back-end technologies including Python, Poetry, Postman, and Flask. My combined experience in QA and Front-End Development, along with my ability to adapt quickly and contribute to critical projects, makes me a valuable asset to any team.
                </p>
                {/* Skills, Education, Experience */}
                <div className="flex flex-row mt-8">
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                    {" "}Skills{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                    {" "}Education{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>
                    {" "}Experience{" "}
                    </TabButton>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection