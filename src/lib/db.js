import { supabase, isSupabaseConfigured } from './supabaseClient';

// Pre-seeded mock data for premium SEO blog articles
const PRESEEDED_BLOG_POSTS = [
  {
    id: "post-1",
    title: "Nursing in the Philippines: The Ultimate Global Relocation & Career Pathway",
    slug: "nursing-in-the-philippines-relocation-pathway",
    category: "Study & Relocation",
    excerpt: "Discover why the Philippines is recognized globally as a premier education hub for healthcare professionals, and how to navigate the visa, study, and international licensing journey.",
    content: `
<h2>The Global Demand for Healthcare Professionals</h2>
<p>In recent years, the global demand for qualified nurses has soared to unprecedented levels. Healthcare organizations across North America, the United Kingdom, the Middle East, and Australia are actively searching for dedicated, highly-skilled medical professionals. Amidst this rising tide, the Philippines has established itself as an unparalleled international powerhouse for nursing education and global relocation pathways.</p>

<p>Studying nursing in the Philippines offers a distinct advantage for international students and aspiring global citizens alike. In this comprehensive guide, we will unpack how this tropical educational center equips you with world-class medical training and robust global mobility credentials.</p>

<h2>Why Pursue Nursing in the Philippines?</h2>
<p>The nursing educational system in the Philippines is structured specifically to meet global benchmarks. Here is what makes the destination stand out:</p>
<ul>
  <li><strong>English-Medium Instruction:</strong> Unlike many countries where language barriers hinder academic growth, all medical and nursing courses in the Philippines are taught 100% in English, matching western university curricula.</li>
  <li><strong>High clinical exposure:</strong> Nursing curricula include extensive, hands-on clinical clerkships in major tertiary hospitals, ensuring clinical readiness.</li>
  <li><strong>Affordable Premium Living:</strong> Compared to high western tuition costs, the Philippines offers elite, internationally recognized medical education at a fraction of the cost, making your global relocation capital-efficient.</li>
</ul>

<h2>Relocation Checklist & Licensing Pipelines</h2>
<p>Transitioning from a student in the Philippines to a registered nurse in the US, UK, or Canada involves a clear, strategic path. Your checklist should include:</p>
<ol>
  <li><strong>Securing a Student Visa (9F):</strong> Supported fully by our relocation advisors, ensuring proper embassy approvals.</li>
  <li><strong>Completing the Bachelor of Science in Nursing (BSN):</strong> A comprehensive 4-year degree focusing on intensive clinical practices.</li>
  <li><strong>Succeeding in NCLEX & IELTS Exams:</strong> Philippine medical schools structure their prep programs explicitly around international licensing standardizations.</li>
</ol>
    `,
    featured_image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    meta_title: "Nursing in the Philippines Guide - Relocation & Study Visa Path",
    meta_description: "Your comprehensive relocation checklist and study visa guide to pursuing nursing in the Philippines. Learn about English-medium curricula, licensing, and international placements.",
    faq: [
      {
        question: "Is a nursing degree from the Philippines recognized in the United States?",
        answer: "Yes. The Bachelor of Science in Nursing (BSN) from accredited Philippine universities meets the educational requirements for the CGFNS and NCLEX exam boards, allowing graduates to register as nurses in the US and Canada."
      },
      {
        question: "What are the language requirements for nursing programs in the Philippines?",
        answer: "All educational programs are conducted in English. However, students must fulfill clinical requirements in regional hospitals, where speaking conversational English is widely practiced."
      }
    ],
    tags: ["nursing", "philippines", "medical study", "relocation guide"],
    author: "Elena Rostova (Global Relocation Lead)",
    published_at: "2026-01-10T12:00:00.000Z",
    created_at: "2026-01-10T12:00:00.000Z",
    updated_at: "2026-01-10T12:00:00.000Z"
  },
  {
    id: "post-2",
    title: "The Comprehensive MBBS Guide: Navigating Medicine Studies Abroad",
    slug: "mbbs-guide-medicine-studies-abroad",
    category: "Study & Relocation",
    excerpt: "Thinking of studying medicine abroad? Our premium guide details the top global destinations, application requirements, and global mobility paths for prospective doctors.",
    content: `
<h2>The Journey to Becoming a Global Physician</h2>
<p>Securing a seat in an international medical school is one of the most rewarding pursuits for students worldwide. An MBBS (Bachelor of Medicine, Bachelor of Surgery) degree completed in a leading global institution represents the ultimate stepping stone toward global medical mobility.</p>

<p>Whether your goal is to practice medicine in Europe, the United States, or Asia, our comprehensive relocation assistance team has compiled this premier guide to outline the exact milestones required to turn your medical dream into reality.</p>

<h2>Top Global Destinations for MBBS</h2>
<p>Choosing where to relocate for your medical studies depends on academic recognition, clinical licensing agreements, and quality of lifestyle. The top relocation destinations include:</p>
<ul>
  <li><strong>The Philippines:</strong> Renowned for US-modeled medical systems, high clinical exposure, and stellar USMLE pass rates.</li>
  <li><strong>Central & Eastern Europe:</strong> Countries like Poland, Hungary, and Georgia offer prestigious English-medium medical degrees recognized across the EU.</li>
  <li><strong>United Kingdom & Caribbean:</strong> High-prestige acceleration tracks that prepare students for prompt residency matches.</li>
</ul>

<h2>Embarking on the Application Process</h2>
<p>Successful medical relocation requires navigating complex visa processes and credential audits. A typical migration timeline requires:</p>
<ol>
  <li>Academic evaluation of your high school sciences (Biology, Chemistry, Physics).</li>
  <li>Securing medical student visa approvals and certified health records.</li>
  <li>Applying for licensing validation frameworks (like ECFMG for the United States).</li>
</ol>
    `,
    featured_image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
    meta_title: "Ultimate MBBS Guide - Medicine Studies & Relocation Abroad",
    meta_description: "Navigate global medical relocation with our comprehensive MBBS guide. Learn about visa pathways, USMLE preparation, and clinical internships in prime international destinations.",
    faq: [
      {
        question: "What is the duration of an MBBS program abroad?",
        answer: "Typically, MBBS programs last between 5 to 6 years, which includes structured clinical rotations and mandatory internship periods."
      },
      {
        question: "Is clinical licensing assistance provided after graduation?",
        answer: "Yes, our study & relocation assistance packages include step-by-step guidance for USMLE, PLAB, and national licensing board exams to transition you smoothly into hospital residency programs."
      }
    ],
    tags: ["MBBS", "medicine abroad", "relocation advice", "visa support"],
    author: "Dr. Marcus Vance (International Mobility Consultant)",
    published_at: "2026-02-15T09:30:00.000Z",
    created_at: "2026-02-15T09:30:00.000Z",
    updated_at: "2026-02-15T09:30:00.000Z"
  },
  {
    id: "post-3",
    title: "Best Dentistry Schools Globally: Dynamic Relocation & Licensing Guide",
    slug: "best-dentistry-schools-globally-relocation",
    category: "Study & Relocation",
    excerpt: "Explore the highest-rated dental programs globally that offer smooth licensing pathways to practice in the US, UK, and Canada, complete with visa and relocation details.",
    content: `
<h2>The Evolution of Modern Dentistry Studies</h2>
<p>Dentistry has evolved rapidly into a highly technical, aesthetic, and lucrative medical specialty. Obtaining a Doctor of Dental Medicine (DMD) or Doctor of Dental Surgery (DDS) degree from an internationally accredited dental academy is an outstanding path to global professional success.</p>

<p>For individuals planning their relocation and educational journeys, aligning your degree with international licensing requirements is critical. In this article, we cover the top global dentistry schools and outline the visa pathways that make relocations stress-free.</p>

<h2>Key Metrics for Selecting an International Dental School</h2>
<p>When selecting a destination, look for institutions that provide:</p>
<ul>
  <li><strong>Digital Dentistry Labs:</strong> Modern clinics utilize 3D printing, CAD/CAM dentistry, and digital imagery.</li>
  <li><strong>Global License Alignment:</strong> Programs that match NDEB (Canada) or ADAT (US) exam syllabi.</li>
  <li><strong>Integrated Student Visas:</strong> Countries that grant post-study work permits to practice in regional dental groups.</li>
</ul>
    `,
    featured_image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    meta_title: "Top Dentistry Schools Abroad - Relocation & Visa Assistance",
    meta_description: "Uncover top-rated dentistry schools with straightforward immigration pathways. Learn how our relocation team helps you manage dental school applications and visa files.",
    faq: [
      {
        question: "Can I practice dentistry in Canada with an international degree?",
        answer: "Yes, but you must complete the NDEB equivalency process, which includes written exams and clinical skill assessments. Relocating through accredited university paths simplifies this timeline."
      }
    ],
    tags: ["dentistry", "DMD", "immigration pathway", "dental study"],
    author: "Elena Rostova (Global Relocation Lead)",
    published_at: "2026-03-05T14:15:00.000Z",
    created_at: "2026-03-05T14:15:00.000Z",
    updated_at: "2026-03-05T14:15:00.000Z"
  },
  {
    id: "post-4",
    title: "Exploring Hospitality & Culinary Studies Abroad: The Visa Blueprint",
    slug: "hospitality-culinary-studies-visa-blueprint",
    category: "Travel & Relocation",
    excerpt: "Turn your passion for culinary arts and hotel management into a global career. Study in the world's hospitality capitals with our premium relocation assistance.",
    content: `
<h2>A Recipe for Global Career Success</h2>
<p>Hospitality and culinary arts represent one of the world's most dynamic and universally mobile sectors. Studying at an elite hotel school in Switzerland or a master culinary academy in France does not just teach you world-class skills—it unlocks an immediate pathway to global visa sponsorship and relocation.</p>

<p>Our international travel assistance experts have created this guide to demonstrate how you can pair top-tier training with seamless immigration and travel setups.</p>

<h2>Top Regions for Culinary & Hotel Studies</h2>
<ul>
  <li><strong>Switzerland:</strong> The global standard for luxury hospitality administration and business management.</li>
  <li><strong>France & Italy:</strong> Iconic culinary academies that blend traditional heritage with modern gastronomic technologies.</li>
  <li><strong>Singapore & Spain:</strong> High-growth hubs offering rapid internships in premium Michelin-starred establishments.</li>
</ul>
    `,
    featured_image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
    meta_title: "Hospitality & Culinary Studies Abroad - Global Travel & Visa",
    meta_description: "Learn how to secure student visa pathways and culinary placements in Switzerland, France, and Spain with our expert travel and relocation support.",
    faq: [
      {
        question: "Do hospitality programs include paid internships?",
        answer: "Yes, the vast majority of international hotel administration programs include mandatory 6-month paid internships in luxury hotels and resorts."
      }
    ],
    tags: ["hospitality", "culinary arts", "switzerland", "travel logistics"],
    author: "Dr. Marcus Vance (International Mobility Consultant)",
    published_at: "2026-04-18T10:00:00.000Z",
    created_at: "2026-04-18T10:00:00.000Z",
    updated_at: "2026-04-18T10:00:00.000Z"
  },
  {
    id: "post-5",
    title: "Pharmacy Pathways: Study & Licensure Relocation Blueprints",
    slug: "pharmacy-study-relocation-licensure-blueprint",
    category: "Study & Relocation",
    excerpt: "Your definitive guide to pursuing international Pharmacy degrees and navigating global pharmacy licensing (like PEBC, NAPLEX) with structured visa files.",
    content: `
<h2>A Gateway to Global Pharmaceutical Careers</h2>
<p>As the global healthcare infrastructure expands, pharmacists have emerged as critical front-line clinical advisors. From hospital pharmacies to corporate biotech research, obtaining a Bachelor or Doctor of Pharmacy (PharmD) from a top-tier accredited university represents an exceptional global mobility pathway.</p>

<p>Whether you are looking to travel to the Philippines to secure affordable, world-class English-medium pharmacy training, or planning your relocation outside the country to practice in the US, UK, or Canada—our travel and relocation desk has outlined your comprehensive blueprint below.</p>

<h2>Why Study Pharmacy in the Philippines?</h2>
<p>The Philippines is highly recognized as a key hub for pharmaceutical education. The advantages include:</p>
<ul>
  <li><strong>US-Aligned Curricula:</strong> Leading universities offer comprehensive pharmacy programs that seamlessly align with global board requirements.</li>
  <li><strong>Stellar Board Success Rates:</strong> Local colleges structure their academic modules to prepare students directly for international exams.</li>
  <li><strong>Intensive Internship Modules:</strong> Features hands-on clinical and industrial rotations in major corporate laboratories and medical clinics.</li>
</ul>
    `,
    featured_image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80",
    meta_title: "Pharmacy Studies & Global Licensing - Relocation Visa Guide",
    meta_description: "Explore accredited Pharmacy universities and international immigration pathways. Learn about student visas, study plans, and clinical board exams.",
    faq: [
      {
        question: "Is a pharmacy degree from the Philippines globally recognized?",
        answer: "Yes, degrees from accredited universities meet the educational eligibility requirements for licensing boards internationally, including PEBC in Canada and FPGEC in the United States."
      }
    ],
    tags: ["pharmacy", "pharmacist", "relocation guide", "study abroad"],
    author: "Elena Rostova (Global Relocation Lead)",
    published_at: "2026-05-10T11:00:00.000Z",
    created_at: "2026-05-10T11:00:00.000Z",
    updated_at: "2026-05-10T11:00:00.000Z"
  }
];

