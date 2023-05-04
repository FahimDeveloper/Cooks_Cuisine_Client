import React from 'react';
import { Link } from 'react-router-dom';

const Chef = (props) => {
    console.log(props)
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={props.chef_picture} alt="chef" /></figure>
                <div className="card-body space-y-3">
                    <h2 className="card-title">{props.chef_name}</h2>
                    <div className="space-y-2">
                        <p>Number Of Recipies : {props.num_of_recipes}</p>
                        <p>People Likes : {props.likes}</p>
                        <p>Experience : {props.years_of_experience} years</p>
                    </div>
                    <Link to={`/chef/${props.id}/view_recipies`} className='text-end'>view all recipies</Link>
                </div>
            </div>
        </div>
    );
};

export default Chef;