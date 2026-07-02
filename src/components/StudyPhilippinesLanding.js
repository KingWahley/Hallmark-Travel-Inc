import Image from "next/image";
import {
  GraduationCap,
  Landmark,
  MapPinned,
  MessageCircle,
  Plane,
  ScrollText,
  Star,
} from "lucide-react";
import styles from "./StudyPhilippinesLanding.module.css";

const whatsappUrl = "https://wa.me/639661389726";

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 0 0 1.333 4.993L2 22l5.13-1.347a9.96 9.96 0 0 0 4.88 1.28c5.508 0 9.99-4.479 9.991-9.986.002-5.507-4.48-9.985-9.989-9.985zm7.154 14.137c-.31.868-1.787 1.62-2.477 1.704-.69.083-1.554.084-2.502-.22a10.99 10.99 0 0 1-5.111-3.237c-.328-.328-.624-.68-.888-1.054a11.164 11.164 0 0 1-1.637-3.155c-.276-.906-.296-1.764-.08-2.482.21-.698.814-1.22 1.135-1.536.321-.316.643-.314.857-.314h.6c.19 0 .428.007.618.455.19.448.653 1.594.71 1.708.058.113.095.245.02.395-.077.15-.156.324-.265.45-.11.127-.23.284-.33.398-.108.125-.224.26-.096.48.128.22.569.939 1.22 1.52.839.75 1.543 1.018 1.763 1.128.22.11.35.093.48-.057.13-.15.565-.66.715-.886.15-.226.3-.188.508-.113.208.075 1.32.622 1.547.735.227.113.378.17.435.264.057.094.057.546-.253 1.414z" />
    </svg>
  );
}

