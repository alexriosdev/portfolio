import React from 'react';
import content from '../content';
const Card = ({ project }) => {
  return (
    <div className="bg-white w-full my-8 flex md:flex-row flex-col  font-mono">
      <div
        className="h-48 w-auto md:w-48 flex-none bg-cover rounded"
        style={{
          backgroundImage: `url(${project.img})`,
        }}
      ></div>
      <div className="md:mx-8 md:my-0 my-4 text-black">
        <div className="font-semibold text-2xl mb-2">{project.title}</div>
        <p className=" text-base text-gray-800">{project.text}</p>
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
      </div>
    </section>
  );
};
