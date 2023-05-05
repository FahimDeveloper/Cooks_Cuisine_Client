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
                <div className='hidden md:flex items-center gap-x-10'>
                    {navMenu.map((navItem, index) => <NavItem key={index} {...navItem} />)}
                </div>
                <div className='flex md:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Header;