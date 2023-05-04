import React from 'react';
import BannerSection from './BannerSection/BannerSection';
import ChefSection from './ChefSection/ChefSection';
import { useLoaderData } from 'react-router-dom';
import SliderSection from './SliderSection/SliderSection';

const Home = () => {
    const chefData = useLoaderData()
    return (
        <div>
            <BannerSection />
            <SliderSection />
            <ChefSection chefData={chefData} />
        </div>
    );
};

export default Home;