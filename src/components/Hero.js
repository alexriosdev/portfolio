import React from 'react';
import content from '../content';

export const Hero = () => {
  const { hero } = content;
  return (
    <section id="hero">
      <div className="bg-white h-screen flex flex-col justify-center items-center">
        <div className="md:mx-20 mx-10 font-mono md:w-2/3">
          <h1 className="md:text-lg text-base font-light text-gray-500">
            {hero.intro}
          </h1>
          <h1 className="md:text-6xl text-4xl font-bold text-gray-900">
            {hero.title}
          </h1>
          <h1 className="md:text-6xl text-4xl font-semibold text-gray-600">
            {hero.subtitle}
          </h1>
        </div>
      </div>
    </section>
  );
};
