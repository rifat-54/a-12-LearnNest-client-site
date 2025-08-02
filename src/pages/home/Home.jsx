import React from 'react';

import UseHelmet from './../../hook/UseHelmet';
import BannerSection from './homeComponent/BannerSection';
import TopClasses from './homeComponent/TopClasses';
import Revew from './homeComponent/Revew';
import TotalUserSection from './homeComponent/TotalUserSection';
import Partners from './homeComponent/Partners';
import InspiringSection from './homeComponent/InspiringSection';
import ExtraSection from './homeComponent/ExtraSection';

const Home = () => {
    return (
        <div>
            <UseHelmet value={'LearnNest | home'}></UseHelmet>
            <BannerSection></BannerSection>
            <div className='max-w-7xl mx-auto'>

           
            <Partners></Partners>
            <TopClasses></TopClasses>
            <TotalUserSection></TotalUserSection>
            <InspiringSection></InspiringSection>
            <ExtraSection></ExtraSection>
            <Revew></Revew>
          </div>
        </div>
    );
};

export default Home;