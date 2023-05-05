import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoadSpinner from '../LoadSpinner/LoadSpinner';
import { AuthContext } from '../../AuthProviders/AuthProviders';

const Registration = () => {
    const { createUser, updateUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleRegister = event => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        // password validation
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
        }
        else if (password.length > 20) {
            setError('Password must be less than 20 characters');
        }
        else if (email === undefined) {
            setError('Email is required');
        }
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                updateUser(name, photo)
                    .then(() => {
                        // toast.success('Account created successfully');
                        navigate(from, { replace: true });
                        form.reset();
                    })
                    .catch(error => {
                        setError(error.message)
                    })
            })
            .catch(error => {
                setError(error.message);
            })
    }
    // sign in with google
    const handleGoogleSignIn = event => {
        event.preventDefault();
        signInWithGoogle()
            .then(result => {
                // toast.success('Signed in successfully');
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }
    // sign in with github
    const handleGithubSignIn = event => {
        event.preventDefault();
        signInWithGithub()
            .then(result => {
                // toast.success('Signed in successfully');
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }
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
                <p>{error}</p>
                <h3 className='text-2xl font-medium text-center'>Sign Up</h3>
                <form onSubmit={handleRegister} className='flex flex-col md:space-y-5 space-y-3'>
                    <input name='name' type="text" placeholder='Name' className='border border-primary px-5 md:pr-28 w-full md:py-2 py-1 rounded-lg' />
                    <input name='email' type="email" placeholder='Email' className='border border-primary px-5 md:pr-28 w-full md:py-2 py-1 rounded-lg' />
                    <input name='password' type="password" placeholder='Password' className='border border-primary px-5 md:pr-28 w-full md:py-2 py-1 rounded-lg' />
                    <input name='photo' type="text" placeholder='Photo url' className='border border-primary px-5 md:pr-28 w-full md:py-2 py-1 rounded-lg' />
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