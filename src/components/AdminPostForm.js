'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Sparkles, 
  Plus, 
  Trash2, 
  Save, 
  HelpCircle, 
  Info,
  CheckCircle,
  FileText
} from 'lucide-react';
import { getBlogPostById, saveBlogPost } from '@/lib/db';

export default function AdminPostForm({ postId = null }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(!!postId);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  // Form Fields State
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState('Study & Relocation');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [author, setAuthor] = useState('Global Mobility Advisor');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [isPublished, setIsPublished] = useState(true);

  // Dynamic FAQs State (JSON Array)
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    // Session lock
    const session = sessionStorage.getItem('hallmark_admin_session');
    if (!session) {
      router.push('/admin/login');
      return;
    }

    if (postId) {
      async function loadPost() {
        try {
          const post = await getBlogPostById(postId);
          if (post) {
            setTitle(post.title || '');
            setSlug(post.slug || '');
            setCategory(post.category || 'Study & Relocation');
            setExcerpt(post.excerpt || '');
            setContent(post.content || '');
            setFeaturedImage(post.featured_image || '');
            setAuthor(post.author || 'Global Mobility Advisor');
            setMetaTitle(post.meta_title || '');
            setMetaDescription(post.meta_description || '');
            setTagsInput((post.tags || []).join(', '));
            setIsPublished(!!post.published_at);
            setFaqs(post.faq || []);
          } else {
            setError('The requested article was not found.');
          }
        } catch (err) {
          console.error(err);
          setError('Failed to fetch post.');
        } finally {
          setFetching(false);
        }
      }
      loadPost();
    }
  }, [postId, router]);

  // Auto Generate Slug logic
  const handleAutoSlug = () => {
    const generated = title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '') // remove special chars
      .replace(/[\s_]+/g, '-') // spaces to hyphen
      .replace(/-+/g, '-'); // collapse multiple hyphens
    setSlug(generated);
  };

  // FAQ Manager helpers
  const handleAddFaq = () => {
    setFaqs(prev => [...prev, { question: '', answer: '' }]);
  };

  const handleFaqChange = (index, field, value) => {
    setFaqs(prev => {
      const updated = [...prev];
      updated[index][field] = value;
      return updated;
    });
  };

  const handleRemoveFaq = (index) => {
    setFaqs(prev => prev.filter((_, i) => i !== index));
  };

  // Quick Unsplash image templates to help admins set visuals
  const imagePresets = [
    { label: 'Airport', url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80' },
    { label: 'Passport', url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80' },
    { label: 'Healthcare', url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80' },
    { label: 'Culinary', url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80' }
  ];

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!title || !slug || !content) {
      setError('Please fill in the required fields: Title, Slug, and content.');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const tagsArray = tagsInput
        .split(',')
        .map(t => t.trim())
        .filter(t => t.length > 0);

      const postData = {
        title,
        slug,
        category,
        excerpt,
        content,
        featured_image: featuredImage,
        author,
        meta_title: metaTitle || title,
        meta_description: metaDescription || excerpt,
        tags: tagsArray,
        faq: faqs.filter(item => item.question && item.answer), // clean empty FAQs
        published_at: isPublished ? new Date().toISOString() : null // null denotes draft
      };

      if (postId) {
        postData.id = postId;
      }

      await saveBlogPost(postData);
      setSuccess(true);
      
      // Send admin back to cockpit panel after save
      setTimeout(() => {
        router.push('/admin');
      }, 1500);

    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to save post in repository.');
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <FileText className="w-8 h-8 text-accent animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-foreground/50 font-mono">Loading Blueprint File...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      
      {/* Navigation and Actions Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-card-border/60 pb-6 mb-8">
        <div className="flex items-center gap-3 text-left">
          <Link
            href="/admin"
            className="p-2.5 rounded-xl bg-background border border-card-border hover:border-accent text-foreground/75 hover:text-accent transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div className="flex flex-col">
            <h1 className="font-display font-bold text-xl text-white">
              {postId ? 'Edit Relocation Blueprint' : 'Write Relocation Blueprint'}
            </h1>
            <span className="text-[10px] uppercase tracking-widest text-accent font-semibold">SEO Article Composer</span>
          </div>
        </div>
      </div>

      {success && (
        <div className="p-4 bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs rounded-xl flex items-center gap-2.5 mb-6 animate-fade-in-up font-light">
          <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
          <span>Blueprint successfully saved. Redirecting to operational console...</span>
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-950/40 border border-red-500/20 text-red-400 text-xs rounded-xl flex items-start gap-2.5 mb-6 animate-fade-in-up font-light">
          <Info className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      {/* Editor Body */}
      <form onSubmit={handleFormSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
        
        {/* Left main form parameters */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          {/* Main info card */}
          <div className="glass p-6 sm:p-8 rounded-2xl border border-card-border/70 flex flex-col gap-5">
            <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider border-b border-card-border/40 pb-3">Core Content</h3>
            
            <div className="flex flex-col gap-1.5">
              <label htmlFor="post-title" className="text-[10px] uppercase tracking-wider text-foreground/60 font-semibold">Article Title *</label>
              <input 
                type="text" 
                id="post-title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Nursing in the Philippines: The Ultimate Relocation Pathway"
                className="px-4 py-3 bg-background/80 border border-card-border rounded-xl text-xs text-white focus:border-accent focus:outline-none transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="post-slug" className="text-[10px] uppercase tracking-wider text-foreground/60 font-semibold">URL Slug *</label>
                  <button
                    type="button"
                    onClick={handleAutoSlug}
                    className="text-[9px] text-accent uppercase font-bold hover:underline"
                  >
                    Auto-Generate
                  </button>
                </div>
                <input 
                  type="text" 
                  id="post-slug"
                  required
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="nursing-in-the-philippines-relocation-pathway"
                  className="px-4 py-3 bg-background/80 border border-card-border rounded-xl text-xs text-white font-mono focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="post-category" className="text-[10px] uppercase tracking-wider text-foreground/60 font-semibold">Category</label>
                <select 
                  id="post-category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="px-4 py-3 bg-background/80 border border-card-border rounded-xl text-xs text-white focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="Study & Relocation">Study & Relocation</option>
                  <option value="Travel & Relocation">Travel & Relocation</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="post-excerpt" className="text-[10px] uppercase tracking-wider text-foreground/60 font-semibold">Excerpt Summary *</label>
              <textarea 
                id="post-excerpt"
                rows={2}
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="A brief 2-sentence marketing teaser outlining the relocation path..."
                className="px-4 py-3 bg-background/80 border border-card-border rounded-xl text-xs text-white focus:border-accent focus:outline-none transition-colors resize-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="post-content" className="text-[10px] uppercase tracking-wider text-foreground/60 font-semibold">Rich HTML Content *</label>
              <textarea 
                id="post-content"
                required
                rows={12}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="<h2>Section Header</h2> <p>Insert detailed editorial narrative containing licensing guides, checklists...</p>"
                className="px-4 py-3 bg-background/80 border border-card-border rounded-xl text-xs text-white font-mono focus:border-accent focus:outline-none transition-colors resize-y"
              />
            </div>
          </div>

          {/* Dynamic FAQ Panel */}
          <div className="glass p-6 sm:p-8 rounded-2xl border border-card-border/70 flex flex-col gap-5">
            <div className="flex items-center justify-between border-b border-card-border/40 pb-3">
              <div className="flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-accent" />
                <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider">Dynamic FAQ Schema Items</h3>
              </div>
              <button
                type="button"
                onClick={handleAddFaq}
                className="px-3 py-1 bg-accent/15 border border-accent/25 text-accent text-[10px] font-display uppercase tracking-widest font-semibold rounded-lg hover:bg-accent hover:text-background transition-colors duration-300 flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" /> Add FAQ Item
              </button>
            </div>

            {faqs.length === 0 ? (
              <div className="text-center py-6 border border-dashed border-card-border/50 rounded-xl text-foreground/45 text-xs font-light">
                No FAQ pairs are defined. Adding FAQs automatically builds HTML5 structured FAQ Schemas.
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="p-4 bg-background/40 border border-card-border rounded-xl flex flex-col gap-3 relative">
                    <button
                      type="button"
                      onClick={() => handleRemoveFaq(idx)}
                      className="absolute right-4 top-4 text-foreground/40 hover:text-red-400 p-1"
                      title="Remove FAQ item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    
                    <div className="flex flex-col gap-1 pr-6">
                      <span className="text-[8px] uppercase tracking-widest text-accent font-semibold">FAQ Question #{idx+1}</span>
                      <input 
                        type="text"
                        value={faq.question}
                        onChange={(e) => handleFaqChange(idx, 'question', e.target.value)}
                        placeholder="e.g. Is this dental degree internationally recognized?"
                        className="px-3 py-2 bg-background/80 border border-card-border rounded-lg text-xs text-white focus:border-accent focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-[8px] uppercase tracking-widest text-accent font-semibold">FAQ Answer #{idx+1}</span>
                      <textarea 
                        rows={2}
                        value={faq.answer}
                        onChange={(e) => handleFaqChange(idx, 'answer', e.target.value)}
                        placeholder="Provide details about the licensing board..."
                        className="px-3 py-2 bg-background/80 border border-card-border rounded-lg text-xs text-white focus:border-accent focus:outline-none resize-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Right side parameters (SEO, Status, Presets) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Action trigger card */}
          <div className="glass p-6 rounded-2xl border border-card-border flex flex-col gap-4">
            <h3 className="font-display font-bold text-xs text-white uppercase tracking-wider border-b border-card-border/40 pb-2">Publish Matrix</h3>
            
            <div className="flex items-center justify-between bg-background/50 p-3 rounded-xl border border-card-border/40">
              <span className="text-[10px] uppercase tracking-wider text-foreground/75 font-semibold">Status State</span>
              <button
                type="button"
                onClick={() => setIsPublished(!isPublished)}
                className={`px-3 py-1.5 rounded-lg text-[9px] uppercase tracking-widest font-bold transition-all border ${
                  isPublished 
                    ? 'bg-emerald-500/15 border-emerald-500/25 text-emerald-400' 
                    : 'bg-foreground/5 border-card-border text-foreground/50'
                }`}
              >
                {isPublished ? 'Publish Live' : 'Draft Copy'}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-accent hover:bg-accent-hover text-background font-display font-semibold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-accent/15"
            >
              <Save className="w-4 h-4" />
              {loading ? 'Saving to Database...' : 'Save Relocation Guide'}
            </button>
          </div>

          {/* SEO card */}
          <div className="glass p-6 rounded-2xl border border-card-border flex flex-col gap-4">
            <h3 className="font-display font-bold text-xs text-white uppercase tracking-wider border-b border-card-border/40 pb-2">Search Engine Optimization</h3>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="meta-title" className="text-[9px] uppercase tracking-wider text-foreground/50 font-semibold">SEO Meta Title</label>
              <input 
                type="text" 
                id="meta-title"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                placeholder="Override search title (max 60 chars)"
                className="px-3 py-2 bg-background/80 border border-card-border rounded-lg text-xs text-white focus:border-accent focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="meta-desc" className="text-[9px] uppercase tracking-wider text-foreground/50 font-semibold">SEO Meta Description</label>
              <textarea 
                id="meta-desc"
                rows={3}
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                placeholder="Custom snippet displayed on search result nodes (max 160 chars)"
                className="px-3 py-2 bg-background/80 border border-card-border rounded-lg text-xs text-white focus:border-accent focus:outline-none resize-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="tags-input" className="text-[9px] uppercase tracking-wider text-foreground/50 font-semibold">Metadata Tags</label>
              <input 
                type="text" 
                id="tags-input"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                placeholder="e.g. nursing, philippines, study visa"
                className="px-3 py-2 bg-background/80 border border-card-border rounded-lg text-xs text-white focus:border-accent focus:outline-none"
              />
              <span className="text-[8px] text-foreground/45">Separate values with commas.</span>
            </div>
          </div>

          {/* Featured Image Preset and URL Card */}
          <div className="glass p-6 rounded-2xl border border-card-border flex flex-col gap-4">
            <h3 className="font-display font-bold text-xs text-white uppercase tracking-wider border-b border-card-border/40 pb-2">Image Assets</h3>
            
            <div className="flex flex-col gap-1.5">
              <label htmlFor="featured-image" className="text-[9px] uppercase tracking-wider text-foreground/50 font-semibold">Featured Image URL</label>
              <input 
                type="text" 
                id="featured-image"
                value={featuredImage}
                onChange={(e) => setFeaturedImage(e.target.value)}
                placeholder="https://images.unsplash.com/photo-..."
                className="px-3 py-2 bg-background/80 border border-card-border rounded-lg text-xs text-white focus:border-accent focus:outline-none font-mono"
              />
            </div>

            {/* Presets List */}
            <div className="flex flex-col gap-1.5 mt-2">
              <span className="text-[9px] uppercase tracking-wider text-foreground/40 font-medium">Quick Travel Stock Presets</span>
              <div className="grid grid-cols-2 gap-2">
                {imagePresets.map(preset => (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => setFeaturedImage(preset.url)}
                    className="px-2 py-1.5 bg-background/60 hover:bg-accent/15 border border-card-border rounded-lg text-[9px] uppercase tracking-wider font-semibold text-foreground/80 hover:text-accent transition-all duration-300"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1.5 mt-2">
              <label htmlFor="post-author" className="text-[9px] uppercase tracking-wider text-foreground/50 font-semibold">Article Author</label>
              <input 
                type="text" 
                id="post-author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Global Mobility Advisor"
                className="px-3 py-2 bg-background/80 border border-card-border rounded-lg text-xs text-white focus:border-accent focus:outline-none"
              />
            </div>
          </div>

        </div>

      </form>

    </div>
  );
}
