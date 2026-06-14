import { getBlogPosts } from "@/lib/db";

export default async function sitemap() {
  const baseUrl = "https://www.hallmarkconsultancy.com";
  
  // 1. Define Static Landing URLs
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1.0
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.8
    }
  ];

  // 2. Map Dynamic Published Articles
  try {
    const posts = await getBlogPosts(false); // only published
    const postRoutes = posts.map(post => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updated_at || post.created_at || new Date()).toISOString(),
      changeFrequency: "weekly",
      priority: 0.6
    }));

    return [...routes, ...postRoutes];
  } catch (err) {
    console.error("Sitemap dynamic parsing failed, falling back to static routes:", err);
    return routes;
  }
}
