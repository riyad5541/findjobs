import React from 'react';

const Contact = () => {
    return (
        <div className='text-center '>
            <h1 className='text-3xl font-bold text-cyan-600'>Contact Us</h1>
            <div className='flex justify-center mt-16'>
                <img className='h-6' src="https://static.vecteezy.com/system/resources/thumbnails/000/568/450/small/vector60-1781-01.jpg" alt="" />
                <h1 className='px-2'>Dhaka, Bangladesh</h1>
            </div>
            <div className='flex justify-center mt-6'>
                <img className='h-6' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvfzJ3ltiWPVt6uopyYqzeaPg55WNroFT3qpcUC9Nd&s" alt="" />
                <h1 className='px-2 text-xl'>+1 253 565 2365</h1>
                <p>(Mon to Fri 9am to 6pm)</p>
            </div>
            <div className='flex justify-center mt-6'>
                <img className='h-6' src="https://cdn-icons-png.flaticon.com/512/95/95627.png" alt="" />
                <h1 className='px-2'>support@colorlib.com</h1>
            </div>
        </div>
    );
};

export default Contact;