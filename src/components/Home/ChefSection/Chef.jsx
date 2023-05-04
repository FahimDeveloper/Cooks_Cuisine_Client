import React from 'react';
import { Link } from 'react-router-dom';

const Chef = (props) => {
    return (
        <div>
            <Link to={`/chef/${props.id}/view_recipies`} className='chef'>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={props.chef_picture} alt="chef" /></figure>
                    <div className="card-body space-y-3">
                        <h2 className="card-title">{props.chef_name}</h2>
                        <div className="space-y-2">
                            <p>Number Of Recipies : {props.num_of_recipes}</p>
                            <p>People Likes : {props.likes}</p>
                            <p>Experience : {props.years_of_experience} years</p>
                        </div>
                        <span className='text-xl view flex justify-end items-end gap-2'>
                            view all recipies <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Chef;