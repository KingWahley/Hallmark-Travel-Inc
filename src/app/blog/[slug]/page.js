import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/db";
import BlogDetailClient from "@/components/BlogDetailClient";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.excerpt || `Read our latest article: ${post.title}`,
    alternates: {
      canonical: `https://www.hallmarkconsultancy.com/blog/${slug}`,
    },
    openGraph: {
      title: post.meta_title || post.title,
      description: post.meta_description || post.excerpt,
      url: `https://www.hallmarkconsultancy.com/blog/${slug}`,
      type: "article",
      images: [
        {
          url: post.featured_image || "/logo.png",
          alt: post.title,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta_title || post.title,
      description: post.meta_description || post.excerpt,
      images: [post.featured_image || "/logo.png"],
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
  let relatedPosts = [];
  try {
    const allPosts = await getBlogPosts(false);
    relatedPosts = allPosts
      .filter(p => p.slug !== slug)
      .slice(0, 3);
  } catch (err) {
    console.error("Failed to load related posts:", err);
  }

  return (
    <BlogDetailClient post={post} relatedPosts={relatedPosts} />
  );
}
