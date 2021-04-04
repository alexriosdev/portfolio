import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { content } from '../content/data';

export const Nav = () => {
  const { nav, resume } = content;
  const [menuOpen, setMenuOpen] = React.useState(false);

  const NavLink = ({ link }) => {
    return (
      <li className="nav-item">
        <Link
          activeClass="active"
          className="px-3 py-2 flex items-center text-base uppercase font-thin leading-snug cursor-pointer text-white transition duration-300 ease-in-out hover:text-cyan-300"
          to={link.to}
          spy={true}
          smooth={true}
          offset={-40}
          onClick={() => setMenuOpen(false)}
          duration={500}
        >
          {link.text}
        </Link>
      </li>
    );
  };

  return (
    <>
      <nav className="flex flex-wrap relative z-50">
        <div className="fixed w-full font-mono">
          <nav className="flex flex-wrap items-center justify-between py-0 bg-black text-white">
            <div className="container lg:px-20 md:px-10 px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <button
                  className="px-3 py-2 flex items-center text-2xl uppercase font-bold leading-snug cursor-pointer transition duration-500 ease-in-out hover:text-cyan-300"
                  onClick={() => scroll.scrollToTop()}
                >
                  {nav.logo}
                </button>
                <button
                  className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none transition duration-500 ease-in-out hover:text-cyan-300"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        menuOpen
                          ? 'M6 18L18 6M6 6l12 12'
                          : 'M4 6h16M4 12h16M4 18h16'
                      }
                    />
                  </svg>
                </button>
              </div>
              <div
                className={
                  'lg:flex flex-grow items-center' +
                  (menuOpen ? ' flex justify-center' : ' hidden')
                }
                id="example-navbar-info"
              >
                <ul className="flex flex-col items-center lg:flex-row list-none lg:ml-auto">
                  {nav.links.map((link, idx) => {
                    return <NavLink link={link} key={idx} />;
                  })}
                  <li className="nav-item">
                    <a
                      className="lg:my-0 my-2 px-5 py-2 flex items-center text-base uppercase font-bold leading-snug rounded-full bg-white text-black transition duration-500 ease-in-out hover:bg-cyan-300 hover:text-white"
                      href={resume.link.to}
                    >
                      {resume.link.text}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </>
  );
};
