import React from 'react';
import { useOnScreen } from './Observer';
import { content } from '../content/data';

const Card = ({ project }) => {
  const [setRef, visible] = useOnScreen({ threshold: 0.16 });
  return (
    <div ref={setRef} className="w-full my-10 flex lg:flex-row flex-col">
      <a
        className={`flex-none block h-auto w-full lg:h-1/2 lg:w-96 ${
          visible ? 'animate-fade-in-right' : 'opacity-0'
        }`}
        href={project.link.to}
      >
        <img
          className="rounded transform transition duration-500 hover:scale-110"
          src={project.img}
          alt={project.title}
        />
      </a>
      <div
        className={`lg:mx-8 lg:my-0 my-4 ${
          visible ? 'animate-fade-in-left ' : 'opacity-0'
        }`}
      >
        <h1 className="font-bold text-2xl mb-2">{project.title}</h1>
        <p className="md:text-lg mb-4">{project.text}</p>
        <p className="md:text-lg">Built with:</p>
        <div className="flex">
          {project.tools.map((tool, idx) => {
            return (
              <a
                className="mb-6 mr-4 md:text-lg font-title font-bold hover-gradient"
                href={tool.link}
                key={idx}
              >
                {tool.name}
              </a>
            );
          })}
        </div>
        <a className="btn-primary-helper" href={project.link.to}>
          <span className="btn-primary">{project.link.text}</span>
        </a>
      </div>
    </div>
  );
};

const ViewMore = ({ link }) => {
  const [setRef, visible] = useOnScreen({ threshold: 0.16 });
  return (
    <a
      ref={setRef}
      className={`mb-10 btn-primary-helper ${
        visible ? 'animate-fade-in-down' : 'opacity-0'
      }`}
      href={link.to}
    >
      <span className="btn-primary">{link.text}</span>
    </a>
  );
};

export const Projects = () => {
  const [setRef, visible] = useOnScreen({ threshold: 0.05 });
  const { experience } = content;
  return (
    <section id="projects">
      <div ref={setRef} className="bg-primary">
        <div
          className={`md:mx-20 mx-10 my-10 md:w-2/3 ${
            visible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h1 className="md:text-6xl text-4xl font-bold">{experience.title}</h1>
          <p className="md:text-lg text-gray-800 my-4">{experience.text}</p>
          {experience.projects.map((project, idx) => {
            return <Card project={project} key={idx} />;
          })}
        </div>
        <ViewMore link={experience.link} />
      </div>
    </section>
  );
};
