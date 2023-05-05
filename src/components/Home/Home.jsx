import React, { useState } from 'react';
import BannerSection from './BannerSection/BannerSection';
import ChefSection from './ChefSection/ChefSection';
import { useLoaderData } from 'react-router-dom';
import SliderSection from './SliderSection/SliderSection';
import LoadSpinner from '../LoadSpinner/LoadSpinner';

const Home = () => {
    const chefData = useLoaderData();
    const [load, setLoad] = useState(true);
    setTimeout(() => {
        setLoad(false)
    }, 500)
    if (load === true) {
        return <LoadSpinner />
    } else {
        return (
            <div>
                <BannerSection />
                <SliderSection />
                <ChefSection chefData={chefData} />
            </div>
        );
    }
};

export default Home;