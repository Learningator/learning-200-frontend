import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <React.Fragment>
      <header className='Navbar'>
        <Link to='/'>
          <img
            className='Logo'
            src='https://firebasestorage.googleapis.com/v0/b/learningator.appspot.com/o/images%2Flogo-platzimaster_white.png?alt=media&token=bf5b23aa-a510-4f4c-95f4-a339f13a1663'
            alt='Platzi Master Logo'
          />
        </Link>
      </header>
    </React.Fragment>
  );
}

export default Navbar;
