import React, { createRef } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import LoadSpinner from '../LoadSpinner/LoadSpinner';
import { useState } from 'react';
import Pdf from "react-to-pdf";

const Blog = () => {
    const questionData = useLoaderData();
    const [load, setLoad] = useState(true);
    setTimeout(() => {
        setLoad(false)
    }, 500);
    const loader = useNavigation()
    if (load === true || loader.state === "loading") {
        return <LoadSpinner />
    }
    const ref = createRef();
    return (
        <div>
            <div className='blogBanner flex justify-center items-center h-[500px] bg-black bg-opacity-40 bg-blend-overlay'>
                <h2 className='uppercase md:text-5xl text-4xl font-medium italic text-base-100'>see all blogs</h2>
            </div>
            <div className='container mx-auto py-10 space-y-5'>
                <div className='space-y-2'>
                    <h2 className='md:text-4xl text-3xl italic text-center font-medium uppercase'>Blogs</h2>
                    <hr className='border border-primary w-28 mx-auto text-center' />
                </div>
                <div className='flex justify-end'>
                    <Pdf targetRef={ref} filename="blog_content.pdf">
                        {({ toPdf }) =>
                            <button className='btn btn-primary text-xs' onClick={toPdf}>
                                Download content pdf <i className="fa-solid fa-download"></i>
                            </button>}
                    </Pdf>
                </div>
                <div ref={ref} className='grid md:grid-cols-2 gap-5'>
                    {questionData.map(question => {
                        return (
                            <div key={question.id} className="card bg-base-100 border border-primary shadow-xl">
                                <div className="card-body space-y-3">
                                    <h2 className="card-title">{question.id}. {question.question}</h2>
                                    <p className='text-justify'>{question.answer}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Blog;