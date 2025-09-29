'use client';

import { useState } from 'react';

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('All Categories');
  const [location, setLocation] = useState('');

  return (
    <section className="relative w-full h-[800px] flex items-center justify-start pl-[150px] mx-auto">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1525253086316-d0c936c814f8?w=2880&auto=format&fit=crop')",
          backgroundPosition: 'right center'
        }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(177deg, rgba(0, 0, 0, 0.57) 14.56%, rgba(75, 82, 93, 0.00) 97.81%)'
        }}
      />

      {/* Search Box */}
      <div className="relative z-10 w-[483px] p-9 flex flex-col items-center justify-start gap-8 rounded-lg border border-white backdrop-blur-md"
           style={{
             background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.44) 100%)'
           }}>
        
        {/* Title Section */}
        <div className="flex flex-col items-center gap-3 w-full">
          <h1 className="text-grey-800 text-center text-3xl font-semibold">
            Find Pet Services Near You
          </h1>
          <p className="text-grey-500 text-center text-base leading-relaxed">
            Connect with trusted groomers, vets, and pet care professionals.
          </p>
        </div>

        {/* Search Inputs */}
        <div className="flex flex-col gap-4 w-full">
          {/* Service Search Input */}
          <div className="flex items-center gap-2.5 w-full h-12 px-4 bg-white border border-grey-200 rounded shadow-sm">
            <input
              type="text"
              placeholder="What pet service are you looking for?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 text-grey-400 text-sm outline-none placeholder:text-grey-400"
            />
          </div>

          {/* Category Dropdown */}
          <div className="flex items-center justify-between w-full h-12 px-4 bg-white border border-grey-200 rounded shadow-sm">
            <span className="text-grey-400 text-sm">{category}</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.99982 9C5.79513 9 5.59034 8.92466 5.43435 8.77399L1.43456 4.91685C1.12207 4.61551 1.12207 4.12734 1.43456 3.826C1.74704 3.52466 2.25327 3.52466 2.56575 3.826L5.99982 7.13893L9.43464 3.82661C9.74713 3.52527 10.2533 3.52527 10.5658 3.82661C10.8783 4.12794 10.8783 4.61611 10.5658 4.91745L6.56604 8.7746C6.4098 8.92527 6.20481 9 5.99982 9Z" fill="#98A2B3"/>
            </svg>
          </div>

          {/* Location Input */}
          <div className="flex items-center justify-between w-full h-12 px-4 bg-white border border-grey-200 rounded shadow-sm">
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="flex-1 text-grey-400 text-sm outline-none placeholder:text-grey-400"
            />
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.55553 10.5843C4.57678 9.37741 2.3999 6.45234 2.3999 4.80934C2.3999 2.81593 4.01165 1.2 5.9999 1.2C7.9874 1.2 9.5999 2.81593 9.5999 4.80934C9.5999 6.45234 7.40615 9.37741 6.44428 10.5843C6.21365 10.8719 5.78615 10.8719 5.55553 10.5843ZM5.9999 6.01245C6.66178 6.01245 7.1999 5.47293 7.1999 4.80934C7.1999 4.14575 6.66178 3.60623 5.9999 3.60623C5.33803 3.60623 4.7999 4.14575 4.7999 4.80934C4.7999 5.47293 5.33803 6.01245 5.9999 6.01245Z" fill="#98A2B3"/>
            </svg>
          </div>

          {/* Search Button */}
          <button className="flex items-center justify-center gap-2.5 w-full py-2.5 px-8 bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-colors">
            <span className="text-white text-base font-medium">Search</span>
          </button>
        </div>

        {/* Popular Categories */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-grey-700 text-center text-sm">Popular Categories</span>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="px-2.5 py-1 bg-grey-200 rounded-full text-grey-500 text-xs font-medium">
              Grooming
            </span>
            <span className="px-2.5 py-1 bg-grey-200 rounded-full text-grey-500 text-xs font-medium">
              Veterinary
            </span>
            <span className="px-2.5 py-1 bg-grey-200 rounded-full text-grey-500 text-xs font-medium">
              Dog Walking
            </span>
            <span className="px-2.5 py-1 bg-grey-200 rounded-full text-grey-500 text-xs font-medium">
              Pet Sitting
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
