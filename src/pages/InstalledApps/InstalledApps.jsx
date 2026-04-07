import React, { useContext } from 'react';
import { ContextApi } from '../../Context/ContextApi/ContextApi';

const InstalledApps = () => {

    const {installedApps, setInstalledApps} = useContext(ContextApi);
    console.log(installedApps);
    return (
        <div>
        
        <div className='space-y-2 my-2 container mx-auto'>
            {
                installedApps.map((installedApp, index) => <div key={index} className='flex items-center justify-between gap-7 p-4 rounded-xl bg-amber-50 mb-2'>
                    <div>
                        <img className='h-25 w-auto' src={installedApp.image} alt="" />
                        <h2 className='font-bold mt-3'>{installedApp.title}</h2>
                    </div>

                    <button className='btn btn-success'>installed</button>
                </div>)
            }
        </div>
        </div>
    );
};

export default InstalledApps;