const PRESEEDED_INQUIRIES = [
  {
    id: "inq-1",
    name: "Jonathan Harker",
    email: "jharker@example.com",
    phone: "+44 20 7946 0958",
    service: "International Travel Assistance",
    message: "I need assistance securing a multi-entry Schengen business visa and arranging travel logistics for our executive team relocating to Lisbon.",
    status: "new",
    created_at: "2026-05-25T11:45:00.000Z"
  },
  {
    id: "inq-2",
    name: "Sophia Martinez",
    email: "sophia.m@example.com",
    phone: "+1 (555) 321-7654",
    service: "Study & Relocation Assistance",
    message: "I am interested in applying to a BSN nursing program in the Philippines. I would love guidance on student visa 9F timelines and accredited university enrollments.",
    status: "contacted",
    created_at: "2026-05-26T15:20:00.000Z"
  }
];

// Helper to initialize local storage database for full dynamic local CMS testing
function getLocalStorageDB() {
  if (typeof window === 'undefined') return { posts: PRESEEDED_BLOG_POSTS, inquiries: PRESEEDED_INQUIRIES };
  
  let posts = localStorage.getItem('agency_blog_posts');
  let inquiries = localStorage.getItem('agency_inquiries');
  
  if (!posts) {
    localStorage.setItem('agency_blog_posts', JSON.stringify(PRESEEDED_BLOG_POSTS));
    posts = JSON.stringify(PRESEEDED_BLOG_POSTS);
  }
  if (!inquiries) {
    localStorage.setItem('agency_inquiries', JSON.stringify(PRESEEDED_INQUIRIES));
    inquiries = JSON.stringify(PRESEEDED_INQUIRIES);
  }
  
  return {
    posts: JSON.parse(posts),
    inquiries: JSON.parse(inquiries)
  };
}

