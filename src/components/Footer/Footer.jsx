import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-gray-200 py-10'>
            <footer className='container mx-auto grid lg:grid-cols-4 sm:grid-cols-2 gap-10'>
                <div className='space-y-5'>
                    <h3 className='text-xl font-medium pb-3 border-b-2 border-primary'>Why Cooks Cuisine?</h3>
                    <p>
                        At Cooks Cuisine, chefs are family. That's why, for over three decades, our editors have devoted countless hours and thousands of meals to scouting. Discovering the most talented up-and-comers in America.
                    </p>
                </div>
                <div className='space-y-5'>
                    <h3 className='text-xl font-medium border-b-2 pb-3 border-primary'>Quick Link</h3>
                    <div className='grid grid-cols-2'>
                        <div className='flex flex-col gap-2 w-full text-lg'>
                            <Link to="/">Home</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/chefs">Chefs</Link>
                            <Link to="/user/login">Login</Link>
                        </div>
                        <div className='flex flex-col gap-2 w-full text-lg'>
                            <a href="#">About us</a>
                            <a href="#">Contact</a>
                            <a href="#">FAQ</a>
                            <a href="#">Privacy Policy</a>
                        </div>
                    </div>
                </div>
                <div className='space-y-5'>
                    <h3 className='text-xl font-medium border-b-2 pb-3 border-primary'>News Letter</h3>
                    <p>
                        Sign up with your name and email to get updates fresh updates.
                    </p>
                    <div>
                        <input className='px-5 py-1 rounded-md' type="email" placeholder='Enter your email' />
                        <button className='btn btn-sm btn-primary'>Subscribe</button>
                    </div>
                </div>
                <div className='space-y-5'>
                    <h3 className='text-xl font-medium border-b-2 pb-3 border-primary'>Get In Touch</h3>
                    <div className='space-y-2'>
                        <p>Restaurant, to consequat ipsum nec sagittis sem.</p>
                        <p>Restaurant, Manhattan 1258,New York, USA Lahore</p>
                        <p>Call : (+1) 234 567 8901</p>
                        <p>Email : hello@website.com</p>
                    </div>
                </div>
            </footer >
        </div >
    );
};

export default Footer;