import React from 'react';
import Chef from './Chef';
import { Link } from 'react-router-dom';

const ChefSection = ({ chefData }) => {
    return (
        <div className='container mx-auto py-16 space-y-8'>
            <div className='space-y-3'>
                <h2 className='text-4xl italic text-center font-bold uppercase'>Our Chefs</h2>
                <hr className='border border-primary w-52 mx-auto text-center' />
            </div>
            <div className='grid grid-cols-3 gap-5'>
                {chefData.slice(3, 6).map(chef => <Chef key={chef.id} {...chef} />)}
            </div>
            <Link to="/chefs" className='text-center block'>
                <button className='btn btn-primary'>see all chefs</button>
            </Link>
        </div>
    );
};

export default ChefSection;