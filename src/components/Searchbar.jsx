import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === '') return;
    onSearch(city);
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-8">
      <div className="flex border border-gray-300 rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="px-4 py-2 outline-none w-64 text-black"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 flex items-center justify-center"
        >
          <FiSearch size={20} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
