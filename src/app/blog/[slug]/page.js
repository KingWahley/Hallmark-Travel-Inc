import { getBlogPostBySlug, getBlogPosts } from "@/lib/db";
import { notFound } from "next/navigation";
import BlogDetailClient from "@/components/BlogDetailClient";

// Dynamically generate SEO tags at build/request time
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: "Blueprint Not Found | Hallmark Travel Inc",
      description: "The requested travel or relocation blueprint could not be found."
    };
  }

  return {
    title: `${post.meta_title || post.title} | Hallmark Travel Inc`,
    description: post.meta_description || post.excerpt,
    alternates: {
      canonical: `https://hallmarktravel.com/blog/${slug}`
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://hallmarktravel.com/blog/${slug}`,
      images: [
        {
          url: post.featured_image || "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
          width: 800,
          height: 600,
          alt: post.title
        }
      ]
    }
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Fetch recent/related articles, excluding current
  const allPosts = await getBlogPosts(false);
  const relatedPosts = allPosts
    .filter(p => p.slug !== slug)
    .slice(0, 3);

  return (
    <BlogDetailClient post={post} relatedPosts={relatedPosts} />
  );
}
