import Image from 'next/image';
import { adoptionApplicationType } from '../constants';

const AdoptionDashBoardCard = ({petURL, petName, petBreed} : adoptionApplicationType ) => {

  return (
    <div className='flex justify-center h-fit w-auto flex-col shadow-2xl shadow-blue-500 hover:scale-110'>
        <Image 
            src= {petURL}
            alt="Pet Image"
            width={200}
            height={100}
            className='object-cover overflow-hidden rounded-t-md max-h-36'
        />
        <div className='bg-blue-50 rounded-b-md flex flex-col justify-center item-center py-4 gap-4'>
            <h3 className='flex justify-center capitalize font-poppins text-xl break-words max-w-[200px] text-center'>
              {petName} ({petBreed})
            </h3>
            <div className='flex justify-center w-4/5 m-auto bg-gray-300 rounded-2xl p-2'>
                <p>Status: </p>
                <p>pending</p>
            </div>
        </div>
    </div>
  )
}

export default AdoptionDashBoardCard