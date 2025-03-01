import React, { useState } from 'react';
import './navbar.css';
import logo1 from '../assets/logo2.png'
const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    {
      title: 'Products',
      subItems: ['Software', 'Hardware', 'Cloud Services', 'Accessories']
    },
    {
      title: 'Solutions',
      subItems: ['Business', 'Education', 'Healthcare', 'Government']
    },
    {
      title: 'Resources',
      subItems: ['Docs', 'Blog', 'Videos', 'Webinars']
    },
    {
      title: 'Company',
      subItems: ['About', 'Careers', 'Contact', 'Partners']
    }

  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
        <img src={logo1} className=' absolute top-2 left-2'/>
        </div>

        {/* Menu Items */}
        <div className="nav-items">
          {menuItems.map((item, index) => (
            <div 
              className="nav-item" 
              key={index}
              onMouseEnter={() => toggleDropdown(index)}
              onMouseLeave={() => toggleDropdown(null)}
            >
              <button 
                className="nav-link"
                onClick={() => toggleDropdown(index)}
                aria-expanded={activeDropdown === index}
              >
                {item.title}
              </button>
              
              {/* Dropdown Menu */}
              {activeDropdown === index && (
                <div className="dropdown-menu">
                  {item.subItems.map((subItem, subIndex) => (
                    <a 
                      key={subIndex} 
                      href="#" 
                      className="dropdown-item"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button className='bg-white border-2 border-green-500  text-gray-500 px-6 font-semibold rounded-3xl shadow-lg transition-all 
            duration-300 hover:bg-green-500 hover:text-white  hover:scale-105 active:scale-95'>sign in</button>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;