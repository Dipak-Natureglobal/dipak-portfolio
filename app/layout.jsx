import {JetBrains_Mono} from "next/font/google";
import "./globals.css";
import Header from "../components/header/index"
import PageTransition from "../components/transition/page";
import StairTransition from "../components/staireffect/page"
import Footer from "../components/footer/index";
import WhatsAppButton from "../components/whatsapp/page"
import ThemeProvider from "../components/theme-provider/page"
import { icons } from "lucide-react";
import { siteUrl, defaultKeywords, personJsonLd, organizationJsonLd, websiteJsonLd } from '../lib/seo'

const JetbrainsMono=JetBrains_Mono(
  {
  subsets:["latin"],
  weight:["100", "200","300","400","500","600","700","800"],
  variable:'--font-JetbrainsMono'
}
)
const _jsonLd = JSON.stringify([personJsonLd(), organizationJsonLd(), websiteJsonLd()]);

export const metadata = {
  title: 'Dipak Mourya - Full Stack Developer',
  description: 'Portfolio of Dipak Mourya — Full Stack Developer specializing in React and Next.js.',
  keywords: defaultKeywords,
  openGraph: {
    url: siteUrl,
    title: 'Dipak Mourya - Full Stack Developer',
    description: 'Portfolio of Dipak Mourya — Full Stack Developer specializing in React and Next.js.',
    images: [
      {
        url: `${siteUrl}/assets/opengraph/home.webp`,
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
  // expose a default json-ld person for root insertion if needed by pages
  other: {
    jsonLdPerson: personJsonLd(),
  },
};

export default function RootLayout({ children }) {
  return (
  <html lang="en">
    <head>
        {/* Prevent light flash on reload */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem("theme");
                  if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
                    document.documentElement.classList.add("dark");
                  } else {
                    document.documentElement.classList.remove("dark");
                  }
                } catch (_) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: _jsonLd }}
        />
      </head>
      <body
        className={JetbrainsMono.variable} 
      >
        <ThemeProvider>
        <Header />
        <StairTransition />
        <PageTransition > {children} </PageTransition>
        <Footer />
        <WhatsAppButton />
        </ThemeProvider>
       
      </body>
    </html>
  );
}
