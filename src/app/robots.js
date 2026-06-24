export default function robots() {
  const baseUrl = "https://www.hallmarkconsultancy.com";
  
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/dashboard",
        "/dashboard/",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
