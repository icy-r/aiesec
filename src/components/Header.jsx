import React from 'react';
import logo from '../assets/logo.png';

function Header() {
  return (
    <div className='sticky z-10 p-6 top-0 left-0 right-0 h-16 bg-slate-800 text-white  flex items-center justify-center'>
      <img src={logo} alt='logo' className='h-24' />
    </div>
  );
}

export default Header;
