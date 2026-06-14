import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import MainWrapper from "@/components/MainWrapper";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.hallmarkconsultancy.com"),
  title: {
    default: "Hallmark Travel Inc. — Study in the Philippines & Travel Packages",
    template: "%s | Hallmark Travel Inc."
  },
  description: "Hallmark Travel Inc. helps international students study in the Philippines — school placement, student visa, and arrival support — plus travel & tour packages. More than 10 years of experience.",
  keywords: [
    "study in the philippines",
    "hallmark travel",
    "hallmark consultancy",
    "philippines student visa 9f",
    "philippines travel packages",
    "study abroad philippines",
    "manila travel agency",
    "international student visa services"
  ],
  authors: [{ name: "Hallmark Travel Inc" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hallmark Travel Inc. — Study in the Philippines & Travel Packages",
    description: "Hallmark Travel Inc. helps international students study in the Philippines — school placement, student visa, and arrival support — plus travel & tour packages. More than 10 years of experience.",
    url: "https://www.hallmarkconsultancy.com",
    siteName: "Hallmark Travel Inc",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Hallmark Travel Inc. Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hallmark Travel Inc. — Study in the Philippines & Travel Packages",
    description: "Hallmark Travel Inc. helps international students study in the Philippines — school placement, student visa, and arrival support — plus travel & tour packages. More than 10 years of experience.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className="bg-background text-foreground min-h-full flex flex-col font-sans">
        <SmoothScroll>
          <Header />
          <MainWrapper>
            {children}
          </MainWrapper>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
