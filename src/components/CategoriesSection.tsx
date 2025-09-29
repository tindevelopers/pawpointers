import Link from 'next/link';

interface CategoryCardProps {
  title: string;
  listingCount: number;
  imageSrc: string;
  href: string;
}

function CategoryCard({ title, listingCount, imageSrc, href }: CategoryCardProps) {
  return (
    <Link href={href} className="block w-[380px] h-[240px] md:h-[260px] rounded-lg overflow-hidden relative group cursor-pointer">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{
          backgroundImage: `linear-gradient(270deg, rgba(0, 0, 0, 0.00) 40.79%, rgba(0, 0, 0, 0.80) 100%), url(${imageSrc})`
        }}
      />
      
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0) 100%)'
        }}
      />

      {/* Content */}
      <div className="absolute bottom-6 left-6 flex flex-col gap-1 bg-black/35 px-3 py-2 rounded-md backdrop-blur-[2px]">
        <h3 className="text-white text-2xl font-semibold leading-tight drop-shadow-lg">{title}</h3>
        <p className="text-grey-200 text-base drop-shadow">{listingCount} Providers</p>
      </div>
    </Link>
  );
}

export default function CategoriesSection() {
  const categories = [
    {
      title: "Pet Grooming",
      listingCount: 45,
      imageSrc: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500&h=300&fit=crop",
      href: "/listings?category=grooming"
    },
    {
      title: "Veterinary Care",
      listingCount: 32,
      imageSrc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      href: "/listings?category=veterinary"
    },
    {
      title: "Dog Walking",
      listingCount: 67,
      imageSrc: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&h=300&fit=crop",
      href: "/listings?category=walking"
    },
    {
      title: "Pet Training",
      listingCount: 28,
      imageSrc: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=500&h=300&fit=crop",
      href: "/listings?category=training"
    },
    {
      title: "Pet Sitting",
      listingCount: 54,
      imageSrc: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&h=300&fit=crop",
      href: "/listings?category=sitting"
    },
    {
      title: "Pet Boarding",
      listingCount: 19,
      imageSrc: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=500&h=300&fit=crop",
      href: "/listings?category=boarding"
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-10 py-25 px-30 bg-white">
      {/* Section Header */}
      <div className="flex justify-between items-center w-full max-w-[1200px]">
        <div className="flex flex-col gap-2">
          <h2 className="text-grey-800 text-3xl font-medium">
            Explore by Service Types
          </h2>
          <p className="text-grey-500 text-base leading-relaxed">
            Find trusted pet care professionals in your area
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

      {/* Categories Grid */}
      <div className="flex flex-wrap justify-center gap-7.5 max-w-[1200px]">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            listingCount={category.listingCount}
            imageSrc={category.imageSrc}
            href={category.href}
          />
        ))}
      </div>
    </section>
  );
}
