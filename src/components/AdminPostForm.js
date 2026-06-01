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

// =========================================================================
// TEXT-TO-HTML PARSING ENGINE FOR BEGINNER-FRIENDLY PLAIN TEXT AREA CMS
// =========================================================================

// Convert HTML markup to clean, beginner-friendly double-newline plain text
function htmlToPlainText(html) {
  if (!html) return '';
  let text = html;
  
  // Replace section headers with double-newlined headers
  text = text.replace(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi, '\n\n$1\n\n');
  
  // Replace paragraphs with double newlines
  text = text.replace(/<p[^>]*>(.*?)<\/p>/gi, '\n\n$1\n\n');
  
  // Replace list items with clean bullet lines
  text = text.replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n');
  
  // Strip all other HTML block and inline elements (like ul, ol, strong, em, a)
  text = text.replace(/<[^>]+>/g, '');
  
  // Decode HTML entities
  text = text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

  // Format spacing cleanly
  const lines = text.split('\n');
  const formattedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    if (line.startsWith('-')) {
      // If previous line was a list item, add single newline, otherwise double
      const prev = formattedLines[formattedLines.length - 1];
      if (prev && prev.startsWith('-')) {
        formattedLines.push(line);
      } else {
        formattedLines.push('');
        formattedLines.push(line);
      }
    } else {
      formattedLines.push('');
      formattedLines.push(line);
    }
  }
  
  return formattedLines.join('\n').trim();
}

