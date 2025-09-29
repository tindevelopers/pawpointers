'use client';

import Link from 'next/link';

interface BlogPostProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  commentCount: number;
  shareCount: number;
  imageSrc: string;
  featured?: boolean;
}

function BlogCard({ post }: { post: BlogPostProps }) {
  return (
    <Link href={`/blog/${post.id}`} className="block w-[380px] h-[460px] bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
      {/* Featured Image */}
      <div 
        className="w-full h-[249px] bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
        style={{ backgroundImage: `url(${post.imageSrc})` }}
      />

      {/* Content */}
      <div className="p-8 flex flex-col gap-7 h-[211px]">
        {/* Article Content */}
        <div className="flex flex-col gap-4">
          <h3 className={`text-2xl font-semibold leading-tight line-clamp-2 ${post.featured ? 'text-blue-500' : 'text-grey-700'}`}>
            {post.title}
          </h3>
          <p className="text-grey-500 text-sm leading-6 line-clamp-2">
            {post.excerpt}
          </p>
        </div>

        {/* Meta Info */}
        <div className="flex justify-between items-center mt-auto">
          <span className="text-grey-500 text-sm">{post.date}</span>
          
          <div className="flex items-center gap-9">
            {/* Comments */}
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7777 6.49983H7.27794C6.86545 6.49983 6.52797 6.83731 6.52797 7.2498C6.52797 7.66228 6.86545 7.99977 7.27794 7.99977H13.7777C14.1933 7.99977 14.5277 7.6654 14.5277 7.2498C14.5277 6.83419 14.1933 6.49983 13.7777 6.49983ZM10.7778 9.49971H7.27794C6.86545 9.49971 6.52797 9.8372 6.52797 10.2497C6.52797 10.6622 6.86545 10.9997 7.27794 10.9997H10.7778C11.1934 10.9997 11.5278 10.6653 11.5278 10.2497C11.5278 9.83407 11.1934 9.49971 10.7778 9.49971ZM16.4995 2H4.49992C3.3984 2 2.5 2.8984 2.5 3.9718V12.9433C2.5 14.0448 3.3984 14.9151 4.49992 14.9151H7.4998V17.5119C7.4998 17.8193 7.84417 17.9978 8.09728 17.815L12.0003 14.887H16.5001C17.6016 14.887 18.5 13.9886 18.5 12.9152V3.9718C18.4994 2.8984 17.6275 2 16.4995 2ZM17.0276 12.9996C17.0276 13.273 16.801 13.4996 16.5276 13.4996H11.5278L9.02787 15.3745V13.4996H4.52805C4.25462 13.4996 4.02807 13.273 4.02807 12.9996V3.99992C4.02807 3.7265 4.25462 3.49994 4.52805 3.49994H16.5276C16.801 3.49994 17.0276 3.7265 17.0276 3.99992V12.9996Z" fill={post.featured ? "#2E90FA" : "#667085"}/>
              </svg>
              <span className="text-grey-500 text-sm">{post.commentCount}</span>
            </div>

            {/* Shares */}
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5 5.42857C18.5 7.32143 16.9643 8.85714 15.0714 8.85714C14.0393 8.85714 13.1143 8.4 12.4857 7.67857L9.28214 9.28214C9.33214 9.51429 9.325 9.75357 9.325 9.96786C9.325 10.2464 9.33214 10.4857 9.28214 10.7179L12.4857 12.2893C13.1143 11.6 14.0393 11.1107 15.0714 11.1107C16.9643 11.1107 18.5 12.6464 18.5 14.5714C18.5 16.4643 16.9643 18 15.0714 18C13.1464 18 11.6429 16.4643 11.6429 14.5714C11.6429 14.325 11.6679 14.0857 11.7179 13.8536L8.51429 12.25C7.88571 12.9714 6.96071 13.4286 5.92857 13.4286C4.035 13.4286 2.5 11.8929 2.5 9.96786C2.5 8.075 4.035 6.53929 5.92857 6.53929C6.96071 6.53929 7.88571 7.02857 8.51429 7.71786L11.7179 6.14643C11.6679 5.91429 11.6429 5.675 11.6429 5.42857C11.6429 3.535 13.1464 2 15.0714 2C16.9643 2 18.5 3.535 18.5 5.42857ZM5.89643 11.7143C6.875 11.7143 7.61071 10.9464 7.61071 10C7.61071 9.05357 6.875 8.28571 5.89643 8.28571C4.98179 8.28571 4.18214 9.05357 4.18214 10C4.18214 10.9464 4.98179 11.7143 5.89643 11.7143ZM15.0714 3.71429C14.125 3.71429 13.3571 4.48214 13.3571 5.42857C13.3571 6.375 14.125 7.14286 15.0714 7.14286C16.0179 7.14286 16.7857 6.375 16.7857 5.42857C16.7857 4.48214 16.0179 3.71429 15.0714 3.71429ZM15.0714 16.2857C16.0179 16.2857 16.7857 15.5179 16.7857 14.5714C16.7857 13.625 16.0179 12.8571 15.0714 12.8571C14.125 12.8571 13.3571 13.625 13.3571 14.5714C13.3571 15.5179 14.125 16.2857 15.0714 16.2857Z" fill={post.featured ? "#2E90FA" : "#667085"}/>
              </svg>
              <span className="text-grey-500 text-sm">{post.shareCount}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function BlogSection() {
  const blogPosts: BlogPostProps[] = [
    {
      id: '1',
      title: 'Top 10 Pet Training Tips for New Owners',
      excerpt: 'Essential training advice to help you and your pet build a strong foundation of trust and communication.',
      date: '15 Jan, 2024',
      commentCount: 245,
      shareCount: 189,
      imageSrc: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=500&h=300&fit=crop'
    },
    {
      id: '2',
      title: 'Finding the Right Veterinarian for Your Pet',
      excerpt: 'A comprehensive guide to choosing a veterinary care provider that meets your pet\'s specific health needs.',
      date: '12 Jan, 2024',
      commentCount: 156,
      shareCount: 203,
      imageSrc: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop',
      featured: true
    },
    {
      id: '3',
      title: 'Seasonal Pet Care: Winter Safety Guide',
      excerpt: 'Keep your furry friends safe and comfortable during the cold months with these essential winter care tips.',
      date: '08 Jan, 2024',
      commentCount: 87,
      shareCount: 124,
      imageSrc: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&h=300&fit=crop'
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-10 py-25 px-30 bg-white">
      {/* Section Header */}
      <div className="flex justify-between items-center w-full max-w-[1200px] px-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-grey-800 text-3xl font-medium">
            Pet Care Insights
          </h2>
          <p className="text-grey-500 text-base leading-relaxed">
            Expert advice and tips for better pet care
          </p>
        </div>
        
        {/* Explore More Button */}
        <Link href="/blog" className="flex items-center gap-1 hover:gap-2 transition-all">
          <span className="text-grey-500 text-base">Explore More</span>
          <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4679 15.2524C12.321 15.1337 12.2492 14.9431 12.2492 14.7494C12.2492 14.5556 12.3224 14.3656 12.4689 14.2191L15.4395 11.2496H2.74994C2.33591 11.2496 2 10.9122 2 10.4716C2 10.0841 2.33591 9.74976 2.74994 9.74976H15.4395L12.4701 6.78031C12.1771 6.48736 12.1771 6.01287 12.4701 5.71977C12.763 5.42667 13.2375 5.42682 13.5306 5.71977L17.7803 9.96943C18.0732 10.2624 18.0732 10.7369 17.7803 11.03L13.5306 15.2796C13.2366 15.5712 12.7616 15.5712 12.4679 15.2524Z" fill="#667085"/>
          </svg>
        </Link>
      </div>

      {/* Blog Posts Grid */}
      <div className="flex flex-col items-center gap-10">
        <div className="flex justify-center gap-7.5 flex-wrap max-w-[1200px]">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-96">
          <button className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.03861 17.7029C9.21484 17.5604 9.30109 17.3317 9.30109 17.0992C9.30109 16.8668 9.21319 16.6388 9.03745 16.4629L5.47265 12.8996H20.7002C21.197 12.8996 21.6001 12.4946 21.6001 11.9659C21.6001 11.5009 21.197 11.0997 20.7002 11.0997H5.47265L9.03598 7.53637C9.38752 7.18484 9.38752 6.61544 9.03598 6.26372C8.68445 5.912 8.11506 5.91219 7.76334 6.26372L2.66375 11.3633C2.31221 11.7149 2.31221 12.2842 2.66375 12.636L7.76334 17.7356C8.11618 18.0854 8.68614 18.0854 9.03861 17.7029Z" fill="#2E90FA"/>
            </svg>
          </button>
          
          <button className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.9614 17.7029C14.7852 17.5604 14.6989 17.3317 14.6989 17.0992C14.6989 16.8668 14.7868 16.6388 14.9626 16.4629L18.5274 12.8996L3.29983 12.8996C2.80299 12.8996 2.3999 12.4946 2.3999 11.9659C2.3999 11.5009 2.80299 11.0997 3.29983 11.0997L18.5274 11.0997L14.964 7.53637C14.6125 7.18484 14.6125 6.61544 14.964 6.26372C15.3155 5.912 15.8849 5.91219 16.2367 6.26372L21.3363 11.3633C21.6878 11.7149 21.6878 12.2842 21.3363 12.636L16.2367 17.7356C15.8838 18.0854 15.3139 18.0854 14.9614 17.7029Z" fill="#2E90FA"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
