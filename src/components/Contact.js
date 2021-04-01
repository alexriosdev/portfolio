import React from 'react';
import content from '../content';

export const Contact = () => {
  const { contact } = content;
  const { link } = contact;
  return (
    <section id="contact">
      <div className=" bg-gradient-to-r from-cyan-400 to-emerald-300 text-white flex flex-col justify-center items-center">
        {' '}
        <div className="md:mx-20 mx-10 my-10 font-mono md:w-2/3">
          <h1 className="md:text-6xl text-4xl font-bold mb-4">
            {contact.title}
          </h1>
          <p className="md:text-lg text-base mb-8">{contact.text}</p>
          <a
            href={link.to}
            className="border-2 border-white rounded-lg font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-white hover:text-gray-800 mr-6"
          >
            {link.text}
          </a>
        </div>
      </div>
    </section>
  );
};