function saveLocalStorageDB(db) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('agency_blog_posts', JSON.stringify(db.posts));
    localStorage.setItem('agency_inquiries', JSON.stringify(db.inquiries));
  }
}

// ----------------------------------------------------
// DATABASE API INTERFACE (SUPABASE + MOCK FALLBACKS)
// ----------------------------------------------------

export async function getBlogPosts(includeDrafts = false) {
  if (isSupabaseConfigured) {
    try {
      let query = supabase.from('blog_posts').select('*').order('published_at', { ascending: false });
      
      if (!includeDrafts) {
        // Only return posts with published_at in the past
        query = query.not('published_at', 'is', null).lte('published_at', new Date().toISOString());
      }
      
      const { data, error } = await query;
      if (error) throw error;

      // Auto-seed table if it is completely empty
      if (data && data.length === 0) {
        console.log("Supabase blog_posts table is empty. Seeding initial travel blueprints...");
        const { error: seedErr } = await supabase.from('blog_posts').insert(PRESEEDED_BLOG_POSTS);
        if (!seedErr) {
          const { data: refetched } = await query;
          if (refetched) return refetched;
        }
      }
      
      return data;
    } catch (err) {
      console.warn("getBlogPosts: Supabase connection failed, falling back to local database.");
    }
  }

  // Fallback Mock Logic
  const db = getLocalStorageDB();
  if (includeDrafts) return db.posts;
  return db.posts.filter(p => p.published_at && new Date(p.published_at) <= new Date());
}

