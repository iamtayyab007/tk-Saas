// context/BookmarkContext.tsx
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type BookmarkContextType = {
    bookmarked: string[];
    addToBookmark: (id: string) => void;
};

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export const BookmarkProvider = ({ children }: { children: ReactNode }) => {
    const [bookmarked, setBookmarked] = useState<string[]>([]);

    const addToBookmark = (id: string) => {

        setBookmarked(prev => (prev.includes(id) ? prev.filter((filter)=>filter!=id) : [...prev, id]));
    };

    return (
        <BookmarkContext.Provider value={{ bookmarked, addToBookmark }}>
            {children}
        </BookmarkContext.Provider>
    );
};

export const useBookmark = () => {
    const context = useContext(BookmarkContext);
    if (!context) throw new Error('useBookmark must be used within a BookmarkProvider');
    return context;
};
