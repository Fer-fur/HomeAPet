import Image from 'next/image';
import {LuCalendarClock, } from 'react-icons/lu';
import {PiGenderIntersexBold} from 'react-icons/pi';
import { AiOutlineDollarCircle } from 'react-icons/ai';

interface SearchBarProps {
    img_src?: string,
    name: string,
    breed: string,
    age: string,
    gender: string,
    fee: number
}


const SearchCard = ({img_src, name, breed, age, gender, fee} : SearchBarProps) => {
  return (
    <div className='relative flex flex-col bg-gray-100 rounded-md w-[368px] h-fit shadow-lg hover:shadow-2xl hover:scale-110'>
        {/* Pet Image */}
        <div className='flex flex-2 relative h-[384px] justify-center'>
            <Image 
                src= {img_src || ''}
                alt={breed}
                fill
                sizes='(max-width: 800px) 80vw, 100vw'
                className='object-cover rounded-t-md'
            />
        </div>
        {/* Pet Details */}
        <div className='flex flex-1 flex-col justify-center p-4 '>
            {/* Pet Name and Breed */}
            <div className='flex justify-center items-center py-4 gap-4'>
                <h3 className='font-semibold text-xl font-poppins capitalize'>
                    {name} 
                </h3>
                <span className='italic capitalize'>
                    ( {breed} ) 
                </span>
            </div>
            
            {/* Minor details with icons */}
            <div className='flex justify-between px-4'>
                <div className='flex-col flex gap-2 capitalize'>
                    <LuCalendarClock 
                        className="w-7 h-7 text-green-500 mx-auto"
                    />
                    <p className='flex justify-center'>{age}</p>
                </div >
                <div className='flex-col flex gap-2'>
                    <PiGenderIntersexBold 
                        className="w-7 h-7 text-green-500 mx-auto"
                    />
                    <p className='flex justify-center capitalize'>{gender}</p>
                </div>
                <div className='flex-col flex gap-2'>
                    <AiOutlineDollarCircle
                        className="w-8 h-8 text-green-500 mx-auto"
                    />
                    <p className='flex justify-center'>$ {fee}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchCard