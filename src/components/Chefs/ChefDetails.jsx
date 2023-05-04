import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefDetails = () => {
    const { id } = useParams();
    const chefDetailsData = useLoaderData();
    const findChefData = chefDetailsData.find(Details => Details.id == id);
    console.log(findChefData)
    const { chef_name, chef_picture, description, likes, num_of_recipes, recipes, years_of_experience } = findChefData
    return (
        <div>
            <div className='singleChef h-[600px] flex justify-center items-center bg-black bg-opacity-60 bg-blend-overlay'>
                <h2 className='text-primary text-5xl font-medium'>view details of {chef_name}</h2>
            </div>
            <div className='container mx-auto py-16'>
                <div className='grid grid-cols-2 gap-10 items-center'>
                    <div>
                        <img src={chef_picture} className='w-full' alt={chef_name} />
                    </div>
                    <div className='space-y-5'>
                        <h3 className='text-4xl font-medium'>{chef_name}</h3>
                        <p className='text-lg'>Total Recipies : {num_of_recipes}</p>
                        <p className='text-lg'>Years of Experience : {years_of_experience}</p>
                        <p className='text-lg'>People Likes : {likes}</p>
                        <p className='text-lg'>Description :  {description}</p>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default ChefDetails;