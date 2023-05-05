import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import SingleChef from "./SingleChef"
import LoadSpinner from '../LoadSpinner/LoadSpinner';

const Chefs = () => {
    const loader = useNavigation();
    const chefData = useLoaderData();
    const [load, setLoad] = useState(true);
    setTimeout(() => {
        setLoad(false)
    }, 500)
    if (load === true || loader.state === "loading") {
        return <LoadSpinner />
    } else {
        return (
            <div>
                <div className='chefBanner bg-black bg-opacity-30 bg-blend-overlay h-[500px] flex items-center justify-center'>
                    <h2 className='md:text-5xl text-4xl font-medium uppercase italic text-base-100 text-center'>view all chefs</h2>
                </div>
                <div className='container mx-auto md:py-16 py-10 space-y-8'>
                    <div className='space-y-3'>
                        <h2 className='md:text-4xl text-3xl italic text-center font-bold uppercase'>Our Chefs</h2>
                        <hr className='border border-primary w-52 mx-auto text-center' />
                    </div>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-5'>
                        {chefData.map(chef => <SingleChef key={chef.id} {...chef} />)}
                    </div>
                </div>
            </div>
        );
    }
};

export default Chefs;