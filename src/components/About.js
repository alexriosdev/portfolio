import React from 'react';
import { useOnScreen } from './Observer';
import { content } from '../content/data';

export const About = () => {
  const [setRef, visible] = useOnScreen({ threshold: 0.05 });
  const { about } = content;
  return (
    <section id="about">
      <div ref={setRef} className="bg-secondary">
        <div
          className={`md:mx-20 mx-10 my-10 md:w-2/3 ${
            visible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h1 className="md:text-6xl text-4xl font-bold">{about.title}</h1>
          <div className="md:w-48 md:h-48 w-32 h-32 mx-auto my-8">
            <div className="w-full h-full rounded-full overflow-hidden shadow-inner bg-black">
              <img
                src={about.img}
                alt="avatar"
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>
          <p className="md:text-lg mb-2">{about.text}</p>
        </div>
      </div>
    </section>
  );
};
