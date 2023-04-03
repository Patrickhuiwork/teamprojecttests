import Link from 'next/link';
import React from 'react';

const NavItem = ({ title, href, active }) => {
  return (
    <Link href={href}>
      <a className={`nav__item ${active ? 'active' : ''}`}>{title}</a>
    </Link>
  );
};

export default NavItem;