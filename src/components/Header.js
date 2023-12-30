// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

  const handleClick = (path) => {
    console.log(`Navigating to ${path}`);
  };

  
  return (
    <header>
      <nav>
        <ul>
          <li>
          <Link to="/" onClick={() => handleClick('/')}>Home</Link>
          </li>
          <li>
          <Link to="/items" onClick={() => handleClick('/items')}>Manage Items</Link>
          </li>
          <li>
            <Link to="/invoices" onClick={() => handleClick('/invoices')}>Create Invoices</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
