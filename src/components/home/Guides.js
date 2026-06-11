'use client';

import Link from 'next/link';

export default function Guides({ posts, loading }) {
  return (
    <section id="resources" className="py-24 px-6 bg-[#faf8f2]">
      <div className="max-w-7xl mx-auto text-center">
        
        <div className="mb-16">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#1a7f6e]">
            RESOURCES
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#181e4b] mt-3">
            Guides, tips & updates
          </h2>
          <p className="text-[15px] sm:text-base text-gray-500 font-medium mt-4 max-w-2xl mx-auto leading-relaxed">
            Helpful articles for students and travellers — updated regularly. Have a question? Reach out anytime.
          </p>
        </div>

        {loading || posts.length === 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white border border-gray-150 rounded-3xl overflow-hidden animate-pulse flex flex-col justify-between h-[420px]">
                <div>
                  <div className="h-48 bg-gray-100 w-full" />
                  <div className="p-6 flex flex-col gap-4 text-left">
                    <div className="h-5 bg-gray-100 rounded w-1/4" />
                    <div className="h-7 bg-gray-100 rounded w-3/4" />
                    <div className="h-12 bg-gray-100 rounded w-full" />
                  </div>
                </div>
                <div className="p-6 pt-0 text-left">
                  <div className="h-4 bg-gray-100 rounded w-1/3" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {posts.map((post) => {
              return (
                <article 
                  key={post.id}
                  className="bg-white rounded-3xl border border-gray-150 overflow-hidden flex flex-col justify-between text-left shadow-lg shadow-black/[0.01] hover:shadow-xl hover:shadow-black/[0.02] hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    {/* Flush Image from Database */}
                    {post.featured_image && (
                      <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                        <img 
                          src={post.featured_image} 
                          alt={post.title} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    )}
                    
                    <div className="p-6 pb-4">
                      <span className="inline-block bg-[#e6f4f1] text-[#1a7f6e] text-[10px] font-bold tracking-wider px-3 py-1 rounded-full mb-3 uppercase">
                        {post.category}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#181e4b] line-clamp-2 leading-snug mb-3">
                        {post.title}
                      </h3>
                      <p className="text-[13px] text-gray-500 font-medium leading-relaxed line-clamp-3 mb-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs text-[#1a7f6e] hover:text-[#135d51] font-bold uppercase tracking-wider transition-colors duration-200"
                    >
                      Read more &rarr;
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
