'use client';
import { SearchCard } from '@/components';
import { GalleryCard } from '@/link_webContent';
import Link from 'next/link';
import SearchBar from './components/SearchBar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { petDataProps } from './constants';

const AdoptionPage = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [galleryCards, setGalleryCards] = useState<petDataProps[]>([])

    const getGalleryCards = async(pageNumber : number) => {

        try {
            const fetchedData = await axios.get(`api/pets?page=${pageNumber}`);

            const petsData = fetchedData.data;

            setGalleryCards(petsData.requestedPets);
            setTotalPages(Math.ceil(petsData.totalNumOfPets / 5));

        } catch (error) {
            return
        }
    };

    const handlePageChange = (nextPageNumber : number) => {
        setCurrentPage(nextPageNumber);
    };

    const handleSearch = async( searchTerm : string) => {
        
        // A check to reset the gallery cards if user does not input anything
        if(searchTerm === ""){
            getGalleryCards(currentPage);
            return
        }
        
        try {
            const searchResults = await axios.get(`api/searchPets?type=${searchTerm}&page=${currentPage}`)
            
            const petsData = searchResults.data;

            setGalleryCards(petsData.requestedFilteredPets);
            setTotalPages(Math.ceil(petsData.totalNumOfFilteredPets / 5));

        } catch (error) { 
            setGalleryCards([]);
        }
    }

    useEffect(() => {
      getGalleryCards(currentPage);
    }, [currentPage]);

    return (
        <div className='relative max-w-screen-2xl min-h-screen flex justify-center items-center mx-auto h-auto pb-12'>
            <div className='flex flex-col mt-10 gap-12 w-full '>
                {/* Page title */}
                <div className='flex justify-center'>
                    <h1 className='font-bold font-poppins text-5xl text-primary-green drop-shadow-lg'>
                        Pet Gallery
                    </h1>
                </div>
                {/* Search bar and filters */}
                <div className='relative w-full mx-auto flex flex-col justify-center items-center gap-3'>
                    <h2>Search for Type of Pets: </h2>
                    <SearchBar onSearch={handleSearch}/>
                </div>
                {/* Search Result Cards */}
                <div className='relative flex flex-wrap z-10 justify-center items-center gap-10 lg:gap-20 h-fit'>
                    {galleryCards && galleryCards.map((pet) => (
                        <Link key={pet.pet_id}
                        href={{
                            pathname: `/adoption/${pet.pet_id}`,
                            query: { pet_id: pet.pet_id },
                        }}
                        // as={`/adoption/${pet.pet_id}`}
                        >
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

                {/* Pagination Buttons */}
                <div className='flex justify-center gap-4'>
                    <button
                        disabled={currentPage === 1}
                        hidden = {currentPage === 1}
                        onClick={() => handlePageChange(currentPage-1)}
                        className='p-3 bg-green-400 rounded-lg w-32 hover:translate-y-[-5px] hover:bg-green-500 shadow-md'
                    >
                        Previous
                    </button>

                    <div className='flex justify-center items-center'>
                        {currentPage} / {totalPages} Pages
                    </div>

                    <button
                        disabled={currentPage === totalPages}
                        hidden = {currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage+1)}
                        className='p-3 bg-blue-400 rounded-lg w-32 hover:translate-y-[-5px] hover:bg-blue-500 shadow-md'
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AdoptionPage