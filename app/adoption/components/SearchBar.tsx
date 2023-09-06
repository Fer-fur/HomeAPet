import { useState } from 'react'
import { searchbarProps } from '../constants';

const SearchBar = ({ onSearch } : searchbarProps ) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className='flex gap-4'>
      <input
        type="text"
        placeholder="Search by pet type"
        value={searchTerm}
        onChange={(e) => setSearchTerm((e.target.value).toLowerCase())}
        className='bg-gray-200 rounded-2xl pl-4 h-[48px] w-[650px] focus:outline-none focus:border-0 focus:ring-4 focus:ring-blue-300'
      />
      <button onClick={handleSearch}
        className='w-32 h-[48px] shadow-xl rounded-md bg-green-400 text-white hover:bg-green-600'
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar