
import { useParams } from 'react-router';
import useData from '../../hooks/useData';
import { RingLoader } from 'react-spinners';

const AppDetails = () => {

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

    
    
    return (
        <div className='flex items-center gap-6 bg-amber-50 container mx-auto mt-5 rounded-xl'>
            <img src={expectedApp.image} alt="" />

            <div className='space-y-2'>
                <h2 className='font-bold text-3xl'>{expectedApp.title}</h2>

                <p>{expectedApp.description}</p>

                <h3 className='font-bold'>Developed by: {expectedApp.companyName}</h3>

                <button className='btn btn-primary'>Install Now</button>
            </div>

            
        </div>
    );
};

export default AppDetails;