// Convert plain text with paragraph separation back into structured, clean HTML tags
function plainTextToHtml(text) {
  if (!text) return '';
  
  // Split blocks by double-newlines
  const blocks = text.split(/\r?\n\r?\n/);
  const htmlBlocks = [];
  
  let inList = false;
  let listType = '';
  let currentListItems = [];
  
  const flushList = () => {
    if (currentListItems.length > 0) {
      const listHtml = `<${listType}>\n  ` + currentListItems.map(item => `<li>${item}</li>`).join('\n  ') + `\n</${listType}>`;
      htmlBlocks.push(listHtml);
      currentListItems = [];
      inList = false;
    }
  };

  for (let i = 0; i < blocks.length; i++) {
    let block = blocks[i].trim();
    if (!block) continue;
    
    // Check if the block is a list (every line starts with bullet or number)
    const lines = block.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    const isUnorderedList = lines.every(line => line.startsWith('-') || line.startsWith('*'));
    const isOrderedList = lines.every(line => /^\d+\.\s/.test(line));
    
    if (isUnorderedList || isOrderedList) {
      flushList();
      listType = isUnorderedList ? 'ul' : 'ol';
      inList = true;
      
      lines.forEach(line => {
        const cleanLine = line.replace(/^[-*]\s*/, '').replace(/^\d+\.\s*/, '').trim();
        currentListItems.push(cleanLine);
      });
      
      flushList();
    } else {
      flushList();
      
      // Section header criteria: single-line, under 90 chars, no ending punctuation like . or ! or ?
      const isHeader = 
        lines.length === 1 && 
        block.length < 90 && 
        !/[.?!,]$/.test(block) &&
        !block.toLowerCase().startsWith('http');
        
      if (isHeader) {
        htmlBlocks.push(`<h2>${block}</h2>`);
      } else {
        const pContent = lines.join(' ');
        htmlBlocks.push(`<p>${pContent}</p>`);
      }
    }
  }
  
  flushList();
  return htmlBlocks.join('\n\n');
}

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
      router.push('/dashboard/login');
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
            setContent(htmlToPlainText(post.content || ''));
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

  // Auto Generate Slug logic in background
  const handleTitleChange = (val) => {
    setTitle(val);
    const generated = val
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
        content: plainTextToHtml(content),
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
        router.push('/dashboard');
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
    <div className="min-h-screen bg-slate-50 text-slate-700 py-12 relative overflow-hidden font-sans">
      
      {/* Soft elegant background glows */}
      <div className="absolute top-[10%] left-[5%] w-[35rem] h-[35rem] bg-[#df6951]/4 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[5%] w-[35rem] h-[35rem] bg-[#f1a501]/4 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Navigation and Title Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-8 text-left">
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#df6951] text-slate-500 hover:text-[#df6951] transition-all duration-300 shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div className="flex flex-col">
              <h1 className="font-sans font-bold text-xl text-slate-800">
                {postId ? 'Edit Blog Article' : 'Write New Blog Post'}
              </h1>
              <span className="text-[10px] uppercase tracking-wider text-[#df6951] font-bold mt-1">
                Blog Article Writer
              </span>
            </div>
          </div>
        </div>

        {success && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs rounded-xl flex items-center gap-2.5 mb-6 animate-fade-in-up font-medium text-left">
            <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
            <span>Article successfully saved! Redirecting to dashboard portal...</span>
          </div>
        )}

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-start gap-2.5 mb-6 animate-fade-in-up font-medium text-left">
            <Info className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* Editor Body */}
        <form onSubmit={handleFormSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          {/* Left Main Form Section */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Core Content Card */}
            <div className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-2xl flex flex-col gap-5 shadow-xs">
              <h3 className="font-sans font-bold text-sm text-slate-800 uppercase tracking-wide border-b border-slate-100 pb-3">
                Article Details
              </h3>
              
              {/* Title input */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="post-title" className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Article Title (Headline) *</label>
                <input 
                  type="text" 
                  id="post-title"
                  required
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="e.g. Relocating to the Philippines: A Complete Guide for Nurses"
                  className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:border-[#df6951] focus:bg-white focus:outline-none transition-colors"
                />
                <span className="text-[9px] text-slate-400">Provide an engaging, friendly title for your article. The web link (URL) is automatically generated in the background.</span>
              </div>

              {/* Category input (single, full-width) */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="post-category" className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Article Category</label>
                <select 
                  id="post-category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:border-[#df6951] focus:bg-white focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="Study & Relocation">Study & Relocation</option>
                  <option value="Travel & Relocation">Travel & Relocation</option>
                </select>
                <span className="text-[9px] text-slate-400">Select which section this article belongs to.</span>
              </div>

              {/* Excerpt */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="post-excerpt" className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Short Description (Teaser) *</label>
                <textarea 
                  id="post-excerpt"
                  rows={2}
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="e.g. Discover how nurses are seamlessly relocating and finding career paths in the Philippines with our visa assistance blueprints."
                  className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:border-[#df6951] focus:bg-white focus:outline-none transition-colors resize-none"
                />
                <span className="text-[9px] text-slate-400">Write a short 1 or 2 sentence summary to display on the blog catalog list.</span>
              </div>

              {/* Main Content */}
              <div className="flex flex-col gap-1.5 font-sans">
                <label htmlFor="post-content" className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Article Body Content *</label>
                <textarea 
                  id="post-content"
                  required
                  rows={12}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write your article naturally here. Separate paragraphs with an empty line. You can create section headers by writing them on their own line without ending punctuation (like a period). e.g.:&#10;&#10;Why Relocate for Nursing Studies&#10;&#10;Pursuing nursing studies abroad unlocks..."
                  className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:border-[#df6951] focus:bg-white focus:outline-none transition-colors resize-y font-medium"
                />
                <span className="text-[9px] text-slate-400">Write your story naturally in plain text. Leave a blank line to separate paragraphs. Single-line titles on their own line will automatically be formatted as premium headings. No HTML tags needed!</span>
              </div>
            </div>

            {/* Dynamic FAQ Panel */}
            <div className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-2xl flex flex-col gap-5 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#df6951]" />
                  <h3 className="font-sans font-bold text-sm text-slate-800 uppercase tracking-wide">
                    Frequently Asked Questions (FAQ)
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={handleAddFaq}
                  className="px-3 py-1 bg-[#df6951]/10 border border-[#df6951]/20 text-[#df6951] text-[10px] font-bold uppercase rounded-lg hover:bg-[#df6951] hover:text-white transition-colors flex items-center gap-1 font-mono"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Question
                </button>
              </div>
              <p className="text-[10px] text-slate-400 -mt-2">
                Add common questions and answers. These will automatically appear at the bottom of the article and help with search engine rankings.
              </p>

              {faqs.length === 0 ? (
                <div className="text-center py-6 border border-dashed border-slate-250 rounded-xl text-slate-400 text-xs font-light">
                  No questions defined yet. Click "Add Question" above to include frequently asked questions.
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col gap-3 relative">
                      <button
                        type="button"
                        onClick={() => handleRemoveFaq(idx)}
                        className="absolute right-4 top-4 text-slate-400 hover:text-red-500 p-1"
                        title="Remove FAQ item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      
                      <div className="flex flex-col gap-1 pr-6 text-left">
                        <span className="text-[8px] uppercase tracking-wider text-[#df6951] font-bold font-mono">FAQ Question #{idx+1}</span>
                        <input 
                          type="text"
                          value={faq.question}
                          onChange={(e) => handleFaqChange(idx, 'question', e.target.value)}
                          placeholder="e.g. Is this dental degree internationally recognized?"
                          className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-800 focus:border-[#df6951] focus:outline-none"
                        />
                      </div>

                      <div className="flex flex-col gap-1 text-left">
                        <span className="text-[8px] uppercase tracking-wider text-[#df6951] font-bold font-mono">FAQ Answer #{idx+1}</span>
                        <textarea 
                          rows={2}
                          value={faq.answer}
                          onChange={(e) => handleFaqChange(idx, 'answer', e.target.value)}
                          placeholder="e.g. Yes! Graduates receive full international recognition through accredited pathways..."
                          className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-800 focus:border-[#df6951] focus:outline-none resize-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Right Sidebar - Publish Parameters & Settings */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Publish Settings Panel */}
            <div className="bg-white border border-slate-200/80 p-6 rounded-2xl flex flex-col gap-4 shadow-xs">
              <h3 className="font-sans font-bold text-xs text-slate-800 uppercase tracking-wide border-b border-slate-100 pb-2">Publish Settings</h3>
              
              <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                <span className="text-[10px] uppercase text-slate-500 font-bold font-mono">Visibility Status</span>
                <button
                  type="button"
                  onClick={() => setIsPublished(!isPublished)}
                  className={`px-3 py-1.5 rounded-lg text-[9px] uppercase tracking-wider font-bold transition-all border ${
                    isPublished 
                      ? 'bg-emerald-50 border-emerald-250 text-emerald-600' 
                      : 'bg-slate-100 border-slate-200 text-slate-500'
                  }`}
                >
                  {isPublished ? 'Publish Live' : 'Save as Draft'}
                </button>
              </div>
              <p className="text-[9px] text-slate-400">
                {isPublished ? 'Live posts are instantly visible to visitors.' : 'Draft posts are saved privately.'}
              </p>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#df6951] hover:bg-[#df6951]/95 text-white font-semibold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-[#df6951]/10"
              >
                <Save className="w-4 h-4" />
                {loading ? 'Saving Article...' : 'Save Blog Article'}
              </button>
            </div>

            {/* Google Search Settings (SEO) */}
            <div className="bg-white border border-slate-200/80 p-6 rounded-2xl flex flex-col gap-4 shadow-xs">
              <h3 className="font-sans font-bold text-xs text-slate-800 uppercase tracking-wide border-b border-slate-100 pb-2">Google Search Settings (SEO)</h3>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="meta-title" className="text-[9px] uppercase text-slate-500 font-bold font-mono">Google Search Title</label>
                <input 
                  type="text" 
                  id="meta-title"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  placeholder="Headline displayed on Google results"
                  className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:border-[#df6951] focus:bg-white focus:outline-none"
                />
                <span className="text-[8px] text-slate-400">Headline shown in search results. Leave blank to use article title.</span>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="meta-desc" className="text-[9px] uppercase text-slate-500 font-bold font-mono">Google Search Description</label>
                <textarea 
                  id="meta-desc"
                  rows={3}
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  placeholder="Summary paragraph shown on Google results"
                  className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:border-[#df6951] focus:bg-white focus:outline-none resize-none"
                />
                <span className="text-[8px] text-slate-400">Short text paragraph shown under the headline on Google.</span>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="tags-input" className="text-[9px] uppercase text-slate-500 font-bold font-mono">Search Tags / Keywords</label>
                <input 
                  type="text" 
                  id="tags-input"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  placeholder="e.g. travel, nursing, visa"
                  className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:border-[#df6951] focus:bg-white focus:outline-none"
                />
                <span className="text-[8px] text-slate-400">Simple search words related to this post, separated by commas.</span>
              </div>
            </div>

            {/* Blog Post Images Panel */}
            <div className="bg-white border border-slate-200/80 p-6 rounded-2xl flex flex-col gap-4 shadow-xs">
              <h3 className="font-sans font-bold text-xs text-slate-800 uppercase tracking-wide border-b border-slate-100 pb-2">Blog Post Images</h3>
              
              <div className="flex flex-col gap-1.5 font-sans">
                <label htmlFor="featured-image" className="text-[9px] uppercase text-slate-500 font-bold font-mono">Main Cover Image Link</label>
                <input 
                  type="text" 
                  id="featured-image"
                  value={featuredImage}
                  onChange={(e) => setFeaturedImage(e.target.value)}
                  placeholder="https://images.unsplash.com/photo-..."
                  className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:border-[#df6951] focus:bg-white focus:outline-none font-mono"
                />
                <span className="text-[8px] text-slate-400">Paste a link to a picture, or choose one of our presets below.</span>
              </div>

              {/* Quick Image Presets */}
              <div className="flex flex-col gap-1.5 mt-1">
                <span className="text-[9px] uppercase text-slate-500 font-bold font-mono">Quick Image Presets</span>
                <div className="grid grid-cols-2 gap-2">
                  {imagePresets.map(preset => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => setFeaturedImage(preset.url)}
                      className="px-2 py-1.5 bg-slate-50 hover:bg-[#df6951]/10 border border-slate-200 rounded-lg text-[9px] font-bold text-slate-500 hover:text-[#df6951] transition-all duration-300"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1.5 mt-2">
                <label htmlFor="post-author" className="text-[9px] uppercase text-slate-500 font-bold font-mono">Author Name</label>
                <input 
                  type="text" 
                  id="post-author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Global Mobility Advisor"
                  className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:border-[#df6951] focus:bg-white focus:outline-none"
                />
                <span className="text-[8px] text-slate-400">The name of the writer shown at the top of the post.</span>
              </div>
            </div>

          </div>

        </form>

      </div>
    </div>
  );
}
