import React from 'react';
import NavItem from './NavItem';
import { Link } from 'react-router-dom';

const Header = () => {
    const navMenu = [
        {
            path: '/',
            title: 'Home'
        },
        {
            path: '/blog',
            title: 'Blog'
        },
        {
            path: '/chefs',
            title: 'Chefs'
        },
        {
            path: 'user/login',
            title: 'Login'
        }
    ];

    return (
        <div className='bg-neutral text-base-100 py-5'>
            <div className='container mx-auto flex items-center justify-between'>
                <div>
                    <Link to="/" className='capitalize text-2xl font-medium italic'>cooks <span className='text-primary'>cuisine</span></Link>
                </div>
                <div className='flex items-center gap-x-10'>
                    {navMenu.map((navItem, index) => <NavItem key={index} {...navItem} />)}
                </div>
            </div>
        </div>
    );
};

export default Header;