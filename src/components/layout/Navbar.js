import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1 className="text-light h3">
        <i className={icon}></i>
        <span className="ml-2">{title}</span>
      </h1>
      <div className="navbar navbar-expand-sm">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-light" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fa fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
