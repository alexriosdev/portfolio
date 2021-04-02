import React from 'react';
import content from '../content';

const Card = ({ project }) => {
  return (
    <div className="bg-white w-full my-10 flex lg:flex-row flex-col font-mono">
      <img
        className="block h-auto w-full lg:h-1/2 lg:w-96 rounded"
        src={project.img}
      />
      <div className="lg:mx-8 lg:my-0 my-4 text-black">
        <div className="font-semibold text-2xl mb-2">{project.title}</div>
        <p className=" text-base text-gray-800 mb-4">{project.text}</p>
        Built with:
        <div className="flex">
          {project.tools.map((tool, idx) => {
            return (
              <a
                className="mb-6 mr-4 transition duration-500 ease-in-out hover:text-cyan-300"
                href={tool.link}
                key={idx}
              >
                {tool.name}
              </a>
            );
          })}
        </div>
        <a
          className="px-5 py-2 text-base font-bold leading-snug rounded-full bg-black text-white transition duration-500 ease-in-out hover:bg-cyan-300"
          href={project.link.to}
        >
          {project.link.text}
        </a>
      </div>
    </div>
  );
};

export const Projects = () => {
  const { experience } = content;
  return (
    <section id="projects">
      <div className="bg-white flex flex-col justify-center items-center">
        <div className="md:mx-20 mx-10 my-10 font-mono md:w-2/3">
          <h1 className="md:text-6xl text-4xl font-bold text-black">
            {experience.title}
          </h1>
          <p className="md:text-lg text-base text-gray-800 my-4">
            {experience.text}
          </p>
          {experience.projects.map((project, idx) => {
            return <Card project={project} key={idx} />;
          })}
        </div>
        <a
          className="mb-10 px-5 py-2 text-base font-bold leading-snug rounded-full bg-black text-white transition duration-500 ease-in-out hover:bg-cyan-300"
          href={experience.link.to}
        >
          {experience.link.text}
        </a>
      </div>
    </section>
  );
};
