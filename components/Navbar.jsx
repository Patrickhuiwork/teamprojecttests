import Link from 'next/link'
import React from 'react'
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
  return (
    <header>
        <nav className='nav'>
            <Link href={"/"}>
                <h1 className='logo'>HeatHelp</h1>
            </Link>

            <div className="nav__menu-bar">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className="nav__menu-list">
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
  )
}

export default Navbar