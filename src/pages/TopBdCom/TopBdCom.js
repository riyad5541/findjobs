import React from 'react';

const TopBdCom = ({topBdCom}) => {
    const {name, image} = topBdCom;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="" className="rounded-xl h-60" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions">
                    <button className="btn bg-gradient-to-r from-indigo-500 to-sky-500 text-white">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default TopBdCom;