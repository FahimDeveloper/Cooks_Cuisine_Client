import React from 'react';
import Lottie from "lottie-react";
import ErrorAnimation from "../../assets/Error.json"
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const { error, status } = useRouteError()
    return (
        <div>
            <div className='w-screen h-screen flex flex-col justify-center items-center'>
                <div className='text-center space-y-5 -mb-16'>
                    <h2 className='text-6xl font-bold'>Opps</h2>
                    <h3 className='text-xl font-medium'>{status}</h3>
                    <p className='text-lg font-medium'>{error.message}</p>
                </div>
                <Lottie animationData={ErrorAnimation} loop={true} className='lg:w-1/2 xl:w-1/3' />
                <Link to="/">
                    <button className='btn'>Go Back</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;