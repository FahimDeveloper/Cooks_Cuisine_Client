import React from 'react';
import AboutImage from "../../../assets/images/aboutChef.jpg"

const AboutChefs = () => {
    return (
        <div>
            <div className='space-y-3'>
                <h2 className='md:text-4xl text-3xl italic text-center font-bold uppercase'>think about chef</h2>
                <hr className='border border-primary w-52 mx-auto text-center' />
            </div>
            <div className='container mx-auto grid md:grid-cols-2 gap-5 items-center py-10'>
                <div>
                    <img className='rounded-xl border border-primary' src={AboutImage} alt="" />
                </div>
                <div>
                    <p className='lg:text-4xl sm:text-2xl text-xl text-center'>
                        The chef's culinary expertise transformed ordinary ingredients into a culinary masterpiece that left patrons in awe of his skills.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutChefs;