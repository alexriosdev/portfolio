import React from 'react';
import { FaHeart, FaReact } from 'react-icons/fa';
import { content } from '../content/data';

export const Footer = () => {
  const { footer } = content;
  return (
    <section id="footer">
      <div className="bg-secondary">
        <div className="py-3 text-xs flex flex-col items-center w-full mt-20 bg-black">
          <div className="font-mono flex">
            Made with&nbsp;
            <FaHeart className="mt-0.5 text-xm text-red-500" />
            &nbsp;&&nbsp;
            <FaReact className="mt-0.5 text-xm text-cyan-300" />
          </div>
          <a className="font-mono hover-gradient" href={footer.link.to}>
            {footer.link.text}
          </a>
        </div>
      </div>
    </section>
  );
};
