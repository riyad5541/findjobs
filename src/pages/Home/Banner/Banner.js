import React from 'react';

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2017/06/shutterstock_268688447.jpg" alt='' className="lg:w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Find Your Next Dream Job</h1>
                    <p className="py-6">Easiest way to find a perfect job</p>
                    <button className="btn bg-gradient-to-r from-sky-500 to-indigo-500 text-white mr-2 hover:bg-blue-700">Post a Job</button>
                    <button className="btn bg-gradient-to-r from-indigo-500 to-sky-500 text-white hover:bg-sky-700">Want a Job</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;