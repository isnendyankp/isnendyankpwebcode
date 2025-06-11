import React, { useState } from 'react'
import Link from 'next/link'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'

const ProjectCard = ({imgUrl, title, description, gitUrl, previewUrl, repoUrl}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
        {/* Image */}
        <div 
            className="h-52 md:h-72 rounded-t-xl relative group"
            style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        >
            <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">  
                {/* Code Icon */}
                <Link href={gitUrl} target="_blank" rel="noopener noreferrer" className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                    <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
                </Link>
                {/* Eye Icon */}
                <Link href={previewUrl} target="_blank" rel="noopener noreferrer" className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                    <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
                </Link>
            </div>
        </div>
        <div className="text-white rounded-b-xl m-3 bg-[#181818]py-6 px-4">
            {/* Title */}
            <h5 className="text-xl font-semibold mb-2">{title}</h5>
            {/* Description */}
            <div className="text-[#ADB7BE] text-sm space-y-2">
              {typeof description === 'string' ? (
                <p>{description}</p>
              ) : (
                <>
                  <p>{description.intro}</p>
                  {description.features && description.features.length > 0 && (
                    <ul className="list-disc pl-5 mt-2">
                      {description.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  )}
                  {description.outro && (
                    <>
                      {isExpanded && <p className="mt-2">{description.outro}</p>}
                      <button
                        onClick={toggleReadMore}
                        className="text-blue-400 hover:underline mt-2 inline-block text-xs"
                      >
                        {isExpanded ? "Show Less" : "Continue Reading..."}
                      </button>
                    </>
                  )}
                </>
              )}
            </div>
            {/* Repo Link */}
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mt-2 inline-block"
              >
                View Source Code
              </a>
            )}
        </div>
    </div>
  )
}

export default ProjectCard