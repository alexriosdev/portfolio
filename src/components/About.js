import React from 'react';
import content from '../content';

export const About = () => {
  const { about } = content;
  return (
    <section id="about">
      <div className="bg-gray-800 flex flex-col justify-center items-center">
        <div className="md:mx-20 mx-10 my-10 font-mono md:w-2/3">
          <h1 className="md:text-6xl text-4xl font-bold text-white">
            {about.title}
          </h1>
          <div className="md:w-48 md:h-48 w-32 h-32 mx-auto my-8">
            <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-black cursor-pointer">
              <img
                src={about.img}
                alt="profile picture"
                className="object-cover object-center w-full h-full visible group-hover:hidden"
              />
            </div>
          </div>
          <p className="md:text-lg text-base text-gray-200 mb-8">
            {about.text}
          </p>
          <p className="md:text-lg text-base text-gray-200">{about.text}</p>
        </div>
      </div>
    </section>
  );
};
