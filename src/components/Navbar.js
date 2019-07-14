import React from 'react'
import {Link} from 'react-router-dom';
export default function Navbar() {
    return (
        <div className='navbar'>
            <h1 style={navHeader} >Notes App  </h1>
            <Link style={linkStyle} to="/"> Home </Link> | <Link style={linkStyle} to='/about'>About</Link>
         </div>
    )
}


const linkStyle = {
    color : '#4fc3f7',
    textDecoration : 'none' ,
    margin : '1rem'
}

const navHeader ={
    color : '#0093c4',
    display : 'inline-block', 
    marginRight : '2rem'
}