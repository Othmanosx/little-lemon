import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

import { navLinks } from '../navLinks';

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header>
      <nav className="container grid nav-bar">
        <Link className="nav-bar-logo" to="/">
          <img src="/logo.png" alt="Little Lemon logo" />
        </Link>
        <button
          className="nav-bar-hamburger"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {isNavExpanded ? <GiHamburgerMenu /> : <IoMdClose />}
        </button>
        <ul
          className={isNavExpanded ? 'nav-bar-links expanded' : 'nav-bar-links'}
        >
          {navLinks.map((navLink) => (
            <li
              key={navLink.name}
              onClick={() => setIsNavExpanded(false)}
              className="hover-animation"
            >
              <Link to={navLink.path}>{navLink.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
