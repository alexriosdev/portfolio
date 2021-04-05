import React from 'react';
import { useOnScreen } from './Observer';
import { content } from '../content/data';

export const Contact = () => {
  const [setRef, visible] = useOnScreen({ threshold: 0.2 });
  const { contact } = content;
  const { link } = contact;
  return (
    <section id="contact">
      <div ref={setRef} className="bg-secondary">
        <div
          className={`md:mx-20 mx-10 my-10 md:w-2/3 ${
            visible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h1 className="md:text-6xl text-4xl font-bold mb-4">
            {contact.title}
          </h1>
          <p className="md:text-lg mb-8">{contact.text}</p>
          <a className="btn-secondary" href={link.to}>
            {link.text}
          </a>
        </div>
      </div>
    </section>
  );
};
