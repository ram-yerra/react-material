import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    const activeLinkStyle = { color: '#F1BB2A' }; 
    return (
        <div className="App-header">
            <div><NavLink activeStyle={activeLinkStyle} className='App-link' to='/' exact>Forms List</NavLink></div>
            <div><h3>Forms Builder</h3></div>
            <div><NavLink activeStyle={activeLinkStyle} className='App-link' to='/about'>About</NavLink></div>
        </div>
    )
};

export default Header