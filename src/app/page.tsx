import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoriesSection from '@/components/CategoriesSection';
import TrendingSection from '@/components/TrendingSection';
import ListingsByAreaSection from '@/components/ListingsByAreaSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogSection from '@/components/BlogSection';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Categories Section */}
      <CategoriesSection />
      
      {/* Trending/Featured Providers Section */}
      <TrendingSection />
      
      {/* Listings by Area Section */}
      <ListingsByAreaSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Blog Section */}
      <BlogSection />
      
      {/* Logo Partners Section - Using placeholder logos */}
      <section className="flex justify-center items-center gap-20 py-25 px-30 opacity-60 bg-white">
        <div className="w-[175px] h-[79px] bg-grey-100 rounded-lg flex items-center justify-center">
          <span className="text-grey-400 text-sm font-medium">Partner Logo</span>
        </div>
        <div className="w-[175px] h-[36px] bg-grey-100 rounded-lg flex items-center justify-center">
          <span className="text-grey-400 text-sm font-medium">Partner Logo</span>
        </div>
        <div className="w-[175px] h-[60px] bg-grey-100 rounded-lg flex items-center justify-center">
          <span className="text-grey-400 text-sm font-medium">Partner Logo</span>
        </div>
        <div className="w-[175px] h-[60px] bg-grey-100 rounded-lg flex items-center justify-center">
          <span className="text-grey-400 text-sm font-medium">Partner Logo</span>
        </div>
        <div className="w-[175px] h-[63px] bg-grey-100 rounded-lg flex items-center justify-center">
          <span className="text-grey-400 text-sm font-medium">Partner Logo</span>
        </div>
      </section>
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
