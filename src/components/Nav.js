import React from 'react';
import content from '../content';

const NavLink = ({ link }) => {
  return (
    <li className="nav-item">
      <a
        className="px-3 py-2 flex items-center text-base uppercase font-thin leading-snug text-white hover:opacity-75"
        href={link.to}
      >
        {link.text}
      </a>
    </li>
  );
};

export const Nav = () => {
  const { nav } = content;
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <nav className="flex flex-wrap">
        <div className="w-full font-mono">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <a
                  className="text-base font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                  href="#"
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
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </>
  );
};
