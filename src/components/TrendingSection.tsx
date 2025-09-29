'use client';

import Link from 'next/link';
import { useState } from 'react';

interface ProviderCardProps {
  id: string;
  name: string;
  category: string;
  location: string;
  rating: number;
  reviewCount: number;
  price?: string;
  imageSrc: string;
  badges: string[];
  verified: boolean;
  featured?: boolean;
  instantBooking?: boolean;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-4"
        >
          <path
            d="M12.8192 5.66592L17.1729 6.30822C17.5334 6.35972 17.8364 6.61422 17.9515 6.96263C18.0667 7.31408 17.9727 7.69582 17.7122 7.95638L14.5552 11.0527L15.3005 15.4943C15.3611 15.8579 15.2127 16.2275 14.9097 16.4426C14.6098 16.6577 14.2129 16.685 13.8887 16.5123L9.99856 14.4369L6.11146 16.5123C5.78425 16.685 5.38736 16.6577 5.08742 16.4426C4.78748 16.2275 4.63599 15.8579 4.69962 15.4943L5.44492 11.0527L2.28737 7.95638C2.02651 7.69582 1.9338 7.31408 2.04833 6.96263C2.16254 6.61422 2.46461 6.35972 2.82787 6.30822L7.17791 5.66592L9.12904 1.65671C9.28961 1.32295 9.62894 1.11108 9.99856 1.11108C10.3712 1.11108 10.7105 1.32295 10.8711 1.65671L12.8192 5.66592Z"
            fill={star <= rating ? "#FFD32D" : "#E4E7EC"}
          />
        </svg>
      ))}
    </div>
  );
}

function ProviderCard({ provider }: { provider: ProviderCardProps }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="w-[380px] h-[367px] bg-grey-100 rounded-lg overflow-hidden relative group">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.90) 0%, rgba(255, 255, 255, 0.00) 99.01%), url(${provider.imageSrc})`
        }}
      />
      
      {/* Bottom Gradient */}
      <div 
        className="absolute bottom-0 left-0 w-full h-36"
        style={{
          background: 'linear-gradient(2deg, #000 1.62%, rgba(0, 0, 0, 0.00) 98.38%)'
        }}
      />

      {/* Top Badges */}
      <div className="absolute top-6 left-6 flex flex-col gap-1">
        <div className="flex gap-1">
          {provider.instantBooking && (
            <div className="flex items-center gap-1 px-2.5 py-1 bg-white rounded-full">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.6498 2.39995H7.3498V1.64995C7.3498 1.40151 7.55043 1.19995 7.7998 1.19995C8.04918 1.19995 8.2498 1.40151 8.2498 1.64995V2.39995H8.9998C9.66168 2.39995 10.1998 2.93714 10.1998 3.59995V9.59995C10.1998 10.2618 9.66168 10.8 8.9998 10.8H2.9998C2.33699 10.8 1.7998 10.2618 1.7998 9.59995V3.59995C1.7998 2.93714 2.33699 2.39995 2.9998 2.39995H3.7498V1.64995C3.7498 1.40151 3.95043 1.19995 4.1998 1.19995C4.44918 1.19995 4.6498 1.40151 4.6498 1.64995V2.39995ZM2.6998 9.59995C2.6998 9.76495 2.83405 9.89995 2.9998 9.89995H8.9998C9.1648 9.89995 9.2998 9.76495 9.2998 9.59995V4.79995H2.6998V9.59995Z" fill="#00AB55"/>
              </svg>
              <span className="text-grey-700 text-xs font-medium">Instant Booking</span>
            </div>
          )}
          {provider.featured && (
            <div className="flex items-center gap-1 px-2.5 py-1 bg-white rounded-full">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.69172 4.4424L10.3039 4.81501C10.5203 4.84489 10.702 4.99252 10.7711 5.19465C10.8402 5.39853 10.7838 5.61999 10.6275 5.77114L8.73333 7.5674L9.18052 10.144C9.21687 10.3549 9.1278 10.5694 8.94602 10.6942C8.76605 10.8189 8.52792 10.8348 8.33341 10.7346L5.99933 9.53063L3.66707 10.7346C3.47074 10.8348 3.23261 10.8189 3.05265 10.6942C2.87268 10.5694 2.78179 10.3549 2.81996 10.144L3.26715 7.5674L1.37262 5.77114C1.2161 5.61999 1.16048 5.39853 1.22919 5.19465C1.29772 4.99252 1.47896 4.84489 1.69692 4.81501L4.30694 4.4424L5.47762 2.11658C5.57396 1.92296 5.77756 1.80005 5.99933 1.80005C6.22292 1.80005 6.42652 1.92296 6.52286 2.11658L7.69172 4.4424Z" fill="#FFD32D"/>
              </svg>
              <span className="text-grey-700 text-xs font-medium">Featured</span>
            </div>
          )}
          {provider.price && (
            <div className="flex items-center gap-1 px-2.5 py-1 bg-white rounded-full">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.2002 2.99995H4.8002L3.91145 1.66645C3.77832 1.46695 3.92082 1.19995 4.16082 1.19995H7.83957C8.07957 1.19995 8.22207 1.46695 8.08895 1.66645L7.2002 2.99995ZM4.8002 3.59995H7.2002C7.27145 3.64683 7.35207 3.69933 7.42707 3.75745C8.50707 4.43808 10.8002 5.90433 10.8002 8.99995C10.8002 9.9937 9.99395 10.8 9.0002 10.8H3.0002C2.00607 10.8 1.2002 9.9937 1.2002 8.99995C1.2002 5.90433 3.49332 4.43808 4.55645 3.75745C4.64832 3.69933 4.72895 3.64683 4.8002 3.59995ZM6.37707 5.39995C6.37707 5.19183 6.20832 5.02308 5.98332 5.02308C5.79207 5.02308 5.62332 5.19183 5.62332 5.39995V5.51245C5.51832 5.53495 5.40207 5.56683 5.3252 5.60808C5.04582 5.73558 4.80207 5.97183 4.74207 6.31495C4.70832 6.5062 4.72707 6.69183 4.80582 6.8587C4.88457 7.0237 5.00645 7.13995 5.1302 7.22433C5.3477 7.37245 5.63457 7.4587 5.85395 7.52433L5.8952 7.53558C6.1577 7.6162 6.33395 7.67433 6.44457 7.75495C6.49145 7.7887 6.50832 7.81495 6.51395 7.83183C6.52145 7.84683 6.5327 7.88058 6.51957 7.95558C6.50832 8.0212 6.4727 8.07745 6.36957 8.12058C6.2552 8.16933 6.06957 8.1937 5.82957 8.1562C5.71707 8.13745 5.51645 8.06995 5.33832 8.00995C5.29707 7.99495 5.25582 7.98183 5.21832 7.9687C5.02145 7.90308 4.80957 8.00995 4.74395 8.20683C4.67832 8.4037 4.7852 8.61558 4.98207 8.66433C5.00457 8.6887 5.0327 8.69808 5.06457 8.70933C5.19582 8.75995 5.4452 8.8387 5.62332 8.87995V8.99995C5.62332 9.20808 5.79207 9.37683 5.98332 9.37683C6.20832 9.37683 6.37707 9.20808 6.37707 8.99995V8.89683C6.47645 8.87808 6.57395 8.83308 6.66395 8.81058C6.9602 8.68495 7.19645 8.4412 7.25832 8.08495C7.29207 7.88995 7.27707 7.70245 7.20207 7.53183C7.12895 7.36308 7.01082 7.23933 6.8852 7.14933C6.65832 6.98245 6.35457 6.89245 6.1277 6.82308L6.09582 6.81933C5.84645 6.7387 5.66645 6.68245 5.55207 6.6037C5.50332 6.56995 5.48832 6.54745 5.48457 6.53808C5.48082 6.53058 5.46957 6.50808 5.48082 6.44433C5.48832 6.40683 5.51645 6.34495 5.63457 6.29245C5.73957 6.23808 5.94207 6.20808 6.17082 6.22683C6.25332 6.25683 6.50645 6.30558 6.57957 6.32433C6.77832 6.3787 6.98457 6.2587 7.03707 6.05808C7.09145 5.85933 6.97145 5.65308 6.77082 5.60058C6.68832 5.57808 6.50082 5.54058 6.37707 5.51808V5.39995Z" fill="#2E90FA"/>
              </svg>
              <span className="text-grey-700 text-xs font-medium">{provider.price}</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-6 left-6 flex flex-col gap-2 w-[calc(100%-3rem)]">
        {/* Category Badge */}
        <div className="self-start px-2.5 py-1 bg-warning-600 rounded-full">
          <span className="text-white text-xs font-medium">{provider.category}</span>
        </div>

        {/* Name and Verification */}
        <div className="flex items-center gap-1">
          <h3 className="text-white text-xl font-semibold line-clamp-1">{provider.name}</h3>
          {provider.verified && (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.6562 4.34313C16.4688 5.15625 16.6906 6.31875 16.4031 7.34688C17.3531 7.85 18 8.85 18 10C18 11.15 17.3531 12.15 16.4031 12.6531C16.7188 13.6812 16.4688 14.8156 15.6562 15.6562C14.8156 16.4688 13.6812 16.6906 12.6531 16.4031C12.15 17.3531 11.15 18 10 18C8.85 18 7.85 17.3531 7.34688 16.4031C6.31875 16.7188 5.15625 16.4688 4.34313 15.6562C3.53 14.8156 3.28125 13.6812 3.59687 12.6531C2.64687 12.15 2 11.15 2 10C2 8.85 2.64687 7.85 3.59687 7.34688C3.25312 6.31875 3.53 5.15625 4.34313 4.34313C5.15625 3.53 6.31875 3.28125 7.34688 3.59687C7.85 2.64687 8.85 2 10 2C11.15 2 12.15 2.64687 12.6531 3.59687C13.6812 3.25312 14.8156 3.53 15.6562 4.34313Z" fill="#00AB55"/>
              <path d="M7 10L8.64645 11.6464C8.84171 11.8417 9.15829 11.8417 9.35355 11.6464L13 8" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          )}
        </div>

        {/* Location */}
        <p className="text-white text-sm">{provider.location}</p>
      </div>

      {/* Bottom Actions */}
      <div className="absolute bottom-6 right-6 flex justify-between items-center w-[calc(100%-3rem)] left-6">
        {/* Rating */}
        <div className="flex items-center gap-2">
          <StarRating rating={provider.rating} />
          <span className="text-grey-700 text-base font-medium">{provider.rating}</span>
          <span className="text-grey-500 text-xs">({provider.reviewCount} reviews)</span>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-3">
          <button className="text-grey-400 hover:text-grey-600 transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9999 17.2498C11.9999 17.5467 11.8249 17.8154 11.5561 17.9342C11.2843 18.056 10.9405 18.0061 10.7468 17.8061L8.24679 15.5561C8.09054 15.4155 7.99992 15.2123 7.99992 14.9998C7.99992 14.7873 8.09054 14.5842 8.24679 14.4436L10.7468 12.1936C10.9405 11.9936 11.2843 11.9436 11.5561 12.0655C11.8249 12.1843 11.9999 12.453 11.9999 12.7499V14.2499H12.4999C13.7436 14.2499 14.7498 13.2436 14.7498 11.9999V6.88432C13.7342 6.56558 12.9999 5.61871 12.9999 4.49998C12.9999 3.11937 14.1186 2.00001 15.4998 2.00001C16.8811 2.00001 17.9998 3.11937 17.9998 4.49998C17.9998 5.61871 17.2654 6.56558 16.2498 6.88432V11.9999C16.2498 14.0717 14.5717 15.7498 12.4999 15.7498H11.9999V17.2498ZM16.4998 4.47185C16.4998 3.9478 16.0529 3.47187 15.4998 3.47187C14.9467 3.47187 14.4998 3.9478 14.4998 4.47185C14.4998 5.05216 14.9467 5.47184 15.4998 5.47184C16.0529 5.47184 16.4998 5.05216 16.4998 4.47185ZM7.99992 2.75C7.99992 2.45375 8.17492 2.18538 8.44367 2.06488C8.71554 1.94439 9.03116 1.99442 9.25303 2.19254L11.753 4.44248C11.9092 4.58466 11.9999 4.78747 11.9999 4.99997C11.9999 5.21247 11.9092 5.41559 11.753 5.55621L9.25303 7.80618C9.03116 8.00618 8.71554 8.05618 8.44367 7.93431C8.17492 7.81556 7.99992 7.54681 7.99992 7.24994V5.74996H7.49993C6.25619 5.74996 5.24996 6.7562 5.24996 7.99993V13.1155C6.26557 13.4342 6.99993 14.3811 6.99993 15.4998C6.99993 16.8811 5.8812 17.9998 4.49997 17.9998C3.11936 17.9998 2 16.8811 2 15.4998C2 14.3811 2.73562 13.4342 3.74998 13.1155V7.99993C3.74998 5.92808 5.42808 4.24998 7.49993 4.24998H7.99992V2.75ZM3.49998 15.4998C3.49998 16.053 3.94779 16.4998 4.49997 16.4998C5.05215 16.4998 5.49995 16.053 5.49995 15.4998C5.49995 14.9467 5.05215 14.4998 4.49997 14.4998C3.94779 14.4998 3.49998 14.9467 3.49998 15.4998Z" fill="currentColor"/>
            </svg>
          </button>
          
          <button 
            onClick={() => setIsLiked(!isLiked)} 
            className={`transition-colors ${isLiked ? 'text-red-500' : 'text-grey-400 hover:text-red-500'}`}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 7.64837V7.46712C2 5.28274 3.57875 3.41962 5.73125 3.06086C7.12813 2.82368 8.60625 3.28805 9.625 4.30837L10 4.68274L10.3469 4.30837C11.3938 3.28805 12.8438 2.82368 14.2688 3.06086C16.4219 3.41962 18 5.28274 18 7.46712V7.64837C18 8.94524 17.4625 10.1859 16.5125 11.0702L10.8656 16.3421C10.6313 16.5609 10.3219 16.6828 10 16.6828C9.67812 16.6828 9.36875 16.5609 9.13438 16.3421L3.48719 11.0702C2.53844 10.1859 2.00001 8.94524 2.00001 7.64837H2Z" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TrendingSection() {
  const providers: ProviderCardProps[] = [
    {
      id: '1',
      name: 'Sarah Johnson - Pet Grooming Pro',
      category: 'Grooming',
      location: 'New York, USA',
      rating: 4.5,
      reviewCount: 56,
      imageSrc: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500&h=400&fit=crop',
      badges: ['Professional'],
      verified: true,
      instantBooking: true
    },
    {
      id: '2',
      name: 'Dr. Michael Chen - Veterinary Care',
      category: 'Veterinary',
      location: 'Manhattan, USA',
      rating: 5.0,
      reviewCount: 107,
      price: '$75-150',
      imageSrc: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=400&fit=crop',
      badges: ['Certified', 'Emergency Care'],
      verified: true,
      featured: true
    },
    {
      id: '3',
      name: 'Emma Thompson - Dog Walker & Trainer',
      category: 'Dog Walking',
      location: 'New Jersey, USA',
      rating: 4.0,
      reviewCount: 43,
      imageSrc: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&h=400&fit=crop',
      badges: ['Certified Trainer'],
      verified: true,
      instantBooking: true
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-10 py-25 px-30 bg-white">
      {/* Section Header */}
      <div className="flex justify-between items-center w-full max-w-[1200px]">
        <div className="flex flex-col gap-2">
          <h2 className="text-grey-800 text-3xl font-medium">Featured Providers</h2>
          <p className="text-grey-500 text-base leading-relaxed">
            Top-rated pet care professionals in your area
          </p>
        </div>
        
        {/* Explore More Button */}
        <Link href="/listings" className="flex items-center gap-1 hover:gap-2 transition-all">
          <span className="text-grey-500 text-base">Explore More</span>
          <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4679 15.2524C12.321 15.1337 12.2492 14.9431 12.2492 14.7494C12.2492 14.5556 12.3224 14.3656 12.4689 14.2191L15.4395 11.2496H2.74994C2.33591 11.2496 2 10.9122 2 10.4716C2 10.0841 2.33591 9.74976 2.74994 9.74976H15.4395L12.4701 6.78031C12.1771 6.48736 12.1771 6.01287 12.4701 5.71977C12.763 5.42667 13.2375 5.42682 13.5306 5.71977L17.7803 9.96943C18.0732 10.2624 18.0732 10.7369 17.7803 11.03L13.5306 15.2796C13.2366 15.5712 12.7616 15.5712 12.4679 15.2524Z" fill="#667085"/>
          </svg>
        </Link>
      </div>

      {/* Providers Grid */}
      <div className="flex flex-col items-center gap-10">
        <div className="flex justify-center gap-7.5 flex-wrap max-w-[1200px]">
          {providers.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-96">
          <button className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
            <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.03861 18.2029C9.21484 18.0604 9.30109 17.8317 9.30109 17.5992C9.30109 17.3668 9.21319 17.1388 9.03745 16.9629L5.47265 13.3996H20.7002C21.197 13.3996 21.6001 12.9946 21.6001 12.4659C21.6001 12.0009 21.197 11.5997 20.7002 11.5997H5.47265L9.03598 8.03637C9.38752 7.68484 9.38752 7.11544 9.03598 6.76372C8.68445 6.412 8.11506 6.41219 7.76334 6.76372L2.66375 11.8633C2.31221 12.2149 2.31221 12.7842 2.66375 13.136L7.76334 18.2356C8.11618 18.5854 8.68614 18.5854 9.03861 18.2029Z" fill="#2E90FA"/>
            </svg>
          </button>
          
          <button className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
            <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.9614 18.2029C14.7852 18.0604 14.6989 17.8317 14.6989 17.5992C14.6989 17.3668 14.7868 17.1388 14.9626 16.9629L18.5274 13.3996L3.29983 13.3996C2.80299 13.3996 2.3999 12.9946 2.3999 12.4659C2.3999 12.0009 2.80299 11.5997 3.29983 11.5997L18.5274 11.5997L14.964 8.03637C14.6125 7.68484 14.6125 7.11544 14.964 6.76372C15.3155 6.412 15.8849 6.41219 16.2367 6.76372L21.3363 11.8633C21.6878 12.2149 21.6878 12.7842 21.3363 13.136L16.2367 18.2356C15.8838 18.5854 15.3139 18.5854 14.9614 18.2029Z" fill="#2E90FA"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
