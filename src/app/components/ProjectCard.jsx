import React from 'react'

const ProjectCard = ({imgUrl, title}) => {
  return (
    <div>
        {/* Image */}
        <div 
            className="h-52 md:h-72"
            style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        >
        </div>
        <div className="text-white">
            {/* Title */}
            <h5 className="text-xl font-semibold">{title}</h5>
            {/* Description */}
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard