import React, { useEffect, useState } from 'react';

const useData = () => {
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true)
    

    useEffect(()=>{
        const dataPromise = async()=>{
            const res = await fetch('/appsData.json');
            const data = await res.json();
            console.log(data);

            setTimeout(()=>{
                setApps(data);
                setLoading(false);
            },500)

            
        }
        dataPromise();
    },[]);


    return {apps, loading};
};

export default useData;