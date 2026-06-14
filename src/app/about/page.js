import AboutUs from "./AboutClient";

export const metadata = {
  title: "About Us",
  description: "Learn more about Hallmark Travel Inc. — our history, core values, mission, and our 10+ year track record of facilitating international education and travel.",
  alternates: {
    canonical: "https://www.hallmarkconsultancy.com/about",
  },
  openGraph: {
    title: "About Us | Hallmark Travel Inc",
    description: "Learn more about Hallmark Travel Inc. — our history, core values, mission, and our 10+ year track record of facilitating international education and travel.",
    url: "https://www.hallmarkconsultancy.com/about",
    type: "website",
  }
};

export default function Page() {
  return <AboutUs />;
}
