'use client';

import { useState } from 'react';

interface TestimonialProps {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  avatar: string;
  isActive?: boolean;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-4"
        >
          <path
            d="M12.1782 5.62422L16.3141 6.27455C16.6567 6.32669 16.9445 6.58437 17.0538 6.93714C17.1632 7.29298 17.074 7.6795 16.8265 7.94331L13.8274 11.0784L14.5354 15.5754C14.593 15.9436 14.4519 16.3178 14.1641 16.5356C13.8792 16.7534 13.5021 16.781 13.1942 16.6061L9.49854 14.5049L5.80579 16.6061C5.49494 16.781 5.11789 16.7534 4.83295 16.5356C4.54801 16.3178 4.40409 15.9436 4.46454 15.5754L5.17258 11.0784L2.1729 7.94331C1.92509 7.6795 1.83701 7.29298 1.94581 6.93714C2.05432 6.58437 2.34128 6.32669 2.68638 6.27455L6.81892 5.62422L8.67249 1.56489C8.82503 1.22697 9.14739 1.01245 9.49854 1.01245C9.85256 1.01245 10.1749 1.22697 10.3275 1.56489L12.1782 5.62422Z"
            fill={star <= rating ? "#FFD32D" : "#E4E7EC"}
          />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: TestimonialProps }) {
  return (
    <div className={`w-[380px] bg-white rounded-lg shadow-lg overflow-hidden ${testimonial.isActive ? 'h-[244px] border-b-4 border-blue-500' : 'h-[236px]'}`}>
      <div className="p-6 flex flex-col gap-6 h-full">
        {/* Review Content */}
        <div className="flex flex-col gap-4">
          <p className={`text-justify text-sm leading-6 font-medium ${testimonial.isActive ? 'text-grey-700' : 'text-grey-500'}`}>
            {testimonial.review}
          </p>
          
          {/* Star Rating */}
          <StarRating rating={testimonial.rating} />
        </div>

        {/* User Info */}
        <div className="flex items-center gap-5 mt-auto">
          <div 
            className="w-[60px] h-[60px] rounded-full border-2 border-white shadow-md bg-cover bg-center"
            style={{ backgroundImage: `url(${testimonial.avatar})` }}
          />
          <div className="flex flex-col gap-1">
            <h4 className={`text-lg font-semibold ${testimonial.isActive ? 'text-blue-500' : 'text-grey-700'}`}>
              {testimonial.name}
            </h4>
            <p className="text-grey-500 text-sm leading-6">
              {testimonial.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(1);

  const testimonials: TestimonialProps[] = [
    {
      id: '1',
      name: 'Sarah Martinez',
      location: 'California, USA',
      rating: 5,
      review: 'Outstanding service! Found the perfect groomer for my Golden Retriever through PAW Pointers. The booking process was seamless and the quality exceeded expectations.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop',
      isActive: activeTestimonial === 1
    },
    {
      id: '2', 
      name: 'Mike Johnson',
      location: 'Texas, USA',
      rating: 4,
      review: 'Great platform for finding reliable pet services. I was able to connect with a certified dog trainer who helped with my puppy\'s behavioral training. Highly recommend!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      isActive: activeTestimonial === 2
    },
    {
      id: '3',
      name: 'Emily Davis',
      location: 'New York, USA', 
      rating: 5,
      review: 'PAW Pointers made finding a trusted veterinarian so much easier. The reviews and verification system gave me confidence in my choice. My cat received excellent care.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      isActive: activeTestimonial === 3
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-10 py-25 px-30 bg-white">
      {/* Section Header */}
      <div className="flex justify-between items-center w-full max-w-[1200px]">
        <div className="flex flex-col gap-2">
          <h2 className="text-grey-800 text-3xl font-medium">
            What Pet Owners Say
          </h2>
          <p className="text-grey-500 text-base leading-relaxed">
            Real experiences from our community of pet lovers
          </p>
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setActiveTestimonial(Math.max(0, activeTestimonial - 1))}
            className="flex items-center justify-center w-12 h-12 border border-grey-300 rounded-full shadow-md hover:shadow-lg transition-shadow disabled:opacity-50"
            disabled={activeTestimonial === 0}
          >
            <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.03861 18.2029C9.21484 18.0604 9.30109 17.8317 9.30109 17.5992C9.30109 17.3668 9.21319 17.1388 9.03745 16.9629L5.47265 13.3996H20.7002C21.197 13.3996 21.6001 12.9946 21.6001 12.4659C21.6001 12.0009 21.197 11.5997 20.7002 11.5997H5.47265L9.03598 8.03637C9.38752 7.68484 9.38752 7.11544 9.03598 6.76372C8.68445 6.412 8.11506 6.41219 7.76334 6.76372L2.66375 11.8633C2.31221 12.2149 2.31221 12.7842 2.66375 13.136L7.76334 18.2356C8.11618 18.5854 8.68614 18.5854 9.03861 18.2029Z" fill="#667085"/>
            </svg>
          </button>
          
          <button 
            onClick={() => setActiveTestimonial(Math.min(testimonials.length - 1, activeTestimonial + 1))}
            className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow disabled:opacity-50"
            disabled={activeTestimonial === testimonials.length - 1}
          >
            <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.9614 18.2029C14.7852 18.0604 14.6989 17.8317 14.6989 17.5992C14.6989 17.3668 14.7868 17.1388 14.9626 16.9629L18.5274 13.3996L3.29983 13.3996C2.80299 13.3996 2.3999 12.9946 2.3999 12.4659C2.3999 12.0009 2.80299 11.5997 3.29983 11.5997L18.5274 11.5997L14.964 8.03637C14.6125 7.68484 14.6125 7.11544 14.964 6.76372C15.3155 6.412 15.8849 6.41219 16.2367 6.76372L21.3363 11.8633C21.6878 12.2149 21.6878 12.7842 21.3363 13.136L16.2367 18.2356C15.8838 18.5854 15.3139 18.5854 14.9614 18.2029Z" fill="#2E90FA"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="flex justify-center gap-7.5 max-w-[1200px]">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
          />
        ))}
      </div>
    </section>
  );
}
