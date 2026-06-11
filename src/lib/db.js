import { supabase, isSupabaseConfigured } from './supabaseClient';

// Pre-seeded mock data for premium SEO blog articles
const PRESEEDED_BLOG_POSTS = [
  {
    id: "post-1",
    title: "How much does it really cost to study in the Philippines?",
    slug: "how-much-cost-study-philippines",
    category: "STUDY IN PH",
    excerpt: "A full 2026 breakdown of tuition, living costs, and visa fees by course and city.",
    content: `
<h2>A Complete Cost Breakdown for International Students</h2>
<p>Understanding the financial aspects of studying abroad is crucial for planning. The Philippines is known as one of the most affordable English-medium education hubs in Asia. Here is a comprehensive guide to budgeting for your education and stay in 2026.</p>

<h2>1. Tuition Fees by Program and City</h2>
<p>Tuition fees vary significantly depending on the course and the location of the Higher Education Institution (HEI):</p>
<ul>
  <li><strong>Manila (NCR):</strong> Universities in the capital region offer premium programs ranging from $2,500 to $4,500 per year.</li>
  <li><strong>Cebu & Davao:</strong> Regional centers offer tuition between $1,500 and $3,000 per year.</li>
  <li><strong>Popular Courses:</strong> Medicine (BS/MD) and Dentistry range from $3,000 to $6,000 annually, while Nursing (BSN) and Computer Science range from $1,800 to $3,200.</li>
</ul>

<h2>2. Cost of Living & Accommodation</h2>
<p>Living costs in the Philippines are highly affordable compared to Western countries. A monthly budget of $400 to $700 typically covers all basics:</p>
<ul>
  <li><strong>Rent (Studio Apartment / Condo):</strong> $150 to $350/month depending on location and amenities.</li>
  <li><strong>Food & Groceries:</strong> $150 to $250/month.</li>
  <li><strong>Utilities (Electricity, Water, Internet):</strong> $80 to $150/month.</li>
</ul>

<h2>3. Visa and Administrative Fees</h2>
<p>Don't forget to budget for official immigration fees: the 9(F) Student Visa conversion, Alien Certificate of Registration (ACR I-Card), and medical clearances, which total around $250 to $400 for the first year.</p>
    `,
    featured_image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    meta_title: "How much does it really cost to study in the Philippines?",
    meta_description: "A full 2026 breakdown of tuition, living costs, and visa fees by course and city for studying in the Philippines.",
    faq: [
      {
        question: "Is studying in the Philippines cheaper than in other countries?",
        answer: "Yes, tuition fees and living expenses in the Philippines are typically 50% to 70% lower than in Western nations and other Asian education hubs."
      }
    ],
    tags: ["Tuition Fees", "Cost of Living", "Manila Universities", "Student Budget"],
    author: "Elena Rostova (Global Relocation Lead)",
    published_at: "2026-05-10T12:00:00.000Z",
    created_at: "2026-05-10T12:00:00.000Z",
    updated_at: "2026-05-10T12:00:00.000Z"
  },
  {
    id: "post-2",
    title: "The 9(F) student visa: a complete step-by-step guide",
    slug: "9f-student-visa-step-by-step-guide",
    category: "VISA & DOCUMENTS",
    excerpt: "Everything you need to know to apply for your Philippine student visa with confidence.",
    content: `
<h2>Securing Your 9(F) Student Visa: A Step-by-Step Blueprint</h2>
<p>International students planning to study in the Philippines must secure a 9(F) Student Visa. This visa is mandatory for any foreign national aged 18 or older who is taking up a course higher than high school at an accredited institution.</p>

<h2>Step 1: Obtain a Notice of Acceptance (NOA)</h2>
<p>Your official visa process begins after you secure admission at a Higher Education Institution (HEI) accredited by the Bureau of Immigration (BI). The university will issue your official Notice of Acceptance and submit your documents for processing.</p>

<h2>Step 2: Legalization and Apostille of Documents</h2>
<p>You must prepare and apostille or legalize the following academic and personal documents before your visa application:</p>
<ul>
  <li>High School Transcript of Records and Diploma</li>
  <li>National Police Clearance Certificate from your home country</li>
  <li>Certified Medical Clearance Certificate (including chest X-ray and lab results)</li>
  <li>Proof of financial capacity (bank statements showing sufficient funds)</li>
</ul>

<h2>Step 3: Conversion and Bureau of Immigration Compliance</h2>
<p>You can apply for the visa at the Philippine Embassy/Consulate in your home country, or enter the Philippines on a tourist visa and convert it locally to a 9(F) Student Visa. Our relocation specialists will assist you in visiting the Bureau of Immigration (BI) offices in Manila or Taguig to complete this conversion seamlessly.</p>
    `,
    featured_image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    meta_title: "The 9(F) student visa: a complete step-by-step guide",
    meta_description: "Learn how to apply for and secure your Philippine 9(F) student visa step-by-step with accredited documents.",
    faq: [
      {
        question: "How long does it take to get a 9(F) student visa?",
        answer: "Immigration conversion in Manila usually takes between 2 to 4 weeks after submitting your medical clearances and apostilled documents."
      }
    ],
    tags: ["9F Student Visa", "Immigration conversion", "Bureau of Immigration", "Apostille documents"],
    author: "Dr. Marcus Vance (International Mobility Consultant)",
    published_at: "2026-05-18T10:00:00.000Z",
    created_at: "2026-05-18T10:00:00.000Z",
    updated_at: "2026-05-18T10:00:00.000Z"
  },
  {
    id: "post-3",
    title: "Best times to visit the Philippines & what to pack",
    slug: "best-times-to-visit-philippines-packing-tips",
    category: "TRAVEL TIPS",
    excerpt: "Seasonal travel advice, must-see destinations, and practical packing tips for your trip.",
    content: `
<h2>Planning the Perfect Trip to the Philippines</h2>
<p>With its beautiful white sand beaches, vibrant cities, and lush mountain ranges, the Philippines is a dream destination. To make the most of your trip, it is essential to plan around the seasons and pack the right gear.</p>

<h2>1. Best Times to Visit: Understanding the Seasons</h2>
<p>The Philippines has two main seasons: the dry season and the wet season.</p>
<ul>
  <li><strong>Dry Season (December to May):</strong> This is the best time for beach trips and island-hopping (Palawan, Boracay, Siargao). The coolest months are December to February, while the hot summer peaks from March to May.</li>
  <li><strong>Wet/Typhoon Season (June to November):</strong> Expect heavy rain and tropical storms, especially in July and August. However, flight and hotel rates are significantly cheaper, and destinations like Siargao offer excellent surfing conditions.</li>
</ul>

<h2>2. Essential Packing Checklist</h2>
<p>When packing for the tropics, lightweight and functional items are key:</p>
<ul>
  <li><strong>Clothing:</strong> Breathable cotton or linen clothes, swimwear, a light rain jacket, and comfortable walking sandals or shoes.</li>
  <li><strong>Protection:</strong> Reef-safe sunscreen, high-quality mosquito repellent, and polarized sunglasses.</li>
  <li><strong>Gear:</strong> A waterproof dry bag for island hopping, universal travel adapters, and a fast-charging power bank.</li>
</ul>
    `,
    featured_image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=80",
    meta_title: "Best times to visit the Philippines & what to pack - Travel Tips",
    meta_description: "Seasonal travel recommendations, top island destinations, and essential packing checklists for your holiday in the Philippines.",
    faq: [
      {
        question: "When is the cheapest month to fly to the Philippines?",
        answer: "The rainy months from July to October generally offer the lowest flights and hotel rates."
      }
    ],
    tags: ["Philippines Travel", "Best time to visit", "Packing Checklist", "Island Hopping"],
    author: "Elena Rostova (Global Relocation Lead)",
    published_at: "2026-05-25T11:00:00.000Z",
    created_at: "2026-05-25T11:00:00.000Z",
    updated_at: "2026-05-25T11:00:00.000Z"
  },
  {
    id: "post-4",
    title: "Pharmacy Pathways: Study & Licensure Relocation Blueprints",
    slug: "pharmacy-study-relocation-licensure-blueprint",
    category: "Study & Relocation",
    excerpt: "Your definitive guide to pursuing international Pharmacy degrees and navigating global pharmacy licensing (like PEBC, NAPLEX) with structured visa files.",
    content: `
<h2>A Gateway to Global Pharmaceutical Careers</h2>
<p>As the global healthcare infrastructure expands, pharmacists have emerged as critical front-line clinical advisors. From hospital pharmacies to corporate biotech research, obtaining a Bachelor or Doctor of Pharmacy (PharmD) from a top-tier accredited university represents an exceptional global mobility pathway.</p>

<p>Whether you are looking to study pharmacy in the Philippines to secure affordable, world-class English-medium training, or planning your relocation outside the country to practice in the US, UK, or Canada—our travel and relocation desk has outlined your comprehensive blueprint below.</p>

<h2>1. Canada Pharmacy Licensing (PEBC Pathway)</h2>
<p>For international graduates seeking to practice in Canada, the Pharmacy Examining Board of Canada (PEBC) handles credentials evaluations:</p>
<ul>
  <li><strong>Document Evaluation:</strong> Assess your academic transcripts and pharmacy degree credentials for equivalence.</li>
  <li><strong>PEBC Evaluating Examination (EE):</strong> A comprehensive written test assessing pharmaceutical knowledge.</li>
  <li><strong>PEBC Qualifying Examination:</strong> Completed in two parts: Part I (Multiple Choice Questions) and Part II (OSCE - Objective Structured Clinical Examination).</li>
  <li><strong>Practical Training:</strong> Complete regional internship requirements to register as a clinical pharmacist.</li>
</ul>

<h2>2. UK OSPAP Pathway for International Pharmacists</h2>
<p>Immigration to the United Kingdom as a pharmacist requires completing the Overseas Pharmacists Assessment Programme (OSPAP):</p>
<ol>
  <li><strong>Eligibility Check:</strong> Apply to the General Pharmaceutical Council (GPhC) for qualification screening.</li>
  <li><strong>OSPAP Postgraduate Diploma:</strong> Complete a structured 1-year university course in the UK.</li>
  <li><strong>Pre-Registration Placement:</strong> Complete a 52-week paid clinical training period under GPhC supervision.</li>
  <li><strong>GPhC Registration Assessment:</strong> Pass the final professional licensing board exam.</li>
  </ol>
    `,
    featured_image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80",
    meta_title: "Pharmacy Studies & Global Licensing - Relocation Visa Guide",
    meta_description: "Explore accredited Pharmacy universities and international immigration pathways. Learn about student visas, study plans, and clinical board exams.",
    faq: [
      {
        question: "Is a pharmacy degree from the Philippines globally recognized?",
        answer: "Yes, degrees from accredited universities meet the educational eligibility requirements for licensing boards internationally, including PEBC in Canada and GPhC in the United States."
      }
    ],
    tags: ["Pharmacy", "Pharmacist Licensure", "PEBC Canada", "UK OSPAP"],
    author: "Elena Rostova (Global Relocation Lead)",
    published_at: "2026-05-01T10:00:00.000Z",
    created_at: "2026-05-01T10:00:00.000Z",
    updated_at: "2026-05-01T10:00:00.000Z"
  },
  {
    id: "post-5",
    title: "Navigating Student Visa (9F) Timelines for Studying in the Philippines: Expat Guide",
    slug: "student-visa-9f-timelines-philippines-guide",
    category: "Travel & Relocation",
    excerpt: "A step-by-step master guide on securing your 9F student visa, document legalization, and medical clearances to study in the Philippines.",
    content: `
<h2>Your Pathway to Studying in the Philippines</h2>
<p>The Philippines has rapidly emerged as one of the most cost-effective and premium English-medium educational destinations in the world. If you have been accepted into a program (whether Nursing, CS, Dentistry, or MBBS), securing your <strong>9F Student Visa</strong> is the next critical milestone.</p>

<p>Our travel logistics and immigration experts have compiled this step-by-step timeline to guide your student visa application and conversion, ensuring a seamless relocation.</p>

<h2>Step 1: Receive Your Notice of Acceptance (NOA)</h2>
<p>Your official visa process begins only after you have been admitted by a Higher Education Institution (HEI) accredited by the Bureau of Immigration (BI). The university will issue your Notice of Acceptance and submit your documents to the Commission on Higher Education (CHED).</p>

<h2>Step 2: Legalization and Apostille of Documents</h2>
<p>Before submitting documents to the Philippine embassy in your home country, you must legalize the following papers through the Apostille convention:</p>
<ul>
  <li>High School transcripts and Certificate of Graduation.</li>
  <li>National Police Clearance or NBI Clearance equivalent.</li>
  <li>Certified Medical Clearance Certificate, including chest X-ray and lab results.</li>
  <li>Affidavit of Support or financial statements showing sufficient educational funds.</li>
</ul>

<h2>Step 3: Conversion and Bureau of Immigration Compliance</h2>
<p>Upon landing in the Philippines on a standard entry visa, our relocation coordinators will assist you in visiting the Bureau of Immigration (BI) offices in Manila or Taguig to complete your conversion to a 9F Student Visa. You will be issued an Alien Certificate of Registration (ACR-I Card) which acts as your official identity card and allows for multiple entries into the country during your academic program.</p>
    `,
    featured_image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=800&q=80",
    meta_title: "Philippine 9F Student Visa Guide - Timelines & Legalization",
    meta_description: "A complete step-by-step expat guide to applying for a 9F Student Visa to study in the Philippines, including CHED approvals and BI conversions.",
    faq: [
      {
        question: "How long does it take to convert to a 9F student visa?",
        answer: "Typically, the Bureau of Immigration processing takes between 2 to 4 weeks once all Apostilled local credentials and medical clearances are submitted."
      }
    ],
    tags: ["Student Visa", "9F Visa", "Immigration Check", "Apostille Guidelines"],
    author: "Elena Rostova (Global Relocation Lead)",
    published_at: "2026-04-20T11:00:00.000Z",
    created_at: "2026-04-20T11:00:00.000Z",
    updated_at: "2026-04-20T11:00:00.000Z"
  }
];

