
import { useParams } from 'react-router';
import useData from '../../hooks/useData';
import { RingLoader } from 'react-spinners';
import { useContext } from 'react';
import { ContextApi } from '../../Context/ContextApi/ContextApi';
import { toast } from 'react-toastify';

const AppDetails = () => {

    const {installedApps, setInstalledApps} = useContext(ContextApi);
    console.log(installedApps, setInstalledApps);

    const {apps, loading} = useData();
    console.log(apps, loading);

    const params = useParams();
    console.log(params);

    



    const expectedApp = apps.find(item => item.id == params.id);
    console.log(expectedApp);

    if(loading){
       return <div className="flex justify-center items-center">
            <RingLoader  color='purple'/>
        </div>
    }

    const handleInstalledApps =() =>{
        const updatedInstalledApps = ([...installedApps, expectedApp]);

        setInstalledApps(updatedInstalledApps);
        toast.success(`${expectedApp.title} is installed`)
    }

    
    
    return (
        <div className='flex flex-col md:flex items-center gap-6 bg-amber-50 container mx-auto mt-5 rounded-xl p-4'>
            <img className='h-30 w-auto' src={expectedApp.image} alt="" />

            <div className='space-y-2'>
                <h2 className='font-bold text-3xl'>{expectedApp.title}</h2>

                <p>{expectedApp.description}</p>

                <h3 className='font-bold'>Developed by: {expectedApp.companyName}</h3>

                <button onClick={()=> handleInstalledApps(expectedApp)} className='btn btn-primary'>Install Now</button>

            
            </div>

            
        </div>
    );
};

export default AppDetails;