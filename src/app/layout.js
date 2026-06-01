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
  title: {
    default: "Hallmark Travel Inc | Premium International Travel & Relocation Assistance",
    template: "%s | Hallmark Travel Inc"
  },
  description: "Hallmark Travel Inc is your premier international mobility partner, providing high-end travel logistics, visa support, relocation guidance, and seamless global immigration.",
  keywords: [
    "international travel agency",
    "relocation assistance",
    "visa guidance",
    "global mobility",
    "travel logistics",
    "study abroad relocation",
    "immigration advice"
  ],
  authors: [{ name: "Hallmark Travel Inc Group" }]
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
