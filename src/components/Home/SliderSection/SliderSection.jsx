import React from 'react';
import slider1 from "../../../assets/images/slider1.jpg"
import slider2 from "../../../assets/images/slider2.jpg"
import slider3 from "../../../assets/images/slider3.jpg"
import slider4 from "../../../assets/images/slider4.jpg"

const SliderSection = () => {
    return (
        <div className='container mx-auto space-y-10 py-16'>
            <div className='space-y-3'>
                <h2 className='text-4xl italic text-center font-bold uppercase'>delicious food</h2>
                <hr className='border border-primary w-52 mx-auto text-center' />
            </div>
            <div className='grid grid-cols-2 items-center gap-x-10'>
                <div>
                    <h2 className='text-4xl text-justify font-medium'>
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