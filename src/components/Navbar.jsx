import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SVG Icons
  const ShoppingCartIcon = () => (
    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
  );

  const UserIcon = () => (
    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );

  const SearchIcon = () => (
    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );

  const MenuIcon = () => (
    <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );

  const CloseIcon = () => (
    <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Categories', href: '/categories' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Cart', href: '/cart', icon: <ShoppingCartIcon /> },
    { name: 'Login', href: '/login', icon: <UserIcon /> },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo - Left Corner */}
        <div className="logo">
          <a href="/" className="logo-link">
            <span className="logo-text">LUSTRALIS</span>
          </a>
        </div>

        {/* Navigation Wrapper - Pushes everything to right */}
        <div className="nav-wrapper">
          {/* Desktop Menu */}
          <div className="nav-menu-desktop">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="nav-link"
                onClick={closeMenu}
              >
                {link.icon && <span className="nav-icon">{link.icon}</span>}
                <span className="nav-text">{link.name}</span>
              </a>
            ))}
          </div>

          {/* Search Bar */}
          <div className={`search-container ${searchOpen ? 'active' : ''}`}>
            <button
              className="search-toggle"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              <SearchIcon />
            </button>
            <div className="search-wrapper">
              <input
                type="text"
                placeholder="Search products..."
                className="search-input"
              />
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`nav-menu-mobile ${isOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="mobile-nav-link"
                onClick={closeMenu}
              >
                {link.icon && <span className="mobile-nav-icon">{link.icon}</span>}
                <span className="mobile-nav-text">{link.name}</span>
              </a>
            ))}
            <div className="mobile-search">
              <input
                type="text"
                placeholder="Search products..."
                className="mobile-search-input"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;