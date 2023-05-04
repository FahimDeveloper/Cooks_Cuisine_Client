import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
    return (
        <div>
            <NavLink className={`text-lg hover:border-b-primary hover:border-b-2 hoverEffect ${({ isActive }) => isActive ? "active" : ""}`} to={props.path}>{props.title}</NavLink>
        </div >
    );
};

export default NavItem;