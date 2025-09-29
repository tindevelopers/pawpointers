'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex justify-between items-center w-full px-30 py-6 h-24">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 px-1">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 4L9 7V9C9 10.1 9.9 11 11 11V12L8 22H10L12 16L14 22H16L13 12V11C14.1 11 15 10.1 15 9V7.5L21 9Z" fill="#2E90FA"/>
            </svg>
          </div>
          <span className="text-white text-lg font-bold">PAW Pointers</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-9">
          <Link href="/" className="text-blue-500 text-base font-normal">
            Home
          </Link>
          
          <div className="flex items-center gap-1">
            <Link href="/listings" className="text-white text-base font-normal">
              Listings
            </Link>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.99982 9.00001C5.79513 9.00001 5.59034 8.92467 5.43435 8.774L1.43456 4.91686C1.12207 4.61552 1.12207 4.12735 1.43456 3.82601C1.74704 3.52467 2.25327 3.52467 2.56575 3.82601L5.99982 7.13893L9.43464 3.82661C9.74713 3.52527 10.2533 3.52527 10.5658 3.82661C10.8783 4.12795 10.8783 4.61612 10.5658 4.91746L6.56604 8.7746C6.4098 8.92527 6.20481 9.00001 5.99982 9.00001Z" fill="white"/>
            </svg>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-white text-base font-normal">Services</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.99982 9.00001C5.79513 9.00001 5.59034 8.92467 5.43435 8.774L1.43456 4.91686C1.12207 4.61552 1.12207 4.12735 1.43456 3.82601C1.74704 3.52467 2.25327 3.52467 2.56575 3.82601L5.99982 7.13893L9.43464 3.82661C9.74713 3.52527 10.2533 3.52527 10.5658 3.82661C10.8783 4.12795 10.8783 4.61612 10.5658 4.91746L6.56604 8.7746C6.4098 8.92527 6.20481 9.00001 5.99982 9.00001Z" fill="white"/>
            </svg>
          </div>

          <Link href="/blog" className="text-white text-base font-normal">
            Blog
          </Link>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <div className="relative">
              <button 
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                className="flex justify-center items-center w-8 h-8 border border-white rounded-full bg-transparent hover:bg-white/10 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.2281 3.70941V4.30941C13.5744 4.77285 15.3422 6.79066 15.3422 9.20941V9.79691C15.3422 11.2688 15.8982 12.6844 16.901 13.7844L17.1389 14.0438C17.4088 14.3407 17.4763 14.7594 17.3092 15.1188C17.1421 15.4782 16.7757 15.7094 16.3707 15.7094H4.02851C3.62353 15.7094 3.25619 15.4782 3.09028 15.1188C2.92436 14.7594 2.99073 14.3407 3.25982 14.0438L3.49818 13.7844C4.50227 12.6844 5.05702 11.2688 5.05702 9.79691V9.20941C5.05702 6.79066 6.79585 4.77285 9.17108 4.30941V3.70941C9.17108 3.15722 9.6307 2.70941 10.1996 2.70941C10.7685 2.70941 11.2281 3.15722 11.2281 3.70941ZM10.1996 18.7094C9.6532 18.7094 9.1293 18.5 8.7436 18.125C8.35791 17.75 8.14256 17.2125 8.14256 16.7094H12.2566C12.2566 17.2125 12.0413 17.75 11.6556 18.125C11.2699 18.5 10.7171 18.7094 10.1996 18.7094Z" fill="white"/>
                </svg>
              </button>
              {/* Notification badge */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-error-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-medium">2</span>
              </div>
            </div>

            {/* User Avatar */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-8 h-8 rounded-full border border-white bg-gray-400"></div>
                {/* Online indicator */}
                <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-success-500 border border-white rounded-full"></div>
              </div>
              <span className="text-white text-base font-normal">My Account</span>
            </div>

            {/* Add Listing Button */}
            <button className="flex items-center gap-2.5 px-4 py-2.5 border border-white rounded-lg bg-transparent hover:bg-white/10 transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4001 8.00001C14.4001 8.54431 13.9592 8.98493 13.4155 8.98493H8.98471V13.4157C8.98471 13.96 8.54379 14.4 8.0001 14.4C7.45641 14.4 7.01548 13.96 7.01548 13.4157V8.98493H2.58471C2.04102 8.98493 1.6001 8.54431 1.6001 8.00001C1.6001 7.4557 2.04102 7.0157 2.58471 7.0157H7.01548V2.58493C7.01548 2.04062 7.45641 1.60001 8.0001 1.60001C8.54379 1.60001 8.98471 2.04062 8.98471 2.58493V7.0157H13.4155C13.9601 7.01539 14.4001 7.45539 14.4001 8.00001Z" fill="white"/>
              </svg>
              <span className="text-white text-base font-normal">Add Listing</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
