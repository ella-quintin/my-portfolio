import React from 'react';

const ProjectsCard = ({
  projectName,
  img,
  description,
  contributors,
  projectLink,
}) => {
  return (
    <div className="relative overflow-hidden group">
      <img className="w-full h-auto" src={img} alt="Project image" />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col justify-center items-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-2xl font-semibold">{projectName}</h3>
        <p className="mt-2">{description}</p>
        <p className="mt-1">{contributors}</p>
        <a href={projectLink} target="_blank" rel="noopener noreferrer" className='mt-8'>
          <button className='bg-white text-black rounded-lg px-4 py-2 hover:bg-gray-200'>
            View project
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectsCard;
