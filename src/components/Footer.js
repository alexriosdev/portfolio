import React from 'react';
import { FaHeart, FaReact } from 'react-icons/fa';
import content from '../content';

export const Footer = () => {
  const { footer } = content;
  return (
    <section id="footer">
      <div className=" bg-gradient-to-r from-cyan-400 to-emerald-300 text-white flex justify-center items-center">
        <div className="py-3 font-mono text-sm flex flex-col items-center w-full mt-20 bg-black">
          <div className="flex">
            Made with&nbsp;
            <FaHeart className="my-1 text-sm text-red-500" />
            &nbsp;&&nbsp;
            <FaReact className="my-1 text-sm text-cyan-300" />
          </div>
          <a
            className="transition duration-500 ease-in-out hover:text-cyan-300"
            href={footer.link.to}
          >
            {footer.link.text}
          </a>
        </div>
      </div>
    </section>
  );
};