export async function getBlogPostBySlug(slug) {
  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();
      
      if (error) throw error;
      if (data) return data;
    } catch (err) {
      console.warn(`getBlogPostBySlug: Supabase fetch failed for slug "${slug}", falling back to local database.`);
    }
  }

  // Fallback Mock Logic
  const db = getLocalStorageDB();
  return db.posts.find(p => p.slug === slug) || null;
}

export async function getBlogPostById(id) {
  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .maybeSingle();
      
      if (error) throw error;
      if (data) return data;
    } catch (err) {
      console.warn(`getBlogPostById: Supabase fetch failed for ID "${id}", falling back to local database.`);
    }
  }

  const db = getLocalStorageDB();
  return db.posts.find(p => p.id === id) || null;
}

export async function saveBlogPost(postData) {
  const isEditing = !!postData.id;
  const postToSave = {
    ...postData,
    updated_at: new Date().toISOString()
  };

  if (isSupabaseConfigured) {
    try {
      if (isEditing) {
        const { data, error } = await supabase
          .from('blog_posts')
          .update(postToSave)
          .eq('id', postData.id)
          .select()
          .single();
        if (error) throw error;
        return data;
      } else {
        const { id, ...postToInsert } = postToSave; // let Supabase auto-gen uuid
        const { data, error } = await supabase
          .from('blog_posts')
          .insert(postToInsert)
          .select()
          .single();
        if (error) throw error;
        return data;
      }
    } catch (err) {
      console.warn("saveBlogPost: Supabase insert/update failed, writing to local mock database.");
    }
  }

  // Fallback Mock Logic
  const db = getLocalStorageDB();
  if (isEditing) {
    db.posts = db.posts.map(p => p.id === postData.id ? { ...p, ...postToSave } : p);
  } else {
    const newPost = {
      ...postToSave,
      id: "post-" + Date.now(),
      created_at: new Date().toISOString()
    };
    db.posts.push(newPost);
    postToSave.id = newPost.id;
  }
  saveLocalStorageDB(db);
  return postToSave;
}

export async function deleteBlogPost(id) {
  if (isSupabaseConfigured) {
    try {
      const { error } = await supabase.from('blog_posts').delete().eq('id', id);
      if (error) throw error;
      return true;
    } catch (err) {
      console.warn(`deleteBlogPost: Supabase delete failed for ID "${id}", removing from local database.`);
    }
  }

  // Fallback Mock Logic
  const db = getLocalStorageDB();
  db.posts = db.posts.filter(p => p.id !== id);
  saveLocalStorageDB(db);
  return true;
}

export async function submitInquiry(inquiryData) {
  const newInquiry = {
    ...inquiryData,
    status: 'new',
    created_at: new Date().toISOString()
  };

  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase
        .from('inquiries')
        .insert(newInquiry)
        .select()
        .single();
      if (error) throw error;
      return data;
    } catch (err) {
      console.warn("submitInquiry: Supabase submission failed, caching entry in local mock database.");
    }
  }

  // Fallback Mock Logic
  const db = getLocalStorageDB();
  const inquiryWithId = {
    ...newInquiry,
    id: "inq-" + Date.now()
  };
  db.inquiries.unshift(inquiryWithId); // add to top of stack
  saveLocalStorageDB(db);
  return inquiryWithId;
}

export async function getInquiries() {
  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase
        .from('inquiries')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;

      // Auto-seed table if it is completely empty
      if (data && data.length === 0) {
        console.log("Supabase inquiries table is empty. Seeding initial inquiries...");
        const { error: seedErr } = await supabase.from('inquiries').insert(PRESEEDED_INQUIRIES);
        if (!seedErr) {
          const { data: refetched } = await supabase
            .from('inquiries')
            .select('*')
            .order('created_at', { ascending: false });
          if (refetched) return refetched;
        }
      }
      
      return data;
    } catch (err) {
      console.warn("getInquiries: Supabase fetch failed, falling back to local inquiries database.");
    }
  }

  // Fallback Mock Logic
  const db = getLocalStorageDB();
  return db.inquiries;
}

export async function updateInquiryStatus(id, status) {
  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase
        .from('inquiries')
        .update({ status })
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      return data;
    } catch (err) {
      console.warn(`updateInquiryStatus: Supabase status update failed for ID "${id}", modifying local database.`);
    }
  }

  // Fallback Mock Logic
  const db = getLocalStorageDB();
  db.inquiries = db.inquiries.map(inq => inq.id === id ? { ...inq, status } : inq);
  saveLocalStorageDB(db);
  const updated = db.inquiries.find(inq => inq.id === id);
  return updated || null;
}
