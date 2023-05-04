import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className='container mx-auto flex justify-center items-center h-screen'>
            <div className='space-y-6 border border-primary py-10 px-16 rounded-lg'>
                <h3 className='text-2xl font-medium text-center'>Sign Up</h3>
                <form className='flex flex-col space-y-5'>
                    <input type="text" placeholder='Name' className='border border-primary px-5 pr-28 py-2 rounded-lg' />
                    <input type="email" placeholder='Email' className='border border-primary px-5 pr-28 py-2 rounded-lg' />
                    <input type="password" placeholder='Password' className='border border-primary px-5 pr-28 py-2 rounded-lg' />
                    <input type="text" placeholder='Photo url' className='border border-primary px-5 pr-28 py-2 rounded-lg' />
                    <button type='submit' className='btn-primary py-1 rounded-lg text-lg'>Sign Up</button>
                    <div className='flex justify-center items-center gap-x-5'>
                        <hr className='w-2/5' />
                        <p className='text-lg'>or</p>
                        <hr className='w-2/5' />
                    </div>
                    <div className='space-y-3'>
                        <Link>
                            <button className='border border-primary w-full text-center py-1 rounded-lg my-2'>
                                <i className="fa-brands fa-google"></i> Sign Up with Google
                            </button>
                        </Link>
                        <Link>
                            <button className='border border-primary w-full text-center py-1 rounded-lg my-2'>
                                <i className="fa-brands fa-github"></i> Sign Up with Github
                            </button>
                        </Link>
                        <p className='text-center'>
                            Already have an account ? <Link to="/user/login" className='text-primary'>Login</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;