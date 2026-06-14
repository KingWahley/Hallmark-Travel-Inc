import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import Services from '@/components/home/Services';
import Process from '@/components/home/Process';
import CostEstimator from '@/components/home/CostEstimator';
import ExpatCorner from '@/components/home/ExpatCorner';
import Testimonials from '@/components/home/Testimonials';
import Guides from '@/components/home/Guides';
import Faq from '@/components/home/Faq';
import Cta from '@/components/home/Cta';
import { getBlogPosts } from '@/lib/db';

export const metadata = {
  title: {
    absolute: "Hallmark Travel Inc. — Study in the Philippines & Travel Packages",
  },
  description: "Hallmark Travel Inc. helps international students study in the Philippines — school placement, student visa, and arrival support — plus travel & tour packages. More than 10 years of experience.",
  alternates: {
    canonical: "https://www.hallmarkconsultancy.com",
  },
};

export default async function Home() {
  let posts = [];
  try {
    const data = await getBlogPosts(false);
    posts = data.slice(0, 3);
  } catch (err) {
    console.error("Failed to load blog posts:", err);
  }

  return (
    <div className="relative overflow-hidden bg-[#faf8f2] text-[#181e4b] min-h-screen">
      <Hero />
      <Stats />
      <Services />
      <Process />
      <CostEstimator />
      <ExpatCorner />
      <Testimonials />
      <Guides posts={posts} loading={false} />
      <Faq />
      <Cta />
    </div>
  );
}
