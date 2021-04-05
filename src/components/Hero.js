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
      <div ref={setRef} className="bg-primary h-screen">
        <div
          className={`md:mx-20 mx-10 md:w-2/3 ${
            visible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h1 className={'font-mono md:text-lg text-base font-light'}>
            {hero.intro}
          </h1>
          <h1 className="md:text-6xl text-4xl font-extrabold text-gradient">
            {hero.title}
          </h1>
          <h1 className="md:text-6xl text-4xl font-bold mb-4">
            {hero.subtitle}
          </h1>
          <Link
            activeClass="active"
            className="btn-primary-helper cursor-pointer"
            to={link.to}
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
          >
            <span className="btn-primary">{link.text}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
