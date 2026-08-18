import Image from "next/image";
import styles from "./StudyPhilippinesDiyLanding.module.css";

const payhipUrl = "https://payhip.com/b/ArLHI";
const whatsappUrl = "https://wa.me/639661389726";

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.01c-.24.68-1.42 1.3-1.95 1.34-.5.04-.97.22-3.27-.68-2.76-1.09-4.5-3.91-4.64-4.09-.13-.18-1.1-1.46-1.1-2.79 0-1.33.7-1.98.95-2.25.24-.27.53-.34.71-.34.18 0 .36 0 .51.01.16.01.39-.06.6.46.24.59.81 2.03.88 2.18.07.15.12.32.02.51-.1.18-.15.3-.29.46-.15.18-.31.39-.44.53-.15.15-.3.31-.13.6.18.3.78 1.29 1.68 2.09 1.16 1.03 2.13 1.35 2.43 1.5.3.15.47.13.65-.08.18-.21.75-.88.95-1.18.2-.3.4-.25.67-.15.27.1 1.71.81 2.01.95.3.15.5.22.57.34.07.12.07.71-.17 1.39z" />
    </svg>
  );
}

const modulesData = [
  {
    num: "1",
    title: "Is the Philippines right for you?",
    desc: "Honest cost comparisons vs other destinations, and who this path suits.",
  },
  {
    num: "2",
    title: "Choosing your school & course",
    desc: "Top universities by course, verifying CHED accreditation, and the red flags of fake schools.",
  },
  {
    num: "3",
    title: "The application process",
    desc: "Step-by-step applications, document requirements, and how to write your SOP.",
  },
  {
    num: "4",
    title: "The 9(F) student visa — complete",
    desc: "The full 8-step visa process, document checklist, tourist-visa conversion, and real visa examples showing the wording that decides everything.",
  },
  {
    num: "5",
    title: "Arrival & your first 30 days",
    desc: "eTravel, the airport, Bureau of Immigration registration, banking, SIM, and settling in.",
  },
  {
    num: "6",
    title: "Working while studying — the truth",
    desc: "What's legal, what's not, the permits that exist, and the safe alternatives most students use.",
  },
];

const testimonialsData = [
  {
    stars: "★★★★★",
    quote:
      "They were amazing throughout my student visa journey. Their guidance paved the way for my visa grant — so knowledgeable and they truly care.",
    initials: "EC",
    name: "Edeh Celestine",
    role: "Nigeria · Student visa",
  },
  {
    stars: "★★★★★",
    quote:
      "I've used other agencies before, but they're so attentive to concerns. I'm demanding, yet they never made me feel that way. Best agency ever!",
    initials: "NR",
    name: "Niazi Rehman",
    role: "Pakistan · Education",
  },
  {
    stars: "★★★★★",
    quote:
      "From choosing my university to landing in Manila, they guided every step. Clear, stress-free, and always a WhatsApp message away.",
    initials: "PS",
    name: "Priya Singh",
    role: "India · School placement",
  },
];

const faqsData = [
  {
    q: "How do I receive the guide?",
    a: "Instantly. After secure checkout on Payhip, the PDF downloads straight away, and your receipt email includes the link plus how to book your consultation.",
  },
  {
    q: "How does the 1-on-1 consultation work?",
    a: "After purchase, you message us on WhatsApp with your order number and we schedule a personal consultation to answer questions about your specific situation.",
  },
  {
    q: "Is this up to date?",
    a: "Yes — this is the 2025–2026 edition, reflecting current processes. Immigration rules can change, so the guide also shows you how to verify requirements with official sources.",
  },
  {
    q: "What if I decide I want full help instead?",
    a: "No problem — many students start with the guide and later ask us to handle their placement personally. Just message us on WhatsApp and we'll take it from there.",
  },
  {
    q: "Who is behind this guide?",
    a: "Hallmark Travel Inc. — a registered Philippine education and travel consultancy with more than 10 years of experience placing international students in Philippine universities.",
  },
];

