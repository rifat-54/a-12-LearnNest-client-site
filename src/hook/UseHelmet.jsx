import React from 'react';
import { Helmet } from 'react-helmet-async';

const UseHelmet = ({value}) => {
    
    return (
        <div>
            <Helmet>
                <title>{value}</title>
            </Helmet>
        </div>
    );
};

export default UseHelmet;