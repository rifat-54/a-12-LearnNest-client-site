import React from 'react';

import UseHelmet from './../../hook/UseHelmet';
import BannerSection from './homeComponent/BannerSection';
import TopClasses from './homeComponent/TopClasses';
import Revew from './homeComponent/Revew';
import TotalUserSection from './homeComponent/TotalUserSection';

const Home = () => {
    return (
        <div>
            <UseHelmet value={'LearnNest | home'}></UseHelmet>
            <BannerSection></BannerSection>
            <TopClasses></TopClasses>
            <Revew></Revew>
            <TotalUserSection></TotalUserSection>
           home 
        </div>
    );
};

export default Home;