function WhatsAppButton({ children, className = "" }) {
  return (
    <a
      href={whatsappUrl}
      className={`${styles.button} ${styles.whatsAppButton} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsAppIcon className={styles.buttonIcon} />
      {children}
    </a>
  );
}

const helpItems = [
  {
    icon: GraduationCap,
    title: "School and course placement",
    copy: "We match you to an accredited university for your course, including Medicine, Nursing, Engineering, Business, IT, and more.",
  },
  {
    icon: ScrollText,
    title: "9(F) student visa",
    copy: "We guide your visa and documents the right way, so you avoid the costly mistakes that delay or block students.",
  },
  {
    icon: Plane,
    title: "Arrival and settling in",
    copy: "From the airport to your first 30 days, we help with registration, SIM, banking, accommodation, and practical setup.",
  },
  {
    icon: MessageCircle,
    title: "Honest, personal advice",
    copy: "Real guidance from a team that has done this for 10+ years. We tell you the truth, not just what you want to hear.",
  },
];

const testimonials = [
  {
    initials: "EC",
    name: "Edeh Celestine",
    role: "Nigeria - Student visa",
    quote:
      "They were amazing throughout my student visa journey. Their guidance paved the way for my visa grant, and they truly care.",
  },
  {
    initials: "NR",
    name: "Niazi Rehman",
    role: "Pakistan - Education",
    quote:
      "I've used other agencies before, but they're so attentive to concerns. I am demanding, yet they never made me feel that way.",
  },
  {
    initials: "PS",
    name: "Priya Singh",
    role: "India - School placement",
    quote:
      "From choosing my university to landing in Manila, they guided every step. Clear, stress-free, and always a WhatsApp message away.",
  },
];

const faqs = [
  {
    question: "Is it really cheaper than studying in the West?",
    answer:
      "Yes. Tuition for English-taught degrees in the Philippines is typically far lower than in the US or UK, and living costs are also more manageable for many international students.",
  },
  {
    question: "Do I need a visa, and can you help with it?",
    answer:
      "Most international students need a 9(F) Student Visa. We guide you through the visa and document process, including entry-visa details that can confuse first-time applicants.",
  },
  {
    question: "Are the degrees recognised in my country?",
    answer:
      "Philippine degrees, including medical degrees, are recognised in many countries across Africa and South Asia. We recommend confirming with your home country's professional council, and we can help you check.",
  },
  {
    question: "How do I get started?",
    answer:
      "Tap the WhatsApp button and tell us your course and country. It is free to ask, and we will give you an honest picture of your options.",
  },
];

export default function StudyPhilippinesLanding() {
  return (
    <div className={styles.page}>
      <header className={styles.topbar}>
        <div className={`${styles.wrap} ${styles.topbarRow}`}>
          <a href="#top" className={styles.brand} aria-label="Hallmark Travel Inc. home">
            <Image src="/logo.png" alt="Hallmark Travel Inc." width={48} height={48} priority />
            <span>Hallmark Travel Inc.</span>
          </a>
          <a href={whatsappUrl} className={styles.miniButton} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className={styles.miniIcon} />
            WhatsApp us
          </a>
        </div>
      </header>

      <main id="top">
        <section className={styles.hero}>
          <div className={styles.wrap}>
            <p className={styles.eyebrow}>Trusted for 10+ years - Manila, Philippines</p>
            <h1>
              Study in the Philippines <em>without the confusion</em>
            </h1>
            <p className={styles.lead}>
              Expert help with school placement, your 9(F) student visa, and everything in between.
              We have guided international students for over a decade.
            </p>
            <ul className={styles.ticks}>
              <li>Get into an accredited Philippine university in your course</li>
              <li>Student visa and documents handled the right way</li>
              <li>English-taught degrees at a fraction of Western costs</li>
              <li>Friendly, honest guidance starting with a free chat</li>
            </ul>
            <div className={styles.ctaRow}>
              <WhatsAppButton>Chat with us on WhatsApp</WhatsAppButton>
              <a href="#how" className={`${styles.button} ${styles.goldButton}`}>
                See how it works
              </a>
            </div>
            <p className={styles.reassure}>
              No cost to ask. We reply fast and tell you honestly if the Philippines is right for you.
            </p>
          </div>
        </section>

        <section className={styles.trust} aria-label="Hallmark Travel Inc. trust indicators">
          <div className={`${styles.wrap} ${styles.trustGrid}`}>
            <div>
              <strong>10+</strong>
              <span>Years of experience</span>
            </div>
            <div>
              <strong>1,000s</strong>
              <span>Students guided</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>English-taught degrees</span>
            </div>
            <div>
              <strong>Fast</strong>
              <span>WhatsApp replies</span>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <p>How we help</p>
              <h2>Everything you need to study in the Philippines</h2>
              <span>We handle the parts that confuse most students, so you can focus on your future.</span>
            </div>
            <div className={styles.helpGrid}>
              {helpItems.map((item) => {
                const Icon = item.icon;
                return (
                  <article className={styles.helpCard} key={item.title}>
                    <div className={styles.helpIcon}>
                      <Icon size={24} strokeWidth={2.2} />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.copy}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.steps}`} id="how">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <p>Simple and clear</p>
              <h2>How it works</h2>
              <span>Getting started takes one message.</span>
            </div>
            <div className={styles.stepsGrid}>
              <article>
                <strong>1</strong>
                <h3>Message us</h3>
                <p>Tap the WhatsApp button and tell us your course and country. It is free to ask.</p>
              </article>
              <article>
                <strong>2</strong>
                <h3>Get a clear plan</h3>
                <p>We tell you your options, costs, and the exact steps honestly and clearly.</p>
              </article>
              <article>
                <strong>3</strong>
                <h3>We guide you through</h3>
                <p>School, visa, documents, and arrival support from enquiry to your first day.</p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <p>What students say</p>
              <h2>Trusted by students worldwide</h2>
            </div>
            <div className={styles.testimonialGrid}>
              {testimonials.map((testimonial) => (
                <article className={styles.testimonialCard} key={testimonial.name}>
                  <div className={styles.stars} aria-label="Five star rating">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={15} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <p>{testimonial.quote}</p>
                  <div className={styles.person}>
                    <span>{testimonial.initials}</span>
                    <div>
                      <strong>{testimonial.name}</strong>
                      <small>{testimonial.role}</small>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaBand}>
          <div className={styles.wrap}>
            <h2>
              Ready to <em>start your journey?</em>
            </h2>
            <p>
              Send us a message on WhatsApp. Tell us your course and country, and we will give you
              honest, free guidance on your next steps.
            </p>
            <WhatsAppButton>Chat with us on WhatsApp</WhatsAppButton>
            <span>Or email admission@hallmarkconsultancy.com. We usually reply within 24 hours.</span>
          </div>
        </section>

        <section className={`${styles.section} ${styles.faq}`}>
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <p>Good to know</p>
              <h2>Quick questions, answered</h2>
            </div>
            <div className={styles.faqWrap}>
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <h2>Hallmark Travel Inc.</h2>
          <p>Registered Philippine company - 10+ years helping international students study in the Philippines</p>
          <p>
            <MessageCircle size={15} aria-hidden="true" /> WhatsApp:{" "}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              +63 966 138 9726
            </a>
            <span aria-hidden="true"> | </span>
            <a href="mailto:admission@hallmarkconsultancy.com">admission@hallmarkconsultancy.com</a>
          </p>
          <p>
            <MapPinned size={15} aria-hidden="true" /> #250 Northbay Blvd., Navotas City, Metro Manila
            <span aria-hidden="true"> | </span>
            <Landmark size={15} aria-hidden="true" /> hallmarkconsultancy.com
          </p>
          <small>
            © 2026 Hallmark Travel Inc. All rights reserved. Independent education and travel consultancy.
            Information for general guidance only.
          </small>
        </div>
      </footer>

      <a href={whatsappUrl} className={styles.fab} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <WhatsAppIcon className={styles.fabIcon} />
      </a>
    </div>
  );
}
