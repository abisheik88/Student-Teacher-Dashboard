import { Button } from '@mui/material';
import React from 'react';
import { BsSearch } from 'react-icons/bs';
import './Navbar.css';

function Navbar() {
  return (
    <div >
      <nav className='navbar'>
        <div className='d-flex'>
          <input className="form-control" type="text" />
          <Button variant="outlined"> <BsSearch /> </Button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar