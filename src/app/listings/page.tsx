'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface FilterState {
  category: string;
  location: string;
  priceRange: string;
  rating: number;
  availability: string;
}

interface Provider {
  id: string;
  name: string;
  category: string;
  location: string;
  rating: number;
  reviewCount: number;
  price: string;
  imageSrc: string;
  verified: boolean;
  instantBooking: boolean;
  description: string;
}

export default function ListingsPage() {
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    location: '',
    priceRange: 'all',
    rating: 0,
    availability: 'all'
  });

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const providers: Provider[] = [
    {
      id: '1',
      name: 'Sarah\'s Pet Grooming Studio',
      category: 'Grooming',
      location: 'New York, NY',
      rating: 4.9,
      reviewCount: 128,
      price: '$45-85',
      imageSrc: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop',
      verified: true,
      instantBooking: true,
      description: 'Professional pet grooming with 8+ years of experience. Specializing in all breeds and coat types.'
    },
    {
      id: '2',
      name: 'Dr. Michael Chen - Veterinary Care',
      category: 'Veterinary',
      location: 'Manhattan, NY',
      rating: 5.0,
      reviewCount: 234,
      price: '$75-200',
      imageSrc: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
      verified: true,
      instantBooking: false,
      description: 'Board-certified veterinarian offering comprehensive pet healthcare and emergency services.'
    },
    {
      id: '3',
      name: 'Happy Tails Dog Walking',
      category: 'Dog Walking',
      location: 'Brooklyn, NY',
      rating: 4.7,
      reviewCount: 89,
      price: '$25-45',
      imageSrc: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop',
      verified: true,
      instantBooking: true,
      description: 'Reliable dog walking and pet sitting services with flexible scheduling and GPS tracking.'
    },
    {
      id: '4',
      name: 'Pawsome Training Academy',
      category: 'Training',
      location: 'Queens, NY',
      rating: 4.8,
      reviewCount: 156,
      price: '$60-120',
      imageSrc: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=300&fit=crop',
      verified: true,
      instantBooking: false,
      description: 'Certified dog trainer specializing in obedience training, behavior modification, and puppy classes.'
    },
    {
      id: '5',
      name: 'Cozy Pet Boarding Haven',
      category: 'Boarding',
      location: 'Bronx, NY',
      rating: 4.6,
      reviewCount: 67,
      price: '$55-95',
      imageSrc: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=300&fit=crop',
      verified: true,
      instantBooking: true,
      description: 'Home-style pet boarding with spacious play areas and 24/7 supervision in a safe environment.'
    },
    {
      id: '6',
      name: 'Furry Friends Pet Sitting',
      category: 'Pet Sitting',
      location: 'Staten Island, NY',
      rating: 4.5,
      reviewCount: 43,
      price: '$30-60',
      imageSrc: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop',
      verified: false,
      instantBooking: true,
      description: 'In-home pet sitting services providing personalized care while you\'re away.'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Services' },
    { value: 'grooming', label: 'Pet Grooming' },
    { value: 'veterinary', label: 'Veterinary Care' },
    { value: 'walking', label: 'Dog Walking' },
    { value: 'training', label: 'Pet Training' },
    { value: 'boarding', label: 'Pet Boarding' },
    { value: 'sitting', label: 'Pet Sitting' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Main Content */}
      <div className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="bg-grey-100 py-16">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center">
              <h1 className="text-4xl font-semibold text-grey-800 mb-4">
                Find Pet Care Providers
              </h1>
              <p className="text-lg text-grey-500 mb-8">
                Connect with trusted professionals in your area
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto bg-white rounded-lg p-2 shadow-sm border border-grey-200">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Search providers..."
                    className="flex-1 px-4 py-3 text-grey-700 outline-none"
                  />
                  <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Results */}
        <section className="max-w-7xl mx-auto px-8 py-12">
          <div className="flex gap-8">
            {/* Sidebar Filters */}
            <aside className="w-80 flex-shrink-0">
              <div className="bg-white rounded-lg border border-grey-200 p-6">
                <h3 className="text-lg font-semibold text-grey-800 mb-6">Filters</h3>
                
                {/* Category Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-grey-700 mb-3">
                    Service Category
                  </label>
                  <select
                    value={filters.category}
                    onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                    className="w-full px-3 py-2 border border-grey-300 rounded-md text-grey-700 outline-none focus:border-blue-500"
                  >
                    {categories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Location Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-grey-700 mb-3">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Enter city or zip code"
                    value={filters.location}
                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                    className="w-full px-3 py-2 border border-grey-300 rounded-md text-grey-700 outline-none focus:border-blue-500"
                  />
                </div>

                {/* Price Range Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-grey-700 mb-3">
                    Price Range
                  </label>
                  <select
                    value={filters.priceRange}
                    onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                    className="w-full px-3 py-2 border border-grey-300 rounded-md text-grey-700 outline-none focus:border-blue-500"
                  >
                    <option value="all">All Prices</option>
                    <option value="low">$0 - $50</option>
                    <option value="medium">$50 - $100</option>
                    <option value="high">$100+</option>
                  </select>
                </div>

                {/* Rating Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-grey-700 mb-3">
                    Minimum Rating
                  </label>
                  <div className="space-y-2">
                    {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                      <label key={rating} className="flex items-center">
                        <input
                          type="radio"
                          name="rating"
                          value={rating}
                          checked={filters.rating === rating}
                          onChange={(e) => setFilters({ ...filters, rating: Number(e.target.value) })}
                          className="mr-2"
                        />
                        <span className="text-sm text-grey-700">
                          {rating}+ stars
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Availability Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-grey-700 mb-3">
                    Availability
                  </label>
                  <select
                    value={filters.availability}
                    onChange={(e) => setFilters({ ...filters, availability: e.target.value })}
                    className="w-full px-3 py-2 border border-grey-300 rounded-md text-grey-700 outline-none focus:border-blue-500"
                  >
                    <option value="all">All Providers</option>
                    <option value="instant">Instant Booking</option>
                    <option value="verified">Verified Only</option>
                  </select>
                </div>
              </div>
            </aside>

            {/* Results Area */}
            <main className="flex-1">
              {/* Results Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-grey-700">
                    Showing <span className="font-semibold">{providers.length}</span> providers
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  {/* View Mode Toggle */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-grey-100 text-grey-600'}`}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="6" height="6" rx="1" fill="currentColor"/>
                        <rect x="9" y="1" width="6" height="6" rx="1" fill="currentColor"/>
                        <rect x="1" y="9" width="6" height="6" rx="1" fill="currentColor"/>
                        <rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor"/>
                      </svg>
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-grey-100 text-grey-600'}`}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="3" width="14" height="2" rx="1" fill="currentColor"/>
                        <rect x="1" y="7" width="14" height="2" rx="1" fill="currentColor"/>
                        <rect x="1" y="11" width="14" height="2" rx="1" fill="currentColor"/>
                      </svg>
                    </button>
                  </div>

                  {/* Sort Options */}
                  <select className="px-3 py-2 border border-grey-300 rounded-md text-grey-700 outline-none focus:border-blue-500">
                    <option>Sort by Rating</option>
                    <option>Sort by Price</option>
                    <option>Sort by Reviews</option>
                    <option>Sort by Distance</option>
                  </select>
                </div>
              </div>

              {/* Provider Cards */}
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
                {providers.map((provider) => (
                  <div key={provider.id} className={`bg-white rounded-lg shadow-sm border border-grey-200 overflow-hidden hover:shadow-md transition-shadow ${viewMode === 'list' ? 'flex' : ''}`}>
                    {/* Provider Image */}
                    <div className={`bg-cover bg-center ${viewMode === 'list' ? 'w-48 h-32' : 'w-full h-48'}`} style={{ backgroundImage: `url(${provider.imageSrc})` }} />
                    
                    {/* Provider Info */}
                    <div className="p-4 flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-grey-800 text-lg line-clamp-1">
                            {provider.name}
                          </h3>
                          {provider.verified && (
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.6562 4.34313C16.4688 5.15625 16.6906 6.31875 16.4031 7.34688C17.3531 7.85 18 8.85 18 10C18 11.15 17.3531 12.15 16.4031 12.6531C16.7188 13.6812 16.4688 14.8156 15.6562 15.6562C14.8156 16.4688 13.6812 16.6906 12.6531 16.4031C12.15 17.3531 11.15 18 10 18C8.85 18 7.85 17.3531 7.34688 16.4031C6.31875 16.7188 5.15625 16.4688 4.34313 15.6562C3.53 14.8156 3.28125 13.6812 3.59687 12.6531C2.64687 12.15 2 11.15 2 10C2 8.85 2.64687 7.85 3.59687 7.34688C3.25312 6.31875 3.53 5.15625 4.34313 4.34313C5.15625 3.53 6.31875 3.28125 7.34688 3.59687C7.85 2.64687 8.85 2 10 2C11.15 2 12.15 2.64687 12.6531 3.59687C13.6812 3.25312 14.8156 3.53 15.6562 4.34313Z" fill="#00AB55"/>
                              <path d="M7 10L8.64645 11.6464C8.84171 11.8417 9.15829 11.8417 9.35355 11.6464L13 8" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                            </svg>
                          )}
                        </div>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                          {provider.category}
                        </span>
                      </div>
                      
                      <p className="text-grey-600 text-sm mb-2">{provider.location}</p>
                      <p className="text-grey-500 text-sm mb-3 line-clamp-2">{provider.description}</p>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-500">★</span>
                          <span className="font-medium text-grey-700">{provider.rating}</span>
                          <span className="text-grey-500 text-xs">({provider.reviewCount})</span>
                        </div>
                        <span className="font-semibold text-grey-800">{provider.price}</span>
                      </div>
                      
                      {provider.instantBooking && (
                        <div className="mt-3">
                          <span className="inline-flex items-center px-2 py-1 bg-success-100 text-success-500 text-xs font-medium rounded">
                            ⚡ Instant Booking
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center gap-2">
                  <button className="px-3 py-2 border border-grey-300 rounded-md text-grey-700 hover:bg-grey-50">
                    Previous
                  </button>
                  {[1, 2, 3, 4, 5].map((page) => (
                    <button
                      key={page}
                      className={`px-3 py-2 rounded-md ${page === 1 ? 'bg-blue-500 text-white' : 'border border-grey-300 text-grey-700 hover:bg-grey-50'}`}
                    >
                      {page}
                    </button>
                  ))}
                  <button className="px-3 py-2 border border-grey-300 rounded-md text-grey-700 hover:bg-grey-50">
                    Next
                  </button>
                </div>
              </div>
            </main>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
