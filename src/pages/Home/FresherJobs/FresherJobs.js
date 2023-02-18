import React from 'react';
import FresherJob from './FresherJob';

const FresherJobs = () => {
    const fresherData = [
        {
            id: 1,
            name: 'Software Developer',
            location: 'Dhaka',
            company: 'AAR IT Company',
            image: 'https://static.javatpoint.com/blog/images/what-is-software.png'
        },
        {
            id: 2,
            name: 'Network Engineer',
            location: 'Dhaka',
            company: 'AAR IT Company',
            image: 'https://i.pinimg.com/originals/08/95/cf/0895cfb30068d715c87a7db4b089c7fc.png'
        },
        {
            id: 3,
            name: 'Web Developer',
            location: 'Dhaka',
            company: 'AAR IT Company',
            image: 'https://webneel.com/sites/default/files/images/manual/logo-all/30-web-developer-creative-and-brilliant-logo-design.gif'
        },
        {
            id: 4,
            name: 'Cybersecurity Engineer',
            location: 'Dhaka',
            company: 'AAR IT Company',
            image: 'https://i.pinimg.com/550x/48/3a/6c/483a6c355deffde74c84cb5ca2636ee4.jpg'
        },
        {
            id: 5,
            name: 'Data Analyst',
            location: 'Dhaka',
            company: 'AAR IT Company',
            image: 'https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/6126c4d642bda0ec40f88a43_logo_795c7253-0509-4254-b25d-c92b65e81baf.png'
        },
        {
            id: 6,
            name: 'IT Project Manager',
            location: 'Dhaka',
            company: 'AAR IT Company',
            image: 'https://media.istockphoto.com/id/1286858263/vector/project-management-icon-clipboard-with-gear-isolated-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=2YrEtPB8_6-r-HJmiskFY9OVAI2T8XcH43nMKjjfD7c='
        },
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-lg font-bold text-cyan-600'>JOB CATEGORIES</h3>
                <h2 className='text-3xl'>Fresher Jobs Categories</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16'>
                {
                    fresherData.map(fresherJob => <FresherJob
                        key={fresherJob.id}
                        fresherJob={fresherJob}
                    ></FresherJob>)
                }
            </div>
        </div>
    );
};

export default FresherJobs; 