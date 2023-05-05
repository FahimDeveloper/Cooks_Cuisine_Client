import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoadSpinner from '../LoadSpinner/LoadSpinner';

const Login = () => {
    const [load, setLoad] = useState(true);
    setTimeout(() => {
        setLoad(false)
    }, 500)
    if (load === true) {
        return <LoadSpinner />
    }
    return (
        <div className='container mx-auto flex justify-center items-center h-screen'>
            <div className='space-y-6 border border-primary md:py-10 p-5 md:px-16 rounded-lg'>
                <h3 className='text-2xl font-medium text-center'>Sign In</h3>
                <form className='flex flex-col md:space-y-5 space-y-3'>
                    <input type="email" placeholder='Email' className='border border-primary px-5 md:py-2 py-1 rounded-lg' />
                    <div>
                        <input type="password" placeholder='Password' className='border border-primary w-full px-5 md:py-2 py-1 rounded-lg' />
                        <p className='text-end cursor-pointer'>Forgor password</p>
                    </div>
                    <button type='submit' className='btn-primary py-1 rounded-lg text-lg'>Sign In</button>
                    <div className='flex justify-center items-center gap-x-5'>
                        <hr className='w-2/5' />
                        <p className='text-lg'>or</p>
                        <hr className='w-2/5' />
                    </div>
                    <div className='space-y-3'>
                        <Link>
                            <button className='border border-primary w-full text-center py-1 rounded-lg my-2'>
                                <i className="fa-brands fa-google"></i> Sign in with Google
                            </button>
                        </Link>
                        <Link>
                            <button className='border border-primary w-full text-center py-1 rounded-lg my-2'>
                                <i className="fa-brands fa-github"></i> Sign in with Github
                            </button>
                        </Link>
                        <p className='text-center'>
                            Don't have an account ? <Link to="/user/registration" className='text-primary'>Register</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;