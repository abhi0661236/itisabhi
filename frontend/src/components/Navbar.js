import React from 'react';
import '../css/Navbar.css';

function Navbar() {
  return (
    <div className='nav-panel'>
        <nav>
            <ul>
                <li><span>Home</span> <i className="fa-solid fa-house-chimney"></i></li>
                <li><span>About</span> <i className="fa-solid fa-user"></i></li>
                <li><span>Contact</span> <i className="fa-solid fa-envelope-open"></i></li>
                <li><span>Portfolio</span> <i className="fa-solid fa-briefcase"></i></li>
                <li><span>Blogs</span> <i className="fa-solid fa-book-open-reader"></i></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;