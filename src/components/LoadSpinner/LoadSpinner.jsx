import React from 'react';

const LoadSpinner = () => {
    return (
        <div className='container mx-auto h-screen flex justify-center items-center'>
            <div className='flex justify-center items-end'>
                <p className='text-6xl font-light'>L</p>
                <div className='text-4xl text-primary'>
                    <i className="fa-solid fa-spinner animate-spin"></i>
                </div>
                <p className='text-6xl font-light'>ding...</p>
            </div>
        </div>
    );
};

export default LoadSpinner;