import React from 'react';
import './Navbar.css'

function Navbar() {
    return(
        <nav className='nav-bar flex text-white text-lg p-4 items-center justify-center gap-2 shadow-md'>
            <i className="fas fa-earth cursor-pointer hover:text-black transition-all ease-in-out duration-300"></i>
            <p>Travel Journal</p>
        </nav>
    )
}

export default Navbar