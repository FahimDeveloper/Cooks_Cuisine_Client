import React from 'react';

const Home = () => {
    return (
        <div className='home'>
            <div className='container h-screen mx-auto flex items-center'>
                <div className='w-3/4 text-base-100 space-y-5'>
                    <h2 className='text-6xl'>
                        Explore the World of Cooking with Our Exotic and <span className='text-primary'>Mouthwatering Recipes</span>
                    </h2>
                    <p className='text-xl'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit asperiores temporibus suscipit assumenda modi consectetur?
                    </p>
                    <button className='btn btn-primary'>Find chef</button>
                </div>
            </div>
        </div>
    );
};

export default Home;