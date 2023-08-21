"use client"
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import axios from 'axios';

const ITEMS_PER_PAGE = 10;

const Home: React.FC = () => {
    const [searchResults, setSearchResults] = useState<Book[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async (searchTerm: string, page: number) => {
        try {
            setSearchTerm(searchTerm);
            const response = await axios.get(
                `http://localhost:8000/api/search-books/?query=${searchTerm}&page=${page}&itemsPerPage=${ITEMS_PER_PAGE}`
            );
            setSearchResults(response.data.books);
            setCurrentPage(page);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    const handleNextPage = () => {
        handleSearch(searchTerm, currentPage + 1);
    };

    const handlePreviousPage = () => {
        handleSearch(searchTerm, currentPage - 1);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-semibold mb-4">Book Search App</h1>
            <SearchBar onSearch={(term) => handleSearch(term, 1)} />
            <Results books={searchResults} />
            {searchResults.length > 0 && (
                <div className="flex justify-between mt-4">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}"
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                    >
                        Previous Page
                    </button>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg ${searchResults.length < ITEMS_PER_PAGE && 'opacity-50 cursor-not-allowed'}"
                        onClick={handleNextPage}
                        disabled={searchResults.length < ITEMS_PER_PAGE}
                    >
                        Next Page
                    </button>
                </div>
            )}
        </div>
    );
};

export default Home;

interface Book {
    id: number;
    coverUrl: string;
    title: string;
    authors: string;
    description: string;
}
