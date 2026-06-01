'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  Compass, 
  Plus, 
  Trash2, 
  Edit3, 
  LogOut, 
  Inbox, 
  BookOpen, 
  Search, 
  AlertCircle, 
  CheckCircle, 
  TrendingUp, 
  Mail, 
  Phone,
  Calendar,
  Layers,
  ExternalLink
} from 'lucide-react';
import { 
  getBlogPosts, 
  deleteBlogPost, 
  getInquiries, 
  updateInquiryStatus 
} from '@/lib/db';

export default function AdminDashboard() {
  const router = useRouter();
  
  // App States
  const [activeTab, setActiveTab] = useState('inquiries'); // 'inquiries' or 'blog'
  const [posts, setPosts] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  // Search & Filter States
  const [searchPost, setSearchPost] = useState('');
  const [inquiryFilter, setInquiryFilter] = useState('all'); // 'all', 'new', 'resolved'

  useEffect(() => {
    // Security check - redirect if no session
    const session = sessionStorage.getItem('hallmark_admin_session');
    if (!session) {
      router.push('/admin/login');
      return;
    }

    async function loadData() {
      try {
        const postsData = await getBlogPosts(true); // Include unpublished drafts
        const inquiriesData = await getInquiries();
        
        setPosts(postsData);
        setInquiries(inquiriesData);
      } catch (err) {
        console.error("Failed to load dashboard data:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [router]);

  const handleSignOut = () => {
    sessionStorage.removeItem('hallmark_admin_session');
    router.push('/admin/login');
    router.refresh();
  };

  const handleUpdateInquiryStatus = async (id, newStatus) => {
    try {
      await updateInquiryStatus(id, newStatus);
      // Reload inquiries from local DB helper
      const updated = await getInquiries();
      setInquiries(updated);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeletePost = async (id) => {
    if (!window.confirm("Are you sure you want to permanently delete this blueprint? This action is irreversible.")) return;
    
    try {
      await deleteBlogPost(id);
      setPosts(prev => prev.filter(p => p.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // Filter Logics
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchPost.toLowerCase()) ||
    post.category.toLowerCase().includes(searchPost.toLowerCase())
  );

  const filteredInquiries = inquiries.filter(inq => {
    if (inquiryFilter === 'all') return true;
    return inq.status === inquiryFilter;
  });

  // KPI calculations
  const newInquiriesCount = inquiries.filter(i => i.status === 'new').length;
  const draftPostsCount = posts.filter(p => !p.published_at).length;
  const publishedPostsCount = posts.filter(p => p.published_at).length;

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Compass className="w-10 h-10 text-accent animate-spin" />
          <span className="text-xs uppercase tracking-widest text-foreground/60 font-mono">Accessing Operations Console...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen py-10">
      {/* Background radial effects */}
      <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-primary-light/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cockpit Nav Header */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 border-b border-card-border/60 pb-8 mb-10">
          <div className="flex items-center gap-3 justify-start text-left">
            <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center text-accent">
              <Compass className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-display font-bold text-2xl text-white tracking-wide">Operations Control</h1>
              <span className="text-[10px] uppercase tracking-widest text-accent font-semibold">Bespoke Travel & Relocation Agency Management</span>
            </div>
          </div>

          <button
            onClick={handleSignOut}
            className="px-5 py-2.5 bg-red-950/20 hover:bg-red-950/50 border border-red-500/20 text-red-400 hover:text-red-300 text-xs font-display font-semibold uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center gap-2 w-fit"
          >
            <LogOut className="w-4 h-4" /> Secure Log Out
          </button>
        </div>

        {/* 1. METRICS METERS (KPI BOARD) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
          
          {/* Box 1 */}
          <div className="glass p-6 rounded-2xl border border-card-border relative overflow-hidden flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
              <Inbox className="w-6 h-6 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-foreground/50 font-medium">Pending Inquiries</span>
              <span className="font-display text-3xl font-bold text-white mt-1">{newInquiriesCount}</span>
              <span className="text-[9px] text-emerald-400 font-mono flex items-center gap-1 mt-0.5"><TrendingUp className="w-3 h-3" /> Live Visitor Sync</span>
            </div>
          </div>

          {/* Box 2 */}
          <div className="glass p-6 rounded-2xl border border-card-border relative overflow-hidden flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center text-accent">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-foreground/50 font-medium">Published Blueprints</span>
              <span className="font-display text-3xl font-bold text-white mt-1">{publishedPostsCount}</span>
              <span className="text-[9px] text-accent font-mono flex items-center gap-1 mt-0.5"><CheckCircle className="w-3 h-3" /> Active SEO Crawls</span>
            </div>
          </div>

          {/* Box 3 */}
          <div className="glass p-6 rounded-2xl border border-card-border relative overflow-hidden flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-primary-light/40 border border-card-border/60 flex items-center justify-center text-foreground/50">
              <Layers className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-foreground/50 font-medium">SEO Article Drafts</span>
              <span className="font-display text-3xl font-bold text-white mt-1">{draftPostsCount}</span>
              <span className="text-[9px] text-foreground/55 font-mono flex items-center gap-1 mt-0.5"><AlertCircle className="w-3 h-3" /> Offline Worksheets</span>
            </div>
          </div>

        </section>

        {/* 2. OPERATIONAL PANEL CONTROLLER */}
        <div className="flex flex-col lg:flex-row gap-8 text-left">
          
          {/* Sidebar Nav */}
          <aside className="lg:w-60 flex-shrink-0 flex flex-row lg:flex-col gap-2 border-b lg:border-b-0 lg:border-r border-card-border/60 pb-6 lg:pb-0 lg:pr-6">
            <button
              onClick={() => setActiveTab('inquiries')}
              className={`w-full text-left px-4 py-3 rounded-xl text-xs font-display uppercase tracking-widest flex items-center justify-between border transition-all duration-300 ${
                activeTab === 'inquiries' 
                  ? 'bg-accent/15 border-accent/20 text-accent font-bold'
                  : 'bg-transparent border-transparent text-foreground/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="flex items-center gap-2"><Inbox className="w-4 h-4" /> Inquiry Stream</span>
              {newInquiriesCount > 0 && (
                <span className="bg-accent text-background text-[10px] font-bold px-2 py-0.5 rounded-full">{newInquiriesCount}</span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('blog')}
              className={`w-full text-left px-4 py-3 rounded-xl text-xs font-display uppercase tracking-widest flex items-center gap-2 border transition-all duration-300 ${
                activeTab === 'blog' 
                  ? 'bg-accent/15 border-accent/20 text-accent font-bold'
                  : 'bg-transparent border-transparent text-foreground/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <BookOpen className="w-4 h-4" /> Relocation Blog
            </button>
          </aside>

          {/* Main workspace area */}
          <main className="flex-grow">
            
            {/* INQUIRIES TAB PANEL */}
            {activeTab === 'inquiries' && (
              <div className="flex flex-col gap-6">
                
                {/* Inquiry Filters */}
                <div className="flex items-center justify-between bg-card-bg/40 p-4 rounded-xl border border-card-border/60">
                  <div className="flex items-center gap-2">
                    <Inbox className="w-4 h-4 text-accent" />
                    <span className="text-xs uppercase tracking-wider font-semibold text-white">Client Inquiry Inbox</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {['all', 'new', 'contacted', 'resolved'].map(filter => (
                      <button
                        key={filter}
                        onClick={() => setInquiryFilter(filter)}
                        className={`px-3 py-1.5 text-[9px] uppercase tracking-wider font-display font-medium rounded-lg border transition-all ${
                          inquiryFilter === filter
                            ? 'bg-accent border-accent text-background font-semibold'
                            : 'bg-transparent border-card-border/80 text-foreground/60 hover:text-white'
                        }`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Inquiry Cards List */}
                {filteredInquiries.length === 0 ? (
                  <div className="text-center py-20 glass rounded-xl border border-card-border">
                    <Inbox className="w-10 h-10 text-foreground/30 mx-auto mb-3" />
                    <h3 className="font-display font-semibold text-sm text-white">Inbox Empty</h3>
                    <p className="text-xs text-foreground/50 font-light max-w-xs mx-auto">
                      There are currently no visitor inquiry submissions listed under filter "{inquiryFilter}".
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    {filteredInquiries.map((inq) => {
                      const inqDate = new Date(inq.created_at).toLocaleString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      });

                      return (
                        <div 
                          key={inq.id}
                          className="glass p-6 rounded-xl border border-card-border/80 flex flex-col gap-4 hover:border-card-border transition-colors shadow-md relative"
                        >
                          {/* Top bar */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-card-border/50 pb-3">
                            <div className="flex flex-col">
                              <span className="font-display font-bold text-sm text-white">{inq.name}</span>
                              <span className="text-[9px] uppercase tracking-widest text-accent font-semibold mt-0.5">{inq.service}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-[10px] text-foreground/40 font-mono flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {inqDate}</span>
                              
                              {/* Status Toggler Pills */}
                              <div className="flex items-center bg-background/80 p-1 rounded-lg border border-card-border/50 gap-1">
                                {['new', 'contacted', 'resolved'].map(statusVal => (
                                  <button
                                    key={statusVal}
                                    onClick={() => handleUpdateInquiryStatus(inq.id, statusVal)}
                                    className={`px-2 py-0.5 rounded text-[8px] uppercase tracking-wide font-bold transition-all ${
                                      inq.status === statusVal 
                                        ? statusVal === 'new' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                                          statusVal === 'contacted' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                                          'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                        : 'text-foreground/40 hover:text-foreground'
                                    }`}
                                  >
                                    {statusVal}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Message Body */}
                          <p className="text-xs text-foreground/80 font-light leading-relaxed bg-background/30 p-3 rounded-lg border border-card-border/40">
                            {inq.message || 'No description notes included.'}
                          </p>

                          {/* Contact Details */}
                          <div className="flex flex-wrap gap-4 text-[10px] font-mono text-foreground/60">
                            <span className="flex items-center gap-1 hover:text-accent cursor-pointer"><Mail className="w-3.5 h-3.5 text-accent" /> {inq.email}</span>
                            {inq.phone && (
                              <span className="flex items-center gap-1 hover:text-accent cursor-pointer"><Phone className="w-3.5 h-3.5 text-accent" /> {inq.phone}</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* RELOCATION BLOG TAB PANEL */}
            {activeTab === 'blog' && (
              <div className="flex flex-col gap-6">
                
                {/* Post Controller Toolbar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-card-bg/40 p-4 rounded-xl border border-card-border/60">
                  <div className="relative max-w-xs flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/45" />
                    <input 
                      type="text"
                      placeholder="Search articles, categories..."
                      value={searchPost}
                      onChange={(e) => setSearchPost(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-background/80 border border-card-border rounded-lg text-xs text-foreground focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>

                  <Link
                    href="/admin/posts/new"
                    className="px-4 py-2 bg-accent hover:bg-accent-hover text-background font-display font-semibold text-xs uppercase tracking-widest rounded-lg flex items-center justify-center gap-1.5 transition-all duration-300 w-fit"
                  >
                    <Plus className="w-4 h-4" /> Create Blueprint
                  </Link>
                </div>

                {/* Posts Table List */}
                {filteredPosts.length === 0 ? (
                  <div className="text-center py-20 glass rounded-xl border border-card-border">
                    <BookOpen className="w-10 h-10 text-foreground/30 mx-auto mb-3" />
                    <h3 className="font-display font-semibold text-sm text-white">No Articles Listed</h3>
                    <p className="text-xs text-foreground/50 font-light max-w-xs mx-auto">
                      Write an SEO-friendly travel or relocation guide to expand your search footprints.
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    {filteredPosts.map(post => {
                      const postDate = post.published_at ? new Date(post.published_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      }) : 'Draft';

                      return (
                        <div 
                          key={post.id}
                          className="glass p-4 rounded-xl border border-card-border/70 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 hover:border-accent/15 transition-all duration-300"
                        >
                          <div className="flex items-center gap-4 text-left">
                            {post.featured_image && (
                              <img 
                                src={post.featured_image} 
                                alt={post.title} 
                                className="w-12 h-12 rounded-lg object-cover border border-card-border/50"
                              />
                            )}
                            <div className="flex flex-col justify-center max-w-[280px] sm:max-w-[400px]">
                              <div className="flex items-center gap-2">
                                <h4 className="font-display font-semibold text-xs sm:text-sm text-white truncate">{post.title}</h4>
                                <span className={`px-2 py-0.5 rounded text-[8px] uppercase tracking-wide font-bold font-mono ${
                                  post.published_at ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400' : 'bg-foreground/10 border border-card-border text-foreground/45'
                                }`}>
                                  {post.published_at ? 'Live' : 'Draft'}
                                </span>
                              </div>
                              <div className="flex items-center gap-4 text-[9px] text-foreground/50 font-mono mt-1">
                                <span className="text-accent">{post.category}</span>
                                <span>{postDate}</span>
                              </div>
                            </div>
                          </div>

                          {/* Quick Actions Panel */}
                          <div className="flex items-center justify-end gap-2 border-t sm:border-t-0 border-card-border/40 pt-3 sm:pt-0">
                            {post.published_at && (
                              <Link
                                href={`/blog/${post.slug}`}
                                target="_blank"
                                className="p-2 bg-background/60 hover:bg-accent/10 border border-card-border text-foreground/80 hover:text-accent rounded-lg transition-colors"
                                title="View Public Post"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                              </Link>
                            )}

                            <Link
                              href={`/admin/posts/${post.id}/edit`}
                              className="p-2 bg-background/60 hover:bg-accent/10 border border-card-border text-foreground/80 hover:text-accent rounded-lg transition-colors flex items-center gap-1 text-[10px] font-display font-medium uppercase tracking-wider"
                              title="Edit Article"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </Link>

                            <button
                              onClick={() => handleDeletePost(post.id)}
                              className="p-2 bg-background/60 hover:bg-red-500/10 border border-card-border text-foreground/80 hover:text-red-400 rounded-lg transition-colors"
                              title="Delete Article"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

              </div>
            )}

          </main>
        </div>

      </div>
    </div>
  );
}
