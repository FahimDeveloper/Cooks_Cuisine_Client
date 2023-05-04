import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleChef from "./SingleChef"

const Chefs = () => {
    const chefData = useLoaderData()
    return (
        <div>
            <div className='chefBanner bg-black bg-opacity-30 bg-blend-overlay h-[600px] flex items-center justify-center'>
                <h2 className='text-5xl font-medium uppercase italic text-base-100 text-center'>view all chefs</h2>
            </div>
            <div className='container mx-auto py-16 space-y-8'>
                <div className='space-y-3'>
                    <h2 className='text-4xl italic text-center font-bold uppercase'>Our Chefs</h2>
                    <hr className='border border-primary w-52 mx-auto text-center' />
                </div>
                <div className='grid grid-cols-3 gap-5'>
                    {chefData.map(chef => <SingleChef key={chef.id} {...chef} />)}
                </div>
            </div>
        </div>
    );
};

export default Chefs;