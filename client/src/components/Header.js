import React from "react";
import logo from '../assets/logo.png';
import { getURL } from "../api";

// Add this Header component above your App component or in a separate file and import it into App.js
function Header({ data }) {
  return (
    <header id='home' style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Shadow is already applied
      zIndex: 1000,
      padding: '0 10%',
      height: '70px', // Set the height to 60px
    }}>
      <div>
        {/* Logo */}
        <img src={`${getURL()}${data?.logo?.data?.attributes?.url}`} alt="Logo" style={{ height: '50px' }} />
      </div>
      <nav>
        {/* Menu Items */}
        <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
          {data.item.map((item, index) => (
            <li key={index} style={{ position: 'relative' }}>
              <a href={`#${item.sectionId}`} style={{ textDecoration: 'none', color: 'black' }}>{item.title}</a>
              {/* Check for dropdown and render if exists */}
              {item.dropdown && Array.isArray(item.dropdown) && item.dropdown.length > 0 && (
                <ul className="nav-dropdown">
                  {item.dropdown.map((dropdownItem, i) => (
                    <li key={i} style={{ padding: '10px 20px' }}>
                      <a href={`#${dropdownItem.sectionId}`} style={{ textDecoration: 'none', color: 'black' }}>{dropdownItem.subtitle}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <a href="#contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;