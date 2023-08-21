import React, { useState } from 'react';

const SearchBar: React.FC<{ onSearch: (term: string) => void }> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="flex items-center space-x-2">
            <input
                type="text"
                placeholder="Search for books..."
                className="px-4 py-2 border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
