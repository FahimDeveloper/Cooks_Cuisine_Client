import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProviders/AuthProviders';


const Header = () => {
    const { user, LogOut } = useContext(AuthContext);
    // handle log out
    const handleLogOut = () => {
        LogOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }
    const [open, setOpen] = useState(false)
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
        <div className='bg-neutral text-base-100 py-5 h-16 w-full sticky top-0 z-50'>
            <div className='container mx-auto flex items-center justify-between'>
                <div>
                    <Link to="/" className='capitalize text-3xl font-medium italic'>cooks <span className='text-primary'>cuisine</span></Link>
                </div>
                <div className='hidden md:flex items-center gap-x-10'>
                    <NavLink className={`text-lg hover:border-b-primary hover:border-b-2 hoverEffect ${({ isActive }) => isActive ? "active" : ""}`} to="/">Home</NavLink>
                    <NavLink className={`text-lg hover:border-b-primary hover:border-b-2 hoverEffect ${({ isActive }) => isActive ? "active" : ""}`} to="/blog">Blog</NavLink>
                    <NavLink className={`text-lg hover:border-b-primary hover:border-b-2 hoverEffect ${({ isActive }) => isActive ? "active" : ""}`} to="/chefs">Chefs</NavLink>
                    {
                        user ? <div onClick={handleLogOut} className={`text-lg hover:border-b-primary hover:border-b-2 hoverEffect`}>Logout</div> :
                            <NavLink className={`text-lg hover:border-b-primary hover:border-b-2 hoverEffect ${({ isActive }) => isActive ? "active" : ""}`} to="user/login">Login</NavLink>
                    }
                </div>
                <div onClick={() => setOpen(!open)} className='flex md:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
            <div className={`bg-neutral text-center space-y-3 absolute duration-300 w-full md:hidden flex flex-col py-5 ${open ? `top-full` : `-top-52`}`}>
                {navMenu.map((navItem, index) => {
                    return (
                        <NavLink key={index} onClick={() => setOpen(!open)} className={`text-lg hoverEffect ${({ isActive }) => isActive ? "active" : ""}`} to={navItem.path}>{navItem.title}</NavLink>
                    )
                })}
            </div>
        </div>
    );
};

export default Header;