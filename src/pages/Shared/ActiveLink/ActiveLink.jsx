import React from 'react';
import { NavLink } from 'react-router-dom';
import './ActiveLink.css';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink 
            to={to}
            className={({ isActive }) => isActive ? "text-red-600 text-md font-bold px-2 md:px-4 transition-colors" : "text-gray-900 text-md font-semibold px-2 md:px-4 hover:opacity-80 transition-colors"
        }>
            {children}
        </NavLink>
    );
};

export default ActiveLink;