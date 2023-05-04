import React from 'react';
import BannerSection from './BannerSection/BannerSection';
import ChefSection from './ChefSection/ChefSection';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const chefData = useLoaderData()
    return (
        <div>
            <BannerSection />
            <ChefSection chefData={chefData} />
        </div>
    );
};

export default Home;