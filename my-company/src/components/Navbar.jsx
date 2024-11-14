import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => (

    <nav 
    style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', backgroundColor: '#333', color: '#fff' }}>
       <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
       <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
       <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link>
       <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
    </nav>
 );
 export default Navbar;