import React from 'react';

import UseHelmet from './../../hook/UseHelmet';
import BannerSection from './homeComponent/BannerSection';

const Home = () => {
    return (
        <div>
            <UseHelmet value={'LearnNest | home'}></UseHelmet>
            <BannerSection></BannerSection>
           home 
        </div>
    );
};

export default Home;