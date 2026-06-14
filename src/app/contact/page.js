import ContactUs from "./ContactClient";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Hallmark Travel Inc. Send us a message for school admission, visa applications, or booking custom travel and tour packages.",
  alternates: {
    canonical: "https://www.hallmarkconsultancy.com/contact",
  },
  openGraph: {
    title: "Contact Us | Hallmark Travel Inc",
    description: "Get in touch with Hallmark Travel Inc. Send us a message for school admission, visa applications, or booking custom travel and tour packages.",
    url: "https://www.hallmarkconsultancy.com/contact",
    type: "website",
  }
};

export default function Page() {
  return <ContactUs />;
}
