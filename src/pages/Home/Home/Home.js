import React from 'react';
import ExperiencedJobs from '../../ExperiencedJobs/ExperiencedJobs';
import TopBdComs from '../../TopBdCom/TopBdComs';
import WorldWideComs from '../../WorldWideComs/WorldWideComs';
import Banner from '../Banner/Banner';
import FresherJobs from '../FresherJobs/FresherJobs';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <FresherJobs></FresherJobs>
            <ExperiencedJobs></ExperiencedJobs>
            <TopBdComs></TopBdComs>
            <WorldWideComs></WorldWideComs>
        </div>
    );
};

export default Home;