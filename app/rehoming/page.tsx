import Image from 'next/image';
import MultiStepForm from './components/MultiStepForm';

const RehomingPage = () => {
  return (
    <div className='w-full min-h-screen max-h-fit flex lg:flex-row'>
        <div className='lg:basis-1/2 flex justify-center w-full items-center bg-gray-100'>
            <MultiStepForm />
        </div>
        {/* Picture for larger screens */}
        <div className='invisible lg:basis-1/2 lg:w-full lg:visible lg:flex lg:relative lg:h-screen lg:justify-center'>
            <Image 
                src="/mission-photo.jpg"
                alt='Lady carrying a dog'
                fill
                className='object-cover'
            />
        </div>
        
    </div>
  )
}

export default RehomingPage

