import React from 'react';
import { Link } from 'react-router-dom';

const BannerSection = () => {
    return (
        <div className='home bg-black bg-opacity-50 bg-blend-overlay'>
            <div className='container h-screen mx-auto flex items-center'>
                <div className='w-3/4 text-base-100 space-y-5'>
                    <h2 className='text-7xl'>
                        Explore the World of Cooking with Our Exotic and <span className='text-primary'>Mouthwatering Recipes</span>
                    </h2>
                    <p className='text-xl'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit asperiores temporibus suscipit assumenda modi consectetur?
                    </p>
                    <Link to="/chefs">
                        <button className='btn btn-primary'>Find chef</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;