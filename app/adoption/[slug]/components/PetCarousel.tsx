import { Header, SearchCard } from '../../../../components';
import Link from 'next/link';
import { petDataProps } from '../../constants';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Define the prop type for PetCarousel
interface PetCarouselProps {
    species : string;
}

const PetCarousel = ( petSpecies : PetCarouselProps) => {

    const [petCarousel, setPetCarousel] = useState<petDataProps[]>([])

    const fetchCarouselData = async( searchTerm : string) => {
        
        try {
            const searchResults = await axios.get(`/api/searchPets?type=${searchTerm}&page=1`)
            
            const petsData = searchResults.data;

            setPetCarousel(petsData.requestedFilteredPets);
        } catch (error) { 
            setPetCarousel([]);
        }
    }

    useEffect(() => {
        fetchCarouselData(petSpecies.species);
    } , [])

    return (
        <div className=' max-w-screen-2xl h-fit my-12 relative flex flex-col justify-center items-center mx-auto'>
            <Header 
                content='Similar Pets'
            />
            <div className='flex overflow-auto w-4/5 lg:w-full bg-gray-50 shadow-md'>
                {petCarousel.map((pet: petDataProps) => (
                    <Link key={pet.pet_id} className='scale-75'
                    href={`/adoption/${pet.pet_id}`}>
                    <SearchCard 
                        img_src={pet.petURL}
                        name={pet.name}
                        breed={pet.breed}
                        age={pet.age}
                        gender={pet.gender}
                        fee={50}
                    />
                </Link>
                ))}
            </div>
        </div>
    )
}

export default PetCarousel

