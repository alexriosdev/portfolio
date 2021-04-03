import React from 'react';
import content from '../content';
import { useOnScreen } from './Observer';

export const About = () => {
  const [setRef, visible] = useOnScreen({ threshold: 0.2 });
  const { about } = content;
  return (
    <section id="about">
      <div
        ref={setRef}
        className="bg-gradient-to-r from-cyan-400 to-emerald-300 text-white flex flex-col justify-center items-center"
      >
        <div
          className={`md:mx-20 mx-10 my-10 font-mono md:w-2/3 ${
            visible ? 'animate-fade-in-right ' : 'opacity-0'
          }`}
        >
          <h1 className="md:text-6xl text-4xl font-bold ">{about.title}</h1>
          <div className="md:w-48 md:h-48 w-32 h-32 mx-auto my-8">
            <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-black cursor-pointer">
              <img
                src={about.img}
                alt="profile picture"
                className="object-cover object-center w-full h-full visible group-hover:hidden"
              />
            </div>
          </div>
          <p className="md:text-lg text-base mb-8">{about.text}</p>
          <p className="md:text-lg text-base">{about.text}</p>
        </div>
      </div>
    </section>
  );
};