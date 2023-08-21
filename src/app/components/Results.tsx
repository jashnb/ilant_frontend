import React from 'react';

interface Book {
    id: number;
    coverUrl: string;
    title: string;
    authors: string;
    description: string;
}

const Results: React.FC<{ books: Book[] }> = ({ books }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {books.map((book) => (
                <div key={book.id} className="bg-white p-4 rounded-lg shadow-md">
                    <img src={book.coverUrl} alt={book.title} className="w-full h-auto" />
                    <h2 className="text-lg font-semibold">{book.title}</h2>
                    <p className="text-gray-500">{book.authors}</p>
                    <p className="mt-2">{book.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Results;
