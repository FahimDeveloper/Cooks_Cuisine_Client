import React from 'react';
import slider1 from "../../../assets/images/slider1.jpg"
import slider2 from "../../../assets/images/slider2.jpg"
import slider3 from "../../../assets/images/slider3.jpg"
import slider4 from "../../../assets/images/slider4.jpg"
import Logo from "../../../assets/images/logo.png"

const SliderSection = () => {
    return (
        <div className='container mx-auto space-y-10 md:py-16 py-10'>
            <div className='space-y-3'>
                <h2 className='md:text-4xl text-3xl italic text-center font-bold uppercase'>delicious food</h2>
                <hr className='border border-primary w-52 mx-auto text-center' />
            </div>
            <div className='grid lg:grid-cols-2 items-center lg:gap-10 gap-5'>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <img className='md:w-1/3 w-1/2' src={Logo} alt="Logo" />
                    <h2 className='md:text-4xl text-2xl text-center font-medium'>
                        Indulge in the rich and savory flavors of our delicious food, <span className='text-primary'>crafted to satisfy your cravings and delight your senses</span>
                    </h2>
                </div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={slider1} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={slider2} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={slider3} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={slider4} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderSection;