'use client';

import { useState, useEffect } from 'react';
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

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getBlogPosts(false);
        setPosts(data.slice(0, 3));
      } catch (err) {
        console.error("Failed to load blog posts:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#faf8f2] text-[#181e4b] min-h-screen">
      <Hero />
      <Stats />
      <Services />
      <Process />
      <CostEstimator />
      <ExpatCorner />
      <Testimonials />
      <Guides posts={posts} loading={loading} />
      <Faq />
      <Cta />
    </div>
  );
}
