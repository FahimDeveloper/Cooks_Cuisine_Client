import React from 'react';
import { Link } from 'react-router-dom';

const BannerSection = () => {
    return (
        <div className='home bg-black bg-opacity-50 bg-blend-overlay'>
            <div className='container h-screen mx-auto flex items-center'>
                <div className='lg:w-3/4 text-base-100 space-y-5'>
                    <h2 className='md:text-7xl text-5xl'>
                        Explore the World of Cooking with Our Exotic and <span className='text-primary'>Mouthwatering Recipes</span>
                    </h2>
                    <p className='text-xl'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit asperiores temporibus suscipit assumenda modi consectetur?
                    </p>
                    <Link to="/chefs">
                        <button className='btn btn-primary my-5'>Find chef</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;