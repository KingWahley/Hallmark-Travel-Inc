'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Compass, Search, Calendar, User, ArrowRight, BookOpen, ChevronRight } from 'lucide-react';
import { getBlogPosts } from '@/lib/db';

const formatDateUTC = (dateStr) => {
  if (!dateStr) return 'Draft';
  const d = new Date(dateStr);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
};

export default function BlogIndex() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Filters
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getBlogPosts(false);
        setPosts(data);
        setFilteredPosts(data);
      } catch (err) {
        console.error("Failed to load blog posts:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    let result = posts;

    // Filter by Category
    if (activeCategory !== 'All') {
      result = result.filter(post => post.category === activeCategory);
    }

    // Filter by Search Query
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    setFilteredPosts(result);
  }, [search, activeCategory, posts]);

  const categories = ['All', 'Travel & Relocation', 'Study & Relocation'];

  return (
    <div className="relative overflow-hidden bg-warm-gradient text-[#181e4b] min-h-screen py-24">
      
      {/* Ambient background blob decorators */}
      <div className="absolute top-[5%] -left-20 w-[600px] h-[600px] bg-blob-orange rounded-full pointer-events-none animate-drift-slow" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-blob-purple rounded-full pointer-events-none animate-drift" />
      <div className="absolute bottom-[5%] left-[10%] w-[500px] h-[500px] bg-blob-yellow rounded-full pointer-events-none animate-drift-slow" />

      {/* Decorative Jadoo-style dot grid */}
      <div className="absolute top-24 right-12 w-32 h-32 bg-grid-dots opacity-20 pointer-events-none select-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-accent/10 border border-orange-accent/20 text-orange-accent text-[11px] uppercase tracking-[0.2em] font-black mb-6">
            <BookOpen className="w-4 h-4 animate-pulse" />
            Knowledge Hub
          </div>
          <h1 className="font-serif font-black text-4xl sm:text-6xl text-[#181e4b] leading-[1.1] tracking-tight">
            Relocation & <br className="sm:hidden" />
            <span className="brush-highlight text-orange-accent">Travel Blueprints</span>
          </h1>
          <p className="text-[15px] leading-relaxed text-[#5e6282] font-semibold max-w-2xl mx-auto mt-6">
            Browse through our expert migration resources, licensing pipelines, and global travel advisories to guide your next international move.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="max-w-4xl mx-auto mb-16 flex flex-col gap-6 items-center justify-center glass-panel p-6 rounded-[28px] border border-white shadow-jadoo relative z-10">
          {/* Top: Tags (Categories) in a straight line */}
          <div className="w-full flex items-center justify-start md:justify-center overflow-x-auto pb-2 md:pb-0 gap-3 scrollbar-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-xs font-sans font-black uppercase tracking-widest rounded-xl border transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  activeCategory === cat 
                    ? 'bg-orange-accent border-orange-accent text-white font-bold shadow-lg shadow-orange-accent/20'
                    : 'bg-white/40 border-gray-100/80 hover:border-orange-accent/40 text-[#5e6282] hover:text-[#181e4b] hover:bg-white/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Bottom: Search Box centered under tags */}
          <div className="relative max-w-md w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text"
              placeholder="Search guides, tags, destination..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-100 rounded-xl text-xs text-[#181e4b] font-medium focus:ring-2 focus:ring-orange-accent focus:outline-none shadow-inner placeholder-gray-400/85"
            />
          </div>
        </div>

        {/* Blog content section */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white/60 border border-white rounded-[32px] h-96 shadow-jadoo animate-pulse flex items-center justify-center">
                <Compass className="w-8 h-8 text-orange-accent/30 animate-spin" />
              </div>
            ))}
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-[38px] border border-gray-100 shadow-jadoo max-w-2xl mx-auto flex flex-col items-center gap-5 relative z-10 px-8">
            <div className="w-16 h-16 rounded-full bg-orange-accent/10 flex items-center justify-center text-orange-accent">
              <Compass className="w-8 h-8 animate-spin" />
            </div>
            <h3 className="font-serif font-black text-2xl text-[#181e4b]">No Blueprints Found</h3>
            <p className="text-sm leading-relaxed text-[#5e6282] font-semibold max-w-md">
              We couldn't find any relocation resources matching "{search}". Try searching for generic items like "Nursing", "MBBS", or "Culinary".
            </p>
            <button
              onClick={() => { setSearch(''); setActiveCategory('All'); }}
              className="mt-2 px-6 py-3 bg-gold-accent hover:bg-amber-600 text-white text-xs font-sans font-black uppercase tracking-widest rounded-xl transition-all duration-300 shadow-md shadow-gold-accent/25"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-12 relative z-10">
            
            {/* 1. Featured Spotlight Hero Card */}
            {filteredPosts[0] && (
              (() => {
                const post = filteredPosts[0];
                const postDate = formatDateUTC(post.published_at);
                return (
                  <article className="bg-white rounded-[40px] overflow-hidden border border-gray-100/90 shadow-jadoo hover:shadow-jadoo-hover hover:border-white transition-all duration-500 group relative">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                      {/* Left: Image Spotlight */}
                      <div className="lg:col-span-5 relative h-60 sm:h-80 lg:h-auto min-h-[280px] overflow-hidden">
                        <img 
                          src={post.featured_image || "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80"}
                          alt={post.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                        />
                        <div className="absolute top-6 left-6 px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-black rounded-full bg-orange-accent text-white font-sans shadow-lg shadow-orange-accent/25 z-10">
                          Featured Spotlight
                        </div>
                      </div>

                      {/* Right: Rich Typography Editorial */}
                      <div className="lg:col-span-7 p-6 sm:p-8 sm:py-10 flex flex-col justify-between gap-4 text-left">
                        <div className="flex flex-col gap-3">
                          {/* Metadata */}
                          <div className="flex flex-wrap items-center gap-4 text-[10px] text-[#5e6282] font-black uppercase tracking-widest font-sans">
                            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-orange-accent" /> {postDate}</span>
                            <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-gold-accent" /> {post.author}</span>
                          </div>
                          
                          <span className="text-[11px] font-black tracking-[0.25em] text-gold-accent uppercase font-sans mt-1">
                            {post.category}
                          </span>

                          <h2 className="font-serif font-black text-2xl sm:text-3.5xl text-[#181e4b] group-hover:text-orange-accent transition-colors duration-300 leading-tight">
                            {post.title}
                          </h2>
                          
                          <p className="text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#5e6282] font-semibold mt-1">
                            {post.excerpt}
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center justify-between border-t border-gray-100 pt-5 mt-2 gap-4">
                          <Link 
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-2 text-xs text-orange-accent font-sans font-black uppercase tracking-widest hover:underline group-hover:gap-3 transition-all"
                          >
                            Explore Blueprint <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                          </Link>
                          <span className="text-[11px] uppercase font-bold tracking-wider text-gold-accent font-mono bg-gold-accent/10 px-3 py-1 rounded-md">
                            {post.tags?.[0] ? `#${post.tags[0]}` : '#migration'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })()
            )}

            {/* 2. Asymmetrical Content Section (Main Column 2/3 + Bulletins Sidebar 1/3) */}
            {filteredPosts.length > 1 && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-6">
                
                {/* Left Column (2/3 Width) - Staggered Visual Cards */}
                <div className="lg:col-span-8 flex flex-col gap-10">
                  <h3 className="font-serif font-black text-2xl text-[#181e4b] text-left relative inline-block pl-4 border-l-4 border-orange-accent mb-2">
                    Visual Blueprint Deep-Dives
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredPosts.slice(1).filter((_, idx) => idx % 2 === 0).map(post => {
                      const postDate = formatDateUTC(post.published_at);
                      return (
                        <article 
                          key={post.id}
                          className="bg-white rounded-[32px] overflow-hidden border border-gray-100/80 hover:border-white shadow-jadoo hover:shadow-jadoo-hover transition-all duration-500 flex flex-col justify-between group relative text-left"
                        >
                          <div className="relative h-56 overflow-hidden">
                            <img 
                              src={post.featured_image || "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80"}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-4 left-4 px-3 py-1 text-[9px] uppercase tracking-[0.15em] font-black rounded-full bg-orange-accent text-white font-sans shadow-md">
                              {post.category}
                            </div>
                          </div>

                          <div className="p-8 flex-grow flex flex-col justify-between gap-6">
                            <div className="flex flex-col gap-3">
                              {/* Meta details */}
                              <div className="flex items-center gap-4 text-[10px] text-[#5e6282] font-black uppercase tracking-widest font-sans">
                                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-orange-accent" /> {postDate}</span>
                                <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-gold-accent" /> {post.author}</span>
                              </div>
                              
                              <h4 className="font-serif font-black text-xl text-[#181e4b] group-hover:text-orange-accent transition-colors duration-300 line-clamp-2 leading-snug">
                                {post.title}
                              </h4>
                              <p className="text-[13px] leading-relaxed text-[#5e6282] font-semibold line-clamp-3">
                                {post.excerpt}
                              </p>
                            </div>

                            <div className="flex items-center justify-between border-t border-gray-100 pt-5 mt-2">
                              <Link 
                                href={`/blog/${post.slug}`}
                                className="flex items-center gap-1.5 text-xs text-orange-accent font-sans font-black uppercase tracking-widest hover:underline"
                              >
                                Read Blueprint <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                              </Link>
                              <span className="text-[10px] uppercase font-bold tracking-wider text-gold-accent font-mono">
                                {post.tags?.[0] ? `#${post.tags[0]}` : ''}
                              </span>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>

                {/* Right Column (1/3 Width) - Typographic Bulletin List + Booking CTA */}
                <div className="lg:col-span-4 flex flex-col gap-8">
                  <h3 className="font-serif font-black text-2xl text-[#181e4b] text-left relative inline-block pl-4 border-l-4 border-gold-accent mb-2">
                    Must-Read Bulletins
                  </h3>
                  
                  {/* Curated serialized typographic cards */}
                  <div className="flex flex-col gap-6 bg-white/40 border border-white/60 p-6 sm:p-8 rounded-[38px] shadow-jadoo">
                    {filteredPosts.slice(1).filter((_, idx) => idx % 2 !== 0).map((post, index) => {
                      const counter = String(index + 1).padStart(2, '0');
                      const postDate = formatDateUTC(post.published_at);
                      return (
                        <article 
                          key={post.id} 
                          className="flex gap-4 items-start pb-6 border-b border-gray-100/80 last:border-b-0 last:pb-0 group text-left"
                        >
                          {/* Large Elegant Index */}
                          <span className="font-serif font-black text-3xl sm:text-4xl text-orange-accent/80 group-hover:text-orange-accent transition-colors select-none leading-none pt-1">
                            {counter}
                          </span>
                          
                          <div className="flex flex-col gap-1.5">
                            <span className="text-[9px] font-black uppercase tracking-widest text-[#5e6282]">
                              {post.category} • {postDate}
                            </span>
                            <Link href={`/blog/${post.slug}`}>
                              <h4 className="font-serif font-black text-[15px] sm:text-[16px] text-[#181e4b] hover:text-orange-accent transition-colors duration-300 leading-snug line-clamp-2">
                                {post.title}
                              </h4>
                            </Link>
                            <Link 
                              href={`/blog/${post.slug}`}
                              className="text-[10px] font-black uppercase tracking-widest text-gold-accent hover:underline flex items-center gap-1 mt-1"
                            >
                              Quick Read <ChevronRight className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                          </div>
                        </article>
                      );
                    })}

                    {/* Fallback if odd items are empty */}
                    {filteredPosts.slice(1).filter((_, idx) => idx % 2 !== 0).length === 0 && (
                      <p className="text-xs font-semibold text-[#5e6282] italic">More bulletins being drafted...</p>
                    )}
                  </div>

                  {/* Travel Relocation Lead Generation Funnel CTA Card */}
                  <div className="relative overflow-hidden bg-[#181e4b] rounded-[36px] p-8 text-white text-left shadow-jadoo-hover group hover:scale-[1.01] transition-transform duration-300">
                    {/* Ambient glow blobs */}
                    <div className="absolute top-[-20%] right-[-20%] w-32 h-32 bg-orange-accent rounded-full blur-2xl opacity-40 pointer-events-none" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-32 h-32 bg-gold-accent rounded-full blur-2xl opacity-20 pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col gap-5">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-orange-accent shadow-inner">
                        <Compass className="w-5 h-5 animate-pulse" />
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <h4 className="font-serif font-black text-xl leading-tight">
                          Need a Tailored Immigration Path?
                        </h4>
                        <p className="text-xs text-white/80 leading-relaxed font-medium">
                          Our visa pathways and documentation desks in Manila & Owerri offer personalized consultations to finalize your global relocation.
                        </p>
                      </div>

                      <Link 
                        href="/contact" 
                        className="w-full py-3 px-4 bg-orange-accent hover:bg-orange-600 text-white text-xs font-sans font-black uppercase tracking-widest rounded-xl text-center shadow-lg shadow-orange-accent/25 transition-all group-hover:scale-105"
                      >
                        Book Relocation Desk
                      </Link>
                    </div>
                  </div>

                </div>

              </div>
            )}
            
          </div>
        )}

      </div>
    </div>
  );
}
