import React from 'react';
import Banner from '../../components/Homepage/Banner';
import States from '../../components/Homepage/States';
import TrendingApps from '../../components/Homepage/TrendingApps';

const Homepage = () => {
    return (
        <>
        <Banner></Banner>
        <States></States>
        <TrendingApps></TrendingApps>
        </>
    );
};

export default Homepage;