import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleChef from "./SingleChef"

const Chefs = () => {
    const chefData = useLoaderData()
    return (
        <div className='container mx-auto py-16 space-y-8'>
            <div className='space-y-3'>
                <h2 className='text-4xl italic text-center font-bold uppercase'>Our Chefs</h2>
                <hr className='border border-primary w-52 mx-auto text-center' />
            </div>
            <div className='grid grid-cols-3 gap-5'>
                {chefData.map(chef => <SingleChef key={chef.id} {...chef} />)}
            </div>
        </div>
    );
};

export default Chefs;