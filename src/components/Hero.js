import React from 'react';
import { Link } from 'react-scroll';
import { useOnScreen } from './Observer';
import { content } from '../content/data';

export const Hero = () => {
  const [setRef, visible] = useOnScreen({ threshold: 0.4 });
  const { hero } = content;
  const { link } = hero;
  return (
    <section id="hero">
      <div
        ref={setRef}
        className="text-black h-screen flex flex-col justify-center items-center"
      >
        <div
          className={`md:mx-20 mx-10 md:w-2/3 ${
            visible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h1 className={'font-mono md:text-lg text-base font-light'}>
            {hero.intro}
          </h1>
          <h1 className="md:text-6xl text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-emerald-300">
            {hero.title}
          </h1>
          <h1 className="md:text-6xl text-4xl font-bold mb-4">
            {hero.subtitle}
          </h1>
          <Link
            activeClass="active"
            className="px-5 py-2 rounded-full bg-black text-white md:text-lg font-title font-bold transition duration-500 ease-in-out hover:bg-cyan-300"
            to={link.to}
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
          >
            {link.text}
          </Link>
        </div>
      </div>
    </section>
  );
};
