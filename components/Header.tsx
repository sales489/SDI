import React from 'react';
import { Page } from '../types';
interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

// The navigation items are stored in an array of objects for easier mapping.
const navItems = [
  { label: 'Home', page: Page.Home },
  { label: 'Our Services', page: Page.Services },
  { label: 'Our Goals', page: Page.Collaboration },
];


function Header({ currentPage, setCurrentPage }: HeaderProps) {
  return (
    <header id="main-header">
      <div className="container header-container">
        <div 
          className="logo-container"
          onClick={() => setCurrentPage(Page.Home)}
        >
         
          <img 
            src="/Images/logo.png" 
            alt="Lycaon Logo" 
            className="logo-img" 
          />
          {/* Added "SDI Solutions" text here */}
          <span className="logo-text">SDI Solutions</span>
        </div>

        {/* Navigation Links Section */}
        <nav id="main-nav">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setCurrentPage(item.page)}
              // Dynamically apply the 'active' class based on the current page.
              className={currentPage === item.page ? 'active' : ''}
            >
              {item.label}
            </button>
          ))}
           
        </nav>

        {/* Mobile Menu Icon (Placeholder) */}
        <div id="mobile-menu-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
