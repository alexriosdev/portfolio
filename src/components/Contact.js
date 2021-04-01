import React from 'react';
import content from '../content';

export const Contact = () => {
  const { contact } = content;
  return (
    <section id="contact">
      <div className="bg-gray-800 flex flex-col justify-center items-center">
        <div className="md:mx-20 mx-10 my-10 font-mono md:w-2/3">
          <h1 className="md:text-6xl text-4xl font-bold text-white mb-4">
            {contact.title}
          </h1>
          <p className="md:text-lg text-base text-gray-200 mb-8">
            {contact.text}
          </p>
          <a
            href={contact.email}
            class="border-2 border-white rounded-lg font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-white hover:text-gray-800 mr-6"
          >
            {contact.button}
          </a>
        </div>
      </div>
    </section>
  );
};
