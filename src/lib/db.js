import { supabase, isSupabaseConfigured } from './supabaseClient';

// Pre-seeded mock data for premium SEO blog articles
const PRESEEDED_BLOG_POSTS = [
  {
    id: "post-1",
    title: "Can I Get a Job in the US as a Philippines Graduate? The Global Mobility Blueprint",
    slug: "job-in-us-as-philippines-graduate-mobility-blueprint",
    category: "Study & Relocation",
    excerpt: "An exhaustive breakdown of how graduates from the Philippines—specifically in Nursing, MBBS/Medicine, Pharmacy, and Dentistry—can secure premium employment and licensing in the United States.",
    content: `
<h2>Bridging the Gap: Philippine Credentials to US Careers</h2>
<p>For decades, the Philippines has been a primary global exporter of world-class professional talent. If you have graduated from or are planning to pursue higher education in the Philippines, you may ask: <strong>Can I get a job in the US as a Philippines graduate?</strong></p>

<p>The short answer is <strong>yes</strong>. However, the path requires navigating distinct professional credential evaluations, licensing examinations, and immigration pathways. Below, we break down the exact step-by-step career routes for healthcare and technical professionals seeking global mobility to the United States.</p>

<h2>1. Nursing (BSN): The Premier US Relocation Track</h2>
<p>Philippine-trained nurses represent the backbone of many US healthcare facilities. The curriculum of a Bachelor of Science in Nursing (BSN) in the Philippines is highly aligned with western standards. To relocate as a registered nurse (RN) in the US, graduates must complete the following:</p>
<ul>
  <li><strong>Credentials Evaluation:</strong> Submit your transcript to the Commission on Graduates of Foreign Nursing Schools (CGFNS) for a CES report, verifying that your degree is equivalent to a US BSN.</li>
  <li><strong>NCLEX-RN Examination:</strong> Register with a US State Board of Nursing (such as New York or Texas, which do not require Social Security Numbers for foreign applicants) and pass the NCLEX-RN exam.</li>
  <li><strong>English Proficiency:</strong> Pass an approved language exam like IELTS (Academic) or TOEFL.</li>
  <li><strong>Visa Sponsorship:</strong> Relocate via the EB-3 immigrant visa (Green Card) or H-1B specialty occupation visa sponsored by US hospitals.</li>
</ul>

<h2>2. MBBS / MD: Practicing Medicine in the United States</h2>
<p>Graduates from Philippine medical schools (holding a Doctor of Medicine or MD degree) are considered International Medical Graduates (IMGs) in the US. The transition requires the ECFMG certification pathway:</p>
<ol>
  <li><strong>ECFMG Registration:</strong> Ensure your Philippine medical school is listed in the World Directory of Medical Schools.</li>
  <li><strong>USMLE Exams:</strong> Pass the United States Medical Licensing Examination (USMLE) Step 1 (basic sciences) and Step 2 CK (clinical knowledge).</li>
  <li><strong>Residency Match:</strong> Apply through the Electronic Residency Application Service (ERAS) to secure a residency position via the National Resident Matching Program (NRMP).</li>
  <li><strong>Clinical Visa:</strong> Obtain a J-1 clinical visa or H-1B visa sponsored by your matching hospital.</li>
</ol>

<h2>3. Pharmacy & Dentistry Careers in the US</h2>
<p>For Pharmacy and Dentistry graduates, the pathways are highly structured:</p>
<ul>
  <li><strong>Pharmacy:</strong> Foreign Pharmacy Graduate Examination Committee (FPGEC) certification is mandatory. This requires passing the FPGEE, taking the TOEFL iBT, and subsequently completing a set number of internship hours in a US state before taking the NAPLEX and MPJE licensing exams.</li>
  <li><strong>Dentistry (DMD):</strong> Foreign-trained dentists must pass the Integrated National Board Dental Examination (INBDE). Most US states then require graduates to complete a 2-year Advanced Standing Program (DDS/DMD) at an accredited US dental school to qualify for state clinical licensing.</li>
</ul>

<h2>Step-by-Step US Job Placement Roadmap</h2>
<table>
  <thead>
    <tr>
      <th>Course / Field</th>
      <th>US Licensing Exam</th>
      <th>Evaluation Agency</th>
      <th>Primary US Visa</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Nursing</strong></td>
      <td>NCLEX-RN</td>
      <td>CGFNS / WES</td>
      <td>EB-3 Green Card / H-1B</td>
    </tr>
    <tr>
      <td><strong>Medicine / MD</strong></td>
      <td>USMLE Step 1 & 2</td>
      <td>ECFMG / EPIC</td>
      <td>J-1 Exchange / H-1B</td>
    </tr>
    <tr>
      <td><strong>Pharmacy</strong></td>
      <td>FPGEE + NAPLEX</td>
      <td>NABP / FPGEC</td>
      <td>H-1B / EB-3</td>
    </tr>
    <tr>
      <td><strong>Dentistry</strong></td>
      <td>INBDE + Advanced DDS</td>
      <td>ECE / WES</td>
      <td>H-1B / H-4 EAD</td>
    </tr>
  </tbody>
</table>
    `,
    featured_image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80",
    meta_title: "Can I Get a US Job as a Philippines Graduate? Licensing & Visa Guide",
    meta_description: "An exhaustive breakdown of how graduates from the Philippines in Nursing, Medicine, Pharmacy, and Dentistry can secure premium employment and licensing in the US.",
    faq: [
      {
        question: "Do I need a US green card before applying for US licensing?",
        answer: "No. You can sit for the NCLEX-RN or USMLE exams as an international candidate. Once you pass, US healthcare recruiters or hospital networks will sponsor your visa (EB-3 or H-1B) to bring you to the US."
      },
      {
        question: "Is the Philippine nursing curriculum taught in English?",
        answer: "Yes, all university-level nursing instruction in the Philippines is conducted 100% in English, matching US textbook standards, which simplifies credentials evaluation."
      }
    ],
    tags: ["US Careers", "NCLEX", "USMLE", "Visa Sponsorship", "Global Licensure"],
    author: "Elena Rostova (Global Relocation Lead)",
    published_at: "2026-05-10T12:00:00.000Z",
    created_at: "2026-05-10T12:00:00.000Z",
    updated_at: "2026-05-10T12:00:00.000Z"
  },
  {
    id: "post-2",
    title: "What Jobs Can I Get with a Bachelor’s Degree from the Philippines?",
    slug: "jobs-with-bachelors-degree-from-philippines-career-guide",
    category: "Travel & Relocation",
    excerpt: "Discover the high-paying international and domestic career pathways available to graduates holding degrees in Accountancy, MBA, Computer Science, and Tourism & Hospitality.",
    content: `
<h2>Unlocking Your Philippine Degree's Global Value</h2>
<p>If you are holding or pursuing a university degree in the Philippines, you are positioned in one of the most dynamic educational hubs in Asia. A major question faced by foreign and domestic students alike is: <strong>What jobs can I get with a bachelor’s degree from the Philippines?</strong></p>

<p>Philippine degrees carry tremendous international weight due to their strict alignment with global standards, particularly in tech, finance, business, and service sectors. Below, we explore the specific career pathways for Accountancy, MBA, Computer Science, and Tourism/Hospitality graduates.</p>

<h2>1. Accountancy & MBA: The Global Corporate & Advisory Track</h2>
<p>The Philippines is a primary global hub for business process outsourcing and financial operations. A Bachelor of Science in Accountancy (BSA) or an MBA from the Philippines opens doors to:</p>
<ul>
  <li><strong>Multinational Audit & Advisory:</strong> Major international firms like EY, PwC, Deloitte, and KPMG have extensive operational divisions in Taguig (BGC) and Makati. Local graduates are highly recruited for international client advisory, financial analytics, and taxation roles.</li>
  <li><strong>Global Management Consultancies:</strong> MBA graduates are recruited by multinational enterprises for regional project management, corporate strategy, and business development roles.</li>
  <li><strong>Remote Financial Consulting:</strong> The rise of remote accounting platforms has allowed Philippine CPAs and financial analysts to work directly for firms in the US, Australia, and the UK, commanding premium hourly rates.</li>
</ul>

<h2>2. Computer Science: Software Engineering & Global Tech Visas</h2>
<p>Computer Science and Tech degrees from the Philippines are highly valued internationally because programming languages are universal. Graduates can secure:</p>
<ul>
  <li><strong>Global Tech Sponsorships:</strong> Countries like Germany, Singapore, and Canada actively sponsor experienced software engineers, cloud developers, and cybersecurity analysts. Having a Philippine Bachelor's degree verified by WES allows for rapid points-based visa processing (like Canada's Express Entry).</li>
  <li><strong>Remote Software Development:</strong> Technical graduates work directly for international tech startups as full-stack developers, UI/UX designers, or DevOps engineers, earning high incomes without relocating.</li>
  <li><strong>Tech BPO Leadership:</strong> Leading technical hubs in Manila recruit IT graduates for enterprise database administration, system architecture, and tech leadership roles.</li>
</ul>

<h2>3. International Tourism & Hospitality Management</h2>
<p>The Philippines is globally recognized as the gold standard for luxury hospitality, cruise staffing, and tourism logistics:</p>
<ol>
  <li><strong>Global Cruise Lines:</strong> Hospitality graduates are highly recruited for executive management, guest relations, and culinary leadership roles on major luxury cruise vessels globally.</li>
  <li><strong>Luxury International Hotels:</strong> Career paths in five-star hotels across the Middle East (Dubai, Doha), Singapore, and the US (via J-1 internships) are widely open to graduates.</li>
  <li><strong>Tourism Desks & Destination Management:</strong> Corporate logistics roles in travel agencies, airline operations, and corporate travel desks globally.</li>
</ol>
    `,
    featured_image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    meta_title: "What Jobs Can I Get with a Bachelor's Degree from the Philippines?",
    meta_description: "A comprehensive guide to high-paying international careers for Philippine graduates in Accountancy, MBA, Computer Science, and Tourism & Hospitality.",
    faq: [
      {
        question: "Can an international student work in the Philippines after graduation?",
        answer: "Yes, graduates can transition to a Special Work Permit (SWP) or an Alien Employment Permit (AEP) if they secure corporate job offers in multinational companies or local enterprises."
      },
      {
        question: "Are remote jobs from US and Australia open to Philippine CPAs?",
        answer: "Yes. Many international companies hire Philippine CPAs and financial analysts remotely for international bookkeeping, cloud auditing, and strategic corporate taxation roles."
      }
    ],
    tags: ["Career Guide", "Accountancy", "Tech Careers", "Hospitality", "Remote Work"],
    author: "Dr. Marcus Vance (International Mobility Consultant)",
    published_at: "2026-05-18T10:00:00.000Z",
    created_at: "2026-05-18T10:00:00.000Z",
    updated_at: "2026-05-18T10:00:00.000Z"
  },
  {
    id: "post-3",
    title: "Is a Philippines Degree Accepted in Other Countries? Equivalency & WES Master Guide",
    slug: "philippines-degree-accepted-in-other-countries-equivalency",
    category: "Study & Relocation",
    excerpt: "A master guide outlining the global academic equivalency of Philippine university degrees across the US, UK, Canada, Australia, and the Middle East.",
    content: `
<h2>Universal Recognition of Philippine Degrees</h2>
<p>When planning your international educational path, the foremost question is often: <strong>Is a Philippines degree accepted in other countries?</strong></p>

<p>The answer is a resounding <strong>yes</strong>. The academic system in the Philippines is closely modeled on the United States educational system. Since the implementation of the K-12 program (aligning primary and secondary education with 12-year global benchmarks), Philippine university degrees are recognized as equivalent to US and Canadian four-year bachelor's degrees by leading credentials evaluation agencies worldwide.</p>

<h2>1. Credential Evaluations: The Key to Equivalency (WES, ECE, CES)</h2>
<p>To officially present your degree to foreign employers, licensing boards, or universities, you must obtain a credentials evaluation report:</p>
<ul>
  <li><strong>World Education Services (WES):</strong> WES evaluates degrees for Canada and the United States. Accredited Philippine universities are routinely evaluated as equivalent to a **Four-Year US/Canadian Bachelor's Degree**, qualifying you for Master's programs and corporate positions.</li>
  <li><strong>Educational Credential Evaluators (ECE):</strong> Commonly utilized for medical, dental, and specialized technical fields in the US.</li>
  <li><strong>Commission on Graduates of Foreign Nursing Schools (CGFNS):</strong> Specifically evaluates nursing credentials for US state licensing boards.</li>
</ul>

<h2>2. International Board Recognition and Accords</h2>
<p>Many professional fields in the Philippines are signatory to or aligned with global accords:</p>
<ol>
  <li><strong>Medical and Healthcare Boards:</strong> Degrees in MBBS/Medicine, Dentistry, and Pharmacy from accredited institutions are recognized by major licensing boards across the Middle East (DHA in Dubai, NHRA in Bahrain), the UK (GMC, GDC), and Australia.</li>
  <li><strong>Accountancy Alignments:</strong> Philippine CPAs are highly regarded, and credits are easily validated by foreign accounting boards (such as CPA Australia or state boards in the US).</li>
  <li><strong>Washington Accord Alignment:</strong> Engineering and technical curricula follow international outcomes-based models, facilitating easy equivalency in the UK, Australia, and the EU.</li>
</ol>

<h2>Why the English-Medium Curriculum Matters</h2>
<p>Because English is the official language of instruction in all universities in the Philippines, you completely bypass the need for tedious translation processes. Your syllabus, transcripts, and diplomas are issued natively in English, saving thousands in certification fees and dramatically speeding up your visa and relocation timeline.</p>
    `,
    featured_image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    meta_title: "Is a Philippines Degree Accepted in Other Countries? WES Equivalency Guide",
    meta_description: "Learn how university degrees from the Philippines are evaluated as equivalent to US & Canadian degrees by WES, CGFNS, and international licensing boards.",
    faq: [
      {
        question: "Does WES evaluate a Philippine Bachelor's as equivalent to a US Bachelor's?",
        answer: "Yes, for accredited universities, WES routinely evaluates standard 4-year Bachelor of Science degrees from the Philippines as equivalent to a 4-year US Bachelor's degree."
      },
      {
        question: "Do I need to translate my transcripts from the Philippines?",
        answer: "No, all university transcripts, syllabi, and graduation certificates in the Philippines are natively issued in English, which simplifies global credentials checks."
      }
    ],
    tags: ["Degree Acceptance", "WES", "Equivalency", "Credential Check", "Study Abroad"],
    author: "Dr. Marcus Vance (International Mobility Consultant)",
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
  if (posts && (!posts.includes('job-in-us-as-philippines-graduate') || !posts.includes('pharmacy-study-relocation-licensure-blueprint'))) {
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
