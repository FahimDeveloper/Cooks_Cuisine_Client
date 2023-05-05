import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoadSpinner from '../LoadSpinner/LoadSpinner';
import { AuthContext } from '../../AuthProviders/AuthProviders';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    // handle login
    const handleLogin = (e) => {
        e.preventDefault();
        setError('')
        const email = e.target.email.value;
        const password = e.target.password.value;
        // password validation
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
        }
        else if (password.length > 20) {
            setError('Password must be less than 20 characters');
        }
        signIn(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                toast.success(`Welcome ${user.displayName ? user.displayName : user.email}!`, {
                    position: toast.POSITION.TOP_RIGHT
                });
                navigate(from, { replace: true })
                e.target.reset()
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
                const user = result.user;
                toast.success(`Welcome ${user.displayName ? user.displayName : user.email}!`, {
                    position: toast.POSITION.TOP_RIGHT
                });
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
                const user = result.user;
                toast.success(`Welcome ${user.displayName ? user.displayName : user.email}!`, {
                    position: toast.POSITION.TOP_RIGHT
                });
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
            <ToastContainer />
            <div className='space-y-6 border border-primary md:py-10 p-5 md:px-16 rounded-lg'>
                <p className='text-error'>{error}</p>
                <h3 className='text-2xl font-medium text-center'>Sign In</h3>
                <form onSubmit={handleLogin} className='flex flex-col md:space-y-5 space-y-3'>
                    <input name='email' type="email" placeholder='Email' className='border border-primary px-5 md:py-2 py-1 rounded-lg' />
                    <div>
                        <input name='password' type="password" placeholder='Password' className='border border-primary w-full px-5 md:py-2 py-1 rounded-lg' />
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
                            <button onClick={handleGoogleSignIn} className='border border-primary w-full text-center py-1 rounded-lg my-2'>
                                <i className="fa-brands fa-google"></i> Sign in with Google
                            </button>
                        </Link>
                        <Link>
                            <button onClick={handleGithubSignIn} className='border border-primary w-full text-center py-1 rounded-lg my-2'>
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