export default function StudyPhilippinesDiyLanding() {
  return (
    <div className={styles.page}>
      {/* Topbar */}
      <div className={styles.topbar}>
        <div className={`${styles.wrap} ${styles.topbarRow}`}>
          <a href="#" className={styles.brand} aria-label="Hallmark Travel Inc.">
            <Image
              src="/logo.png"
              alt="Hallmark Travel Inc."
              width={40}
              height={40}
              priority
            />
            <span>Hallmark Travel Inc.</span>
          </a>
          <a
            href={payhipUrl}
            className={styles.buymini}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get the guide — $49.99
          </a>
        </div>
      </div>

      {/* HERO Section */}
      <section className={styles.hero}>
        <div className={`${styles.wrap} ${styles.heroGrid}`}>
          <div>
            <div className={styles.eyebrow}>
              The complete self-guided handbook · 2025–2026 edition
            </div>
            <h1>
              Study in the Philippines — <em>do it yourself</em>, step by step
            </h1>
            <p className={styles.lead}>
              Schools, the 9(F) student visa, documents, arrival, and working
              rights — everything in one guide, written by a team with 10+ years
              placing international students.
            </p>
            <div className={styles.priceRow}>
              <span className={styles.price}>$49.99</span>
              <span className={styles.priceNote}>
                one-time · instant download
              </span>
            </div>
            <p className={styles.anchor}>
              Agencies charge <s>PHP 30,000–50,000</s> for the same process. Do
              it yourself and keep the difference.
            </p>
            <div className={styles.ctaRow}>
              <a
                href={payhipUrl}
                className={`${styles.btn} ${styles.btnGold}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get the guide now →
              </a>
              <a
                href={whatsappUrl}
                className={`${styles.btn} ${styles.btnWa}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className={styles.waIco} />
                Ask a question first
              </a>
            </div>
            <p className={styles.reassure}>
              Includes a 1-on-1 WhatsApp consultation with our team. Instant
              PDF download after purchase.
            </p>
          </div>
          <div>
            <div className={styles.book}>
              <div className={styles.be}>Study in the</div>
              <div className={styles.bt}>Philippines</div>
              <div className={styles.bk}>DIY Starter Kit</div>
              <div className={styles.bd}>
                6 Modules · 5 Bonus Tools · 1-on-1 Consultation included
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <div className={styles.trust}>
        <div className={styles.wrap}>
          <div className={styles.trustRow}>
            <div>
              <div className={styles.trustN}>10+</div>
              <div className={styles.trustL}>Years of experience</div>
            </div>
            <div>
              <div className={styles.trustN}>28</div>
              <div className={styles.trustL}>Pages of practical steps</div>
            </div>
            <div>
              <div className={styles.trustN}>6 + 5</div>
              <div className={styles.trustL}>Modules + bonus tools</div>
            </div>
            <div>
              <div className={styles.trustN}>1-on-1</div>
              <div className={styles.trustL}>Consultation included</div>
            </div>
          </div>
        </div>
      </div>

      {/* WHAT'S INSIDE */}
      <section className={`${styles.section} ${styles.inside}`}>
        <div className={styles.wrap}>
          <div className={styles.secHead}>
            <div className={styles.tag}>What's inside</div>
            <h2>Six modules that cover the entire journey</h2>
            <p>
              From &quot;is the Philippines right for me?&quot; to your first 30
              days on the ground.
            </p>
          </div>
          <div className={styles.mods}>
            {modulesData.map((item) => (
              <div className={styles.mod} key={item.num}>
                <div className={styles.modN}>{item.num}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.bonus}>
            <h3>Plus 5 ready-to-use bonus tools</h3>
            <ul>
              <li>Master Document Checklist</li>
              <li>12-Week Application Timeline</li>
              <li>SOP Writing Template</li>
              <li>Top Schools Directory</li>
              <li>30 FAQs answered honestly</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONSULTATION HIGHLIGHT */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.wrap}>
          <div className={styles.consult}>
            <div className={styles.ic}>💬</div>
            <div>
              <h3>Your purchase includes a 1-on-1 consultation</h3>
              <p>
                After you get the guide, book a personal WhatsApp consultation
                with our team. Ask about your specific country, course, and
                situation — real answers from people who&apos;ve done this for a
                decade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE COMPARISON */}
      <section className={`${styles.section} ${styles.compare}`} style={{ paddingTop: 0 }}>
        <div className={styles.wrap}>
          <div className={styles.secHead}>
            <div className={styles.tag}>Why it&apos;s worth it</div>
            <h2>Compare your options</h2>
          </div>
          <table>
            <thead>
              <tr>
                <th>Option</th>
                <th>What you get</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Typical agency</td>
                <td>They do it for you</td>
                <td>PHP 30,000–50,000+</td>
              </tr>
              <tr>
                <td>Figuring it out alone</td>
                <td>Scattered info, costly mistakes</td>
                <td>&quot;Free&quot; (but risky)</td>
              </tr>
              <tr className={styles.win}>
                <td>
                  <strong>DIY Starter Kit</strong>
                </td>
                <td>Complete roadmap + expert consultation</td>
                <td>
                  <strong>$49.99</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={`${styles.section} ${styles.testi}`} style={{ paddingTop: 0 }}>
        <div className={styles.wrap}>
          <div className={styles.secHead}>
            <div className={styles.tag}>What students say</div>
            <h2>Guided by a team students trust</h2>
          </div>
          <div className={styles.tgrid}>
            {testimonialsData.map((item) => (
              <div className={styles.tcard} key={item.name}>
                <div className={styles.stars}>{item.stars}</div>
                <p>{item.quote}</p>
                <div className={styles.who}>
                  <div className={styles.av}>{item.initials}</div>
                  <div>
                    <div className={styles.nm}>{item.name}</div>
                    <div className={styles.rl}>{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className={styles.ctaband}>
        <div className={styles.wrap}>
          <h2>
            Start your journey <em>today</em>
          </h2>
          <p>
            Instant download. Complete roadmap. A consultation with real experts
            included.
          </p>
          <div className={styles.ctaPrice}>$49.99</div>
          <a
            href={payhipUrl}
            className={`${styles.btn} ${styles.btnGold}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get the DIY Starter Kit →
          </a>
          <p className={styles.reassure}>
            Secure checkout via Payhip · Instant PDF download · Questions first?{" "}
            <a
              href={whatsappUrl}
              style={{ color: "#5DCAA5", textDecoration: "underline" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp us
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.section} ${styles.faq}`}>
        <div className={styles.wrap}>
          <div className={styles.secHead}>
            <div className={styles.tag}>Before you buy</div>
            <h2>Quick questions, answered</h2>
          </div>
          <div className={styles.faqwrap}>
            {faqsData.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <div className={styles.fbrand}>Hallmark Travel Inc.</div>
          <p>
            Registered Philippine company · 10+ years helping international
            students
          </p>
          <p>
            💬{" "}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              +63 966 138 9726
            </a>{" "}
            · ✉️{" "}
            <a href="mailto:admission@hallmarkconsultancy.com">
              admission@hallmarkconsultancy.com
            </a>{" "}
            · 🌐 hallmarkconsultancy.com
          </p>
          <p>📍 #250 Northbay Blvd., Navotas City, Metro Manila</p>
          <p className={styles.fine}>
            © 2026 Hallmark Travel Inc. All rights reserved. Independent
            education &amp; travel consultancy. Information for general guidance
            only.
          </p>
        </div>
      </footer>
    </div>
  );
}

export { StudyPhilippinesDiyLanding as DiyGuideLanding };
