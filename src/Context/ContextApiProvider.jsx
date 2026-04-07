import React, { useState } from 'react';
import { ContextApi } from './ContextApi/ContextApi';

const ContextApiProvider = ({children}) => {

    const [installedApps, setInstalledApps] = useState([]);
    
    const data= {
        installedApps, setInstalledApps
    }

    return (
        <div>
            <ContextApi.Provider value={data}>
            {children}
            </ContextApi.Provider>
        </div>
    );
};

export default ContextApiProvider;