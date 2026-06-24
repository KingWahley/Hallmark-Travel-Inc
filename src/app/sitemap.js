import { getBlogPosts } from "@/lib/db";

export default async function sitemap() {
  const baseUrl = "https://www.hallmarkconsultancy.com";
  
  // Define a static last modified date for landing pages (representing last release date).
  // This prevents Google Search Console from thinking the lastmod date is spoofed/fake.
  const staticLastModified = "2026-06-24T00:00:00.000Z";

  // 1. Define Static Landing URLs
  const routes = [
    {
      url: baseUrl,
      lastModified: staticLastModified,
      changeFrequency: "daily",
      priority: 1.0
    },
    {
      url: `${baseUrl}/about`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: staticLastModified,
      changeFrequency: "daily",
      priority: 0.8
    }
  ];

  // 2. Map Dynamic Published Articles
  try {
    const posts = await getBlogPosts(false); // only published
    const postRoutes = posts.map(post => ({
      url: `${baseUrl}/blog/${post.slug}`,
      // Use actual post update/creation dates, falling back to static date if none exists
      lastModified: new Date(post.updated_at || post.created_at || staticLastModified).toISOString(),
      changeFrequency: "weekly",
      priority: 0.6
    }));

    return [...routes, ...postRoutes];
  } catch (err) {
    console.error("Sitemap dynamic parsing failed, falling back to static routes:", err);
    return routes;
  }
}
