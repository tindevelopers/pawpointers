import Link from 'next/link';

interface AreaCardProps {
  cityName: string;
  listingCount: number;
  imageSrc: string;
  href: string;
}

function AreaCard({ cityName, listingCount, imageSrc, href }: AreaCardProps) {
  return (
    <Link href={href} className="block w-[277px] h-[277px] rounded-lg overflow-hidden relative group cursor-pointer">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 46.39%, rgba(0, 0, 0, 0.80) 100%), url(${imageSrc})`
        }}
      />
      
      {/* Bottom Gradient */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[107px] rounded-lg"
        style={{
          background: 'linear-gradient(2deg, #000 1.62%, rgba(0, 0, 0, 0.00) 98.38%)'
        }}
      />

      {/* Content */}
      <div className="absolute bottom-6 left-6 flex flex-col gap-1 w-[151px]">
        <div className="flex items-center gap-1">
          {/* Location Icon */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.25938 17.6405C7.62813 15.629 4 10.7539 4 8.01557C4 4.69322 6.68625 2 10 2C13.3125 2 16 4.69322 16 8.01557C16 10.7539 12.3438 15.629 10.7406 17.6405C10.3562 18.1198 9.64375 18.1198 9.25938 17.6405ZM10 10.0208C11.1031 10.0208 12 9.12155 12 8.01557C12 6.90958 11.1031 6.01038 10 6.01038C8.89687 6.01038 8 6.90958 8 8.01557C8 9.12155 8.89687 10.0208 10 10.0208Z" fill="#F79009"/>
          </svg>
          <h3 className="text-white text-lg font-semibold">{cityName}</h3>
        </div>
        <p className="text-grey-300 text-sm">{listingCount} Providers available</p>
      </div>
    </Link>
  );
}

export default function ListingsByAreaSection() {
  const areas: AreaCardProps[] = [
    {
      cityName: "New York",
      listingCount: 142,
      imageSrc: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500&h=500&fit=crop",
      href: "/listings?area=new-york"
    },
    {
      cityName: "Los Angeles", 
      listingCount: 89,
      imageSrc: "https://images.unsplash.com/photo-1444927714506-8492d94b5ba0?w=500&h=500&fit=crop",
      href: "/listings?area=los-angeles"
    },
    {
      cityName: "Chicago",
      listingCount: 76,
      imageSrc: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?w=500&h=500&fit=crop",
      href: "/listings?area=chicago"
    },
    {
      cityName: "Miami",
      listingCount: 54,
      imageSrc: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop",
      href: "/listings?area=miami"
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-10 py-25 px-30 bg-white">
      {/* Section Header */}
      <div className="flex justify-between items-center w-full max-w-[1200px]">
        <div className="flex flex-col gap-2">
          <h2 className="text-grey-800 text-3xl font-medium">
            Providers by Area
          </h2>
          <p className="text-grey-500 text-base leading-relaxed">
            Find pet care professionals in major cities
          </p>
        </div>
        
        {/* Explore More Button */}
        <Link href="/areas" className="flex items-center gap-1 hover:gap-2 transition-all">
          <span className="text-grey-500 text-base">Explore More</span>
          <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4679 15.2524C12.321 15.1337 12.2492 14.9431 12.2492 14.7494C12.2492 14.5556 12.3224 14.3656 12.4689 14.2191L15.4395 11.2496H2.74994C2.33591 11.2496 2 10.9122 2 10.4716C2 10.0841 2.33591 9.74976 2.74994 9.74976H15.4395L12.4701 6.78031C12.1771 6.48736 12.1771 6.01287 12.4701 5.71977C12.763 5.42667 13.2375 5.42682 13.5306 5.71977L17.7803 9.96943C18.0732 10.2624 18.0732 10.7369 17.7803 11.03L13.5306 15.2796C13.2366 15.5712 12.7616 15.5712 12.4679 15.2524Z" fill="#667085"/>
          </svg>
        </Link>
      </div>

      {/* Areas Grid */}
      <div className="flex justify-center gap-7.5 flex-wrap max-w-[1200px]">
        {areas.map((area, index) => (
          <AreaCard
            key={index}
            cityName={area.cityName}
            listingCount={area.listingCount}
            imageSrc={area.imageSrc}
            href={area.href}
          />
        ))}
      </div>
    </section>
  );
}
