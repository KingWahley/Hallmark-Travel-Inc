import BlogIndex from "./BlogClient";

export const metadata = {
  title: "Resources & Articles",
  description: "Read our latest articles on studying in the Philippines, student visa (9F) filing, document authentication, cost estimation, and travel tips.",
  alternates: {
    canonical: "https://www.hallmarkconsultancy.com/blog",
  },
  openGraph: {
    title: "Resources & Articles | Hallmark Travel Inc",
    description: "Read our latest articles on studying in the Philippines, student visa (9F) filing, document authentication, cost estimation, and travel tips.",
    url: "https://www.hallmarkconsultancy.com/blog",
    type: "website",
  }
};

export default function Page() {
  return <BlogIndex />;
}
