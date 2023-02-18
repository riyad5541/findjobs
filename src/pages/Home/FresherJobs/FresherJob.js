import React from 'react';

const FresherJob = ({ fresherJob }) => {
    const { name, location, company, image } = fresherJob;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="" className="rounded-xl h-60" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <div className='flex'>
                    <img className='h-7' src="https://images.template.net/101912/location-icon-clipart-5z262.jpg" alt="" />
                    <p>{location}</p>
                </div>
                <div className='flex'>
                    <img className='h-6' src="https://icon-library.com/images/company-icon/company-icon-20.jpg" alt="" />
                    <p>{company}</p>
                </div>
                <div className="card-actions">
                    <button className="btn bg-gradient-to-r from-indigo-500 to-sky-500 text-white">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default FresherJob;