import React from 'react';
import Chef from './Chef';
import { Link } from 'react-router-dom';

const ChefSection = ({ chefData }) => {
    return (
        <div className='container mx-auto md:py-16 py-10 space-y-8'>
            <div className='space-y-3'>
                <h2 className='md:text-4xl text-3xl italic text-center font-bold uppercase'>Our Chefs</h2>
                <hr className='border border-primary w-52 mx-auto text-center' />
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-5'>
                {chefData.map(chef => <Chef key={chef.id} {...chef} />)}
            </div>
            <Link to="/chefs" className='text-center block'>
                <button className='btn btn-primary'>see all chefs</button>
            </Link>
        </div>
    );
};

export default ChefSection;