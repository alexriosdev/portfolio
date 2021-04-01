import React from 'react';
import content from '../content';
import { Link, animateScroll as scroll } from 'react-scroll';

const NavLink = ({ link }) => {
  return (
    <li className="nav-item">
      <Link
        activeClass="active"
        className="px-3 py-2 flex items-center text-base uppercase font-thin leading-snug cursor-pointer text-white hover:text-emerald-300"
        to={link.to}
        spy={true}
        smooth={true}
        offset={-40}
        duration={500}
      >
        {link.text}
      </Link>
    </li>
  );
};

export const Nav = () => {
  const { nav, resume } = content;
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <nav className="flex flex-wrap">
        <div className="fixed w-full font-mono">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <a
                  className="text-base font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase cursor-pointer text-white "
                  onClick={() => scroll.scrollToTop()}
                >
                  {nav.logo}
                </a>
                <button
                  className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
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
                  (menuOpen ? ' flex' : ' hidden')
                }
                id="example-navbar-info"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  {nav.links.map((link, idx) => {
                    return <NavLink link={link} key={idx} />;
                  })}
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-base uppercase font-thin leading-snug rounded-full bg-white text-black transition duration-300 ease-in-out hover:bg-emerald-300 hover:text-white"
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
