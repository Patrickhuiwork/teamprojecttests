import Link from 'next/link'
import React, { useState } from 'react'
import NavItem from './NavItem'

const MENU_LIST = [
    {
        title: "Home",
        href:"/"
    },
    {
        title: "About",
        href:"/"
    },
    {
        title: "Contact",
        href:"/"
    },
    {
        title: "Tutorial",
        href:"/"
    },
    {
        title: "Follow",
        href:"/"
    }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <header>
          <nav className='nav'>
              <Link href={"/"} legacyBehavior>
                <a>
                  <h1 className='logo'>HeatHelp</h1>

                </a>
              </Link>

              <div className="nav__menu-bar" onClick={toggleMenu}>
                  <div className={`nav__menu-bar-line ${isOpen ? 'open' : ''}`}></div>
                  <div className={`nav__menu-bar-line ${isOpen ? 'open' : ''}`}></div>
                  <div className={`nav__menu-bar-line ${isOpen ? 'open' : ''}`}></div>
              </div>

              <div className={`nav__menu-list ${isOpen ? 'open' : ''}`}>
                  {
                      MENU_LIST.map((menu, idx) => {
                          return <div key={menu.text}>
                              <NavItem {...menu} />
                          </div>
                      })
                  }

              </div>
          </nav>
      </header>
  );
}

export default Navbar