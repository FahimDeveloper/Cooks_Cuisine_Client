import React from 'react';
import { useState } from 'react';
import { useLoaderData, useNavigation, useParams } from 'react-router-dom';
import LoadSpinner from '../LoadSpinner/LoadSpinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefDetails = () => {
    const { id } = useParams();
    const chefDetailsData = useLoaderData();
    const loader = useNavigation()
    const findChefData = chefDetailsData.find(Details => Details.id == id);
    const { chef_name, chef_picture, description, likes, num_of_recipes, recipes, years_of_experience } = findChefData
    const [load, setLoad] = useState(true);
    setTimeout(() => {
        setLoad(false)
    }, 500);
    const [disabled, setDisabled] = useState(false);
    const handleAddToFavourite = () => {
        setDisabled(!disabled)
        toast.success("Add This item in Favourite", {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    if (load === true || loader.state === "loading") {
        return <LoadSpinner />
    }
    return (
        <div>
            <div className='singleChef h-[500px] flex justify-center items-center bg-black bg-opacity-60 bg-blend-overlay'>
                <h2 className='text-primary md:text-5xl text-4xl text-center font-medium'>view details of {chef_name}</h2>
            </div>
            <div className='container mx-auto md:py-16 py-10 space-y-10'>
                <div className='grid lg:grid-cols-2 md:gap-10 gap-5 items-center'>
                    <div>
                        <img src={chef_picture} className='w-full' alt={chef_name} />
                    </div>
                    <div className='md:space-y-5 space-y-2'>
                        <h3 className='text-4xl font-medium'>{chef_name}</h3>
                        <p className='text-lg'>Total Recipies : {num_of_recipes}</p>
                        <p className='text-lg'>Years of Experience : {years_of_experience}</p>
                        <p className='text-lg'>People Likes : {likes}</p>
                        <p className='text-lg'>Description :  {description}</p>
                    </div>
                </div>
                <div className="overflow-x-auto space-y-5">
                    <div className='space-y-2'>
                        <h2 className='text-3xl italic text-center font-medium uppercase'>preview all recipes of {chef_name}</h2>
                        <hr className='border border-primary w-96 mx-auto text-center' />
                    </div>
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>$</th>
                                <th>Name</th>
                                <th>Ingredients</th>
                                <th>Cooking Method</th>
                                <th>Rating</th>
                                <th>Add To Favourite</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                recipes.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <th>{index + 1}</th>
                                            <td>{item.recipe_name}</td>
                                            <td>
                                                <ol className='list-disc'>
                                                    {item.ingredients.map((gredients, index) => {

                                                        return (
                                                            <li key={index}>{gredients}</li>
                                                        )
                                                    })}
                                                </ol>
                                            </td>
                                            <td className='whitespace-pre-wrap'>{item.cooking_method ? item.cooking_method : "No method available"}</td>
                                            <td>
                                                {item.rating}
                                            </td>
                                            <td>
                                                <button onClick={handleAddToFavourite} disabled={disabled}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer text-primary mx-auto">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ChefDetails;