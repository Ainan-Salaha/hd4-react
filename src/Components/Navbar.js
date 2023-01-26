import React from 'react'
import { NavLink } from 'react-router-dom'
import './Component.css';



const Navbar = () => {
  return (
    <>
        
            <nav className='navbar flex'>
                <ul>
                    <li>
                        <NavLink to='/' className='link'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/student' className='link'>Student</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className='link'>Conatact Us</NavLink>
                    </li>
                </ul>
            </nav>
       
    </>
  )
}

export default Navbar