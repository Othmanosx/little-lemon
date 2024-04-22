import { FaEnvelope } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa';

import { FaFacebook } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { navLinks } from '../navLinks';

const socials = [
  { icon: FaFacebook, name: 'facebook' },
  { icon: FaSquareXTwitter, name: 'instagram' },
  { icon: FaInstagram, name: 'twitter' },
  { icon: FaYoutube, name: 'youtube' },
];

const Footer = () => {
  return (
    <footer className="site-footer" id="contact">
      <img
        className="site-footer-logo"
        src="/logo-white.png"
        alt="Little Lemon"
      />
      <nav className="site-footer-nav">
        <h4>Sitemap</h4>
        <ul>
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <Link to={navLink.path}>{navLink.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="site-footer-contact">
        <h4>Contact us</h4>
        <address>
          <p>
            <FaLocationDot /> 11 Little Lemon Street, Chicago, IL 60602
          </p>
          <p>
            <FaPhone /> +1 (012) 345-6789
          </p>
          <p>
            <FaEnvelope /> info@littlelemon.com
          </p>
        </address>
      </div>
      <div className="site-footer-social">
        <h4>Connect with us</h4>
        {socials.map((social, index) => (
          <a
            key={index}
            href={`https://www.${social.name}.com`}
            target="_blank"
            rel="noreferrer"
          >
            <social.icon />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
