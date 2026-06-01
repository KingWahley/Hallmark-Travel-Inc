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
  ExternalLink,
  Menu,
  X,
  User,
  Shield,
  Activity,
  Globe,
  FilePlus
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
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Search & Filter States
  const [searchPost, setSearchPost] = useState('');
  const [inquiryFilter, setInquiryFilter] = useState('all'); // 'all', 'new', 'contacted', 'resolved'

  useEffect(() => {
    // Security check - redirect if no session
    const session = sessionStorage.getItem('hallmark_admin_session');
    if (!session) {
      router.push('/dashboard/login');
      return;
    }

    async function loadData() {
      try {
        const postsData = await getBlogPosts(true); // Include drafts
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
    router.push('/dashboard/login');
    router.refresh();
  };

  const handleUpdateInquiryStatus = async (id, newStatus) => {
    try {
      await updateInquiryStatus(id, newStatus);
      const updated = await getInquiries();
      setInquiries(updated);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeletePost = async (id) => {
    if (!window.confirm("Are you sure you want to permanently delete this blog post? This action cannot be undone.")) return;
    
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

  // Simplified terminology metrics
  const newInquiriesCount = inquiries.filter(i => i.status === 'new').length;
  const draftPostsCount = posts.filter(p => !p.published_at).length;
  const publishedPostsCount = posts.filter(p => p.published_at).length;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-600">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-12 h-12 rounded-xl bg-[#df6951]/10 flex items-center justify-center text-[#df6951] animate-spin">
            <Compass className="w-6 h-6" />
          </div>
          <div>
            <span className="block text-xs uppercase tracking-[0.2em] text-[#df6951] font-semibold font-mono animate-pulse">Loading Manager...</span>
            <span className="block text-[10px] text-slate-400 font-mono mt-1">Preparing Website Tools</span>
          </div>
        </div>
      </div>
    );
  }

  // Beginner-friendly links
  const sidebarLinks = [
    {
      id: 'inquiries',
      label: 'Visitor Messages',
      icon: Mail,
      badge: newInquiriesCount,
      badgeColor: 'bg-orange-500 text-white shadow-sm shadow-orange-500/20'
    },
    {
      id: 'blog',
      label: 'Blog Articles',
      icon: BookOpen,
      badge: posts.length,
      badgeColor: 'bg-slate-200 text-slate-700 border border-slate-300'
    }
  ];

  const renderSidebarContent = () => (
    <div className="h-full flex flex-col justify-between">
      {/* Top section */}
      <div className="flex flex-col gap-8">
        
        {/* Brand Identity / Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#df6951] to-[#f1a501] flex items-center justify-center text-white shadow-md shadow-[#df6951]/15">
            <Compass className="w-4 h-4" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-sans font-extrabold text-base text-slate-800 tracking-tight leading-none">
              Hallmark<span className="text-[#df6951]">.</span>
            </span>
            <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold mt-1">
              Website Manager
            </span>
          </div>
        </div>

        {/* Operator Profile Card */}
        <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#df6951]/10 flex items-center justify-center text-[#df6951] relative">
            <User className="w-4 h-4" />
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald-500 border border-white rounded-full" />
          </div>
          <div className="flex flex-col text-left overflow-hidden">
            <span className="text-[11px] font-semibold text-slate-700 leading-tight">Administrator</span>
            <span className="text-[9px] text-slate-400 truncate">admin@hallmarktravel.com</span>
          </div>
        </div>

        {/* Navigation Options */}
        <nav className="flex flex-col gap-1 text-left">
          <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold px-3.5 mb-2 font-mono">
            Menu
          </span>
          {sidebarLinks.map(link => {
            const Icon = link.icon;
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  setMobileSidebarOpen(false);
                }}
                className={`w-full px-3.5 py-2.5 rounded-xl text-xs font-semibold tracking-wide flex items-center justify-between transition-all duration-300 ${
                  isActive 
                    ? 'bg-[#df6951]/8 border border-[#df6951]/15 text-[#df6951]'
                    : 'bg-transparent border border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#df6951]' : 'text-slate-400'}`} />
                  {link.label}
                </span>
                {link.badge > 0 && (
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full font-mono ${link.badgeColor}`}>
                    {link.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Admin Tools */}
        <div className="flex flex-col gap-1.5 text-left pt-4 border-t border-slate-200">
          <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold px-3.5 mb-2 font-mono">
            Shortcuts
          </span>
          <Link
            href="/dashboard/posts/new"
            className="w-full px-3.5 py-2 bg-[#df6951] hover:bg-[#df6951]/95 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            Write New Article
          </Link>
          <Link
            href="/"
            target="_blank"
            className="w-full px-3.5 py-2 rounded-xl text-xs text-slate-500 hover:text-slate-800 hover:bg-slate-100 font-semibold flex items-center gap-2.5 transition-all"
          >
            <Globe className="w-4 h-4 text-slate-400" />
            View Live Website
          </Link>
        </div>

      </div>

      {/* Log Out */}
      <button
        onClick={handleSignOut}
        className="w-full px-3.5 py-2.5 bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-red-600 border border-slate-200/80 hover:border-red-200/80 text-xs font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
      >
        <LogOut className="w-3.5 h-3.5" /> Sign Out
      </button>
    </div>
  );

  return (
    <div className="h-screen flex bg-slate-50 text-slate-800 font-sans overflow-hidden relative">

      {/* 1. DESKTOP STICKY LEFT SIDEBAR (Locked Scroll) */}
      <aside className="w-72 bg-white border-r border-slate-200 flex-col justify-between hidden lg:flex h-screen sticky top-0 z-30 p-6 flex-shrink-0">
        {renderSidebarContent()}
      </aside>

      {/* 2. MOBILE SIDEBAR DRAWER OVERLAY */}
      {mobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 lg:hidden animate-fade-in" 
          onClick={() => setMobileSidebarOpen(false)} 
        />
      )}
      <aside className={`fixed top-0 bottom-0 left-0 w-72 bg-white border-r border-slate-200 flex flex-col justify-between z-50 p-6 transition-transform duration-300 lg:hidden ${
        mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {renderSidebarContent()}
      </aside>

      {/* 3. SCROLLABLE RIGHT MAIN PANEL */}
      <div className="flex-grow h-screen overflow-y-auto flex flex-col relative w-full">
        
        {/* Mobile Header Top Navbar */}
        <header className="lg:hidden h-16 bg-white border-b border-slate-200/80 px-6 flex items-center justify-between sticky top-0 z-20 flex-shrink-0">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#df6951]" />
            <span className="font-sans font-extrabold text-base text-slate-800 tracking-tight">
              Hallmark<span className="text-[#df6951]">.</span>
            </span>
          </div>
          <button
            onClick={() => setMobileSidebarOpen(true)}
            className="p-2 text-slate-500 hover:text-[#df6951] rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </header>

        {/* Dashboard Main Workspace Workspace Content */}
        <main className="flex-grow p-5 sm:p-8 flex flex-col gap-6 w-full max-w-7xl mx-auto">
          
          {/* Welcome Header */}
          <section className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-slate-200 pb-5 text-left">
            <div className="flex flex-col">
              <h1 className="font-sans font-bold text-xl sm:text-2xl text-slate-800 tracking-tight">
                Dashboard Manager
              </h1>
              <p className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#df6951]" />
                Authorized Access • Hallmark Travel Staff Desk
              </p>
            </div>
            <div className="flex items-center gap-2 self-start sm:self-center">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] text-slate-500 font-semibold tracking-wider font-mono">
                System Connected
              </span>
            </div>
          </section>

          {/* 4. BEGINNER STATS SUMMARY CARDS */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
            
            {/* Stat Card 1 */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-sm transition-all duration-300 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-slate-400">New Messages</span>
                <span className="font-sans text-2xl font-extrabold text-slate-800 mt-0.5 leading-none">{newInquiriesCount}</span>
                <span className="text-[9px] text-slate-400 mt-1">From contact forms</span>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-sm transition-all duration-300 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-slate-400">Live Articles</span>
                <span className="font-sans text-2xl font-extrabold text-slate-800 mt-0.5 leading-none">{publishedPostsCount}</span>
                <span className="text-[9px] text-emerald-600 mt-1 flex items-center gap-1 font-semibold">
                  <CheckCircle className="w-3 h-3" /> Published on site
                </span>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-sm transition-all duration-300 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600">
                <Layers className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-slate-400">Draft Articles</span>
                <span className="font-sans text-2xl font-extrabold text-slate-800 mt-0.5 leading-none">{draftPostsCount}</span>
                <span className="text-[9px] text-slate-400 mt-1">Saved as drafts</span>
              </div>
            </div>

          </section>

          {/* 5. WORKSPACE TABS */}
          <section className="w-full text-left">
            
            {/* MESSAGES TAB CONTENT */}
            {activeTab === 'inquiries' && (
              <div className="flex flex-col gap-5">
                
                {/* Message Filter Toolbar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200/80">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#df6951]" />
                    <span className="text-xs font-bold text-slate-700">Visitor Contact Messages</span>
                  </div>
                  
                  {/* Filters */}
                  <div className="flex items-center bg-slate-100 p-1 rounded-xl gap-0.5 overflow-x-auto self-start sm:self-center">
                    {['all', 'new', 'contacted', 'resolved'].map(filter => (
                      <button
                        key={filter}
                        onClick={() => setInquiryFilter(filter)}
                        className={`px-3 py-1.5 text-[9px] uppercase tracking-wider font-bold rounded-lg transition-all ${
                          inquiryFilter === filter
                            ? 'bg-white text-slate-850 shadow-xs border border-slate-200'
                            : 'bg-transparent text-slate-500 hover:text-slate-800'
                        }`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message Cards List */}
                {filteredInquiries.length === 0 ? (
                  <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300 flex flex-col items-center justify-center">
                    <Inbox className="w-10 h-10 text-slate-350 mb-3" />
                    <h3 className="font-sans font-bold text-sm text-slate-700">Inbox Empty</h3>
                    <p className="text-xs text-slate-400 max-w-xs mx-auto mt-0.5">
                      No messages match the "{inquiryFilter}" status filter.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-4">
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
                          className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-300 flex flex-col gap-3 shadow-xs relative"
                        >
                          {/* Accent status tag */}
                          <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl ${
                            inq.status === 'new' ? 'bg-orange-500' :
                            inq.status === 'contacted' ? 'bg-amber-500' :
                            'bg-emerald-500'
                          }`} />

                          {/* Top row Info */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
                            <div className="flex flex-col text-left">
                              <span className="font-sans font-bold text-sm text-slate-800">{inq.name}</span>
                              <span className="text-[9px] uppercase tracking-wider text-[#df6951] font-bold font-mono mt-0.5">
                                Interested in: {inq.service}
                              </span>
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-3 self-start sm:self-center">
                              <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5 text-slate-300" /> {inqDate}
                              </span>
                              
                              {/* Status actions switcher */}
                              <div className="flex items-center bg-slate-100 p-1 rounded-lg gap-0.5">
                                {['new', 'contacted', 'resolved'].map(statusVal => (
                                  <button
                                    key={statusVal}
                                    onClick={() => handleUpdateInquiryStatus(inq.id, statusVal)}
                                    className={`px-2 py-0.5 rounded text-[8px] uppercase tracking-wide font-bold transition-all ${
                                      inq.status === statusVal 
                                        ? statusVal === 'new' ? 'bg-orange-500 text-white shadow-xs' :
                                          statusVal === 'contacted' ? 'bg-amber-500 text-white shadow-xs' :
                                          'bg-emerald-500 text-white shadow-xs'
                                        : 'text-slate-400 hover:text-slate-700'
                                    }`}
                                  >
                                    {statusVal}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Message Description */}
                          <p className="text-xs text-slate-600 font-light leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-150">
                            {inq.message || 'No message contents provided.'}
                          </p>

                          {/* Contact buttons */}
                          <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-500 border-t border-slate-100 pt-2">
                            <a 
                              href={`mailto:${inq.email}`}
                              className="flex items-center gap-1.5 hover:text-[#df6951] transition-colors"
                            >
                              <Mail className="w-3.5 h-3.5 text-[#df6951]" /> {inq.email}
                            </a>
                            {inq.phone && (
                              <a 
                                href={`tel:${inq.phone}`}
                                className="flex items-center gap-1.5 hover:text-[#df6951] transition-colors"
                              >
                                <Phone className="w-3.5 h-3.5 text-[#df6951]" /> {inq.phone}
                              </a>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* BLOG ARTICLES TAB CONTENT */}
            {activeTab === 'blog' && (
              <div className="flex flex-col gap-5">
                
                {/* Search & Actions Bar */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200/80">
                  <div className="relative w-full md:max-w-md flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="text"
                      placeholder="Search articles by title or tags..."
                      value={searchPost}
                      onChange={(e) => setSearchPost(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 placeholder-slate-400 focus:border-[#df6951] focus:outline-none transition-colors"
                    />
                  </div>

                  <Link
                    href="/dashboard/posts/new"
                    className="px-4 py-2.5 bg-[#df6951] hover:bg-[#df6951]/95 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <Plus className="w-4 h-4" /> Write New Article
                  </Link>
                </div>

                {/* Articles catalog list */}
                {filteredPosts.length === 0 ? (
                  <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300 flex flex-col items-center justify-center">
                    <BookOpen className="w-10 h-10 text-slate-350 mb-3" />
                    <h3 className="font-sans font-bold text-sm text-slate-700">No Articles Found</h3>
                    <p className="text-xs text-slate-400 max-w-xs mx-auto mt-0.5">
                      No blog articles found. Write your first blog post to get started!
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-3.5">
                    {filteredPosts.map(post => {
                      const postDate = post.published_at ? new Date(post.published_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      }) : 'Saved as Draft';

                      return (
                        <div 
                          key={post.id}
                          className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xs transition-all duration-300 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 shadow-2xs"
                        >
                          {/* Image & Title Column */}
                          <div className="flex items-center gap-3.5 text-left min-w-0">
                            {post.featured_image ? (
                              <img 
                                src={post.featured_image} 
                                alt={post.title} 
                                className="w-12 h-12 rounded-lg object-cover border border-slate-100 flex-shrink-0"
                              />
                            ) : (
                              <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-150 flex items-center justify-center text-slate-400 flex-shrink-0">
                                <Compass className="w-5 h-5" />
                              </div>
                            )}
                            <div className="flex flex-col justify-center min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <h4 className="font-sans font-bold text-sm text-slate-800 truncate max-w-[200px] sm:max-w-[400px]">
                                  {post.title}
                                </h4>
                                <span className={`px-2 py-0.5 rounded-lg text-[8px] uppercase tracking-wide font-extrabold border ${
                                  post.published_at 
                                    ? 'bg-emerald-50 border-emerald-250 text-emerald-600' 
                                    : 'bg-slate-100 border-slate-200 text-slate-500'
                                }`}>
                                  {post.published_at ? 'Live' : 'Draft'}
                                </span>
                              </div>
                              <div className="flex items-center gap-3.5 text-[9px] text-slate-400 font-mono mt-1 flex-wrap">
                                <span className="text-[#df6951] font-semibold">{post.category}</span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3.5 h-3.5 text-slate-300" /> {postDate}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Action Options */}
                          <div className="flex items-center justify-end gap-2 border-t md:border-t-0 border-slate-100 pt-3 md:pt-0">
                            {post.published_at && (
                              <Link
                                href={`/blog/${post.slug}`}
                                target="_blank"
                                className="p-2 bg-slate-50 hover:bg-[#df6951]/10 border border-slate-200 text-slate-500 hover:text-[#df6951] rounded-lg transition-all"
                                title="View live blog post"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </Link>
                            )}

                            <Link
                              href={`/dashboard/posts/${post.id}/edit`}
                              className="p-2 bg-slate-50 hover:bg-[#df6951]/10 border border-slate-200 text-slate-500 hover:text-[#df6951] rounded-lg transition-all flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider"
                              title="Edit Article"
                            >
                              <Edit3 className="w-4 h-4" /> Edit
                            </Link>

                            <button
                              onClick={() => handleDeletePost(post.id)}
                              className="p-2 bg-slate-50 hover:bg-red-50 border border-slate-200 text-slate-500 hover:text-red-500 rounded-lg transition-all"
                              title="Delete Article"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                        </div>
                      );
                    })}
                  </div>
                )}

              </div>
            )}

          </section>

        </main>
      </div>

    </div>
  );
}
