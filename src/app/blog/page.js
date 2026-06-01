'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Compass, Search, Calendar, User, ArrowRight, BookOpen, Compass as CompassIcon } from 'lucide-react';
import { getBlogPosts } from '@/lib/db';

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
    <div className="relative min-h-screen py-16">
      {/* Background aesthetic circles */}
      <div className="absolute top-[10%] left-[5%] w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-primary-light/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] uppercase tracking-widest mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            Knowledge Hub
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white">
            Relocation & Travel Blueprints
          </h1>
          <div className="w-12 h-[2px] bg-accent mx-auto mt-4" />
          <p className="text-sm sm:text-base text-foreground/75 font-light leading-relaxed mt-4">
            Browse through our expert migration resources, licensing pipelines, and global travel advisories to guide your next international move.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="max-w-4xl mx-auto mb-12 flex flex-col md:flex-row gap-6 items-stretch md:items-center justify-between bg-card-bg/30 p-4 rounded-2xl border border-card-border/60 backdrop-blur-md">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-display uppercase tracking-widest rounded-lg border transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-accent border-accent text-background font-semibold shadow-md shadow-accent/10'
                    : 'bg-transparent border-card-border/80 hover:border-accent/40 text-foreground/80 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative flex-grow max-w-sm">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
            <input 
              type="text"
              placeholder="Search guides, tags, destination..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-background/80 border border-card-border rounded-xl text-xs text-foreground focus:border-accent focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Blog grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="glass h-80 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-20 glass rounded-2xl border border-card-border max-w-2xl mx-auto flex flex-col items-center gap-4">
            <CompassIcon className="w-12 h-12 text-accent/50 animate-spin" />
            <h3 className="font-display font-semibold text-lg text-white">No Blueprints Found</h3>
            <p className="text-sm text-foreground/60 font-light max-w-md">
              We couldn't find any relocation resources matching "{search}". Try searching for generic items like "Nursing", "MBBS", or "Culinary".
            </p>
            <button
              onClick={() => { setSearch(''); setActiveCategory('All'); }}
              className="mt-2 px-5 py-2 border border-accent/20 hover:bg-accent hover:text-background text-accent text-xs font-display uppercase tracking-widest rounded-lg transition-colors duration-300"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => {
              const postDate = post.published_at ? new Date(post.published_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              }) : 'Draft';

              return (
                <article 
                  key={post.id}
                  className="glass group rounded-2xl overflow-hidden hover:border-accent/20 transition-all duration-300 flex flex-col justify-between shadow-xl shadow-black/10"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.featured_image || "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=400&q=80"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-2.5 py-1 text-[9px] uppercase tracking-wider font-semibold rounded-full bg-accent/90 text-background font-display">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between gap-4 text-left">
                    <div className="flex flex-col gap-2">
                      {/* Meta details */}
                      <div className="flex items-center gap-4 text-[10px] text-foreground/50 font-light mb-1">
                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {postDate}</span>
                        <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {post.author}</span>
                      </div>
                      
                      <h3 className="font-display font-bold text-base text-white group-hover:text-accent transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-xs font-light text-foreground/75 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-card-border/50 pt-4 mt-2">
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="flex items-center gap-1.5 text-xs text-accent font-display font-semibold hover:underline"
                      >
                        Read Blueprint <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <span className="text-[9px] tracking-wide text-foreground/40 font-mono">
                        {post.tags?.[0] ? `#${post.tags[0]}` : ''}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
