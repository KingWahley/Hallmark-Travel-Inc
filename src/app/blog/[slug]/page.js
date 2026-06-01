'use client';

import { useState, useEffect, use } from 'react';
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/db";
import BlogDetailClient from "@/components/BlogDetailClient";

export default function BlogPostPage({ params }) {
  const { slug } = use(params);
  
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadPost() {
      try {
        const fetchedPost = await getBlogPostBySlug(slug);
        if (!fetchedPost) {
          setError(true);
          return;
        }
        setPost(fetchedPost);

        // Fetch recent/related articles, excluding current
        const allPosts = await getBlogPosts(false);
        const related = allPosts
          .filter(p => p.slug !== slug)
          .slice(0, 3);
        setRelatedPosts(related);
      } catch (err) {
        console.error("Failed to load blog detail:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    loadPost();
  }, [slug]);

  // Dynamically set client document title for SEO cataloging
  useEffect(() => {
    if (post) {
      document.title = `${post.meta_title || post.title} | Hallmark Travel Inc`;
    }
  }, [post]);

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 text-slate-500">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#df6951]/10 border border-[#df6951]/20 flex items-center justify-center text-[#df6951] animate-spin">
            <span className="text-xs">🌀</span>
          </div>
          <span className="text-[10px] uppercase tracking-widest font-mono text-slate-400">Loading Article Details...</span>
        </div>
      </div>
    );
  }

  if (error || !post) {
    notFound();
    return null;
  }

  return (
    <BlogDetailClient post={post} relatedPosts={relatedPosts} />
  );
}