const PRESEEDED_INQUIRIES = [
  {
    id: "inq-1",
    name: "Jonathan Harker",
    email: "jharker@example.com",
    phone: "+44 20 7946 0958",
    service: "Travel & Tours Packages",
    message: "I need assistance booking a luxury custom travel package for our executive board to tour El Nido and Boracay.",
    status: "new",
    created_at: "2026-05-25T11:45:00.000Z"
  },
  {
    id: "inq-2",
    name: "Sophia Martinez",
    email: "sophia.m@example.com",
    phone: "+1 (555) 321-7654",
    service: "Study Abroad (Focus: Philippines)",
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
  
  // Clean client cache if it still holds outdated preseeded posts, forcing sync with new articles
  if (posts && (!posts.includes('how-much-cost-study-philippines') || !posts.includes('9f-student-visa-step-by-step-guide'))) {
    localStorage.removeItem('agency_blog_posts');
    posts = null;
  }
  
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
        // Return all posts that are not drafts (published_at is not null)
        query = query.not('published_at', 'is', null);
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
      console.error("getBlogPosts: Supabase connection failed:", err);
      throw new Error(`Supabase Database Query Failed: ${err.message || err}`);
    }
  }

  // Fallback Mock Logic
  const db = getLocalStorageDB();
  if (includeDrafts) return db.posts;
  return db.posts.filter(p => p.published_at !== null);
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
      console.error(`getBlogPostBySlug: Supabase fetch failed for slug "${slug}":`, err);
      throw new Error(`Supabase Fetch Failed: ${err.message || err}`);
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
      console.error(`getBlogPostById: Supabase fetch failed for ID "${id}":`, err);
      throw new Error(`Supabase Fetch Failed: ${err.message || err}`);
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
      console.error("saveBlogPost: Supabase insert/update failed:", err);
      throw new Error(`Supabase Save Failed: ${err.message || err}`);
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
      console.error(`deleteBlogPost: Supabase delete failed for ID "${id}":`, err);
      throw new Error(`Supabase Delete Failed: ${err.message || err}`);
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
      console.error("submitInquiry: Supabase submission failed:", err);
      throw new Error(`Supabase Inquiry Submission Failed: ${err.message || err}`);
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
      console.error("getInquiries: Supabase fetch failed:", err);
      throw new Error(`Supabase Fetch Failed: ${err.message || err}`);
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
      console.error(`updateInquiryStatus: Supabase status update failed for ID "${id}":`, err);
      throw new Error(`Supabase Status Update Failed: ${err.message || err}`);
    }
  }

  // Fallback Mock Logic
  const db = getLocalStorageDB();
  db.inquiries = db.inquiries.map(inq => inq.id === id ? { ...inq, status } : inq);
  saveLocalStorageDB(db);
  const updated = db.inquiries.find(inq => inq.id === id);
  return updated || null;
}
