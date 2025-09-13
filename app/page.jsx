import HomePage from '../components/home/index'
import { siteUrl, defaultKeywords, twitterMeta } from '../lib/seo'

export const metadata = {
  title: "Home | Dipak Mourya - Full Stack Developer",
  description:
    "Welcome to the portfolio of Dipak Mourya, a full-stack developer passionate about building scalable web applications and crafting engaging digital experiences.",
  keywords: defaultKeywords,
  openGraph: {
    title: "Home | Dipak Mourya - Full Stack Developer",
    description:
      "Explore the portfolio of Dipak Mourya, a full-stack developer creating innovative, user-friendly, and high-performance web solutions.",
    url: siteUrl,
    type: "website",
    images: [
      {
        url: `${siteUrl}/assets/opengraph/home.webp`,
        width: 1200,
        height: 630,
        alt: "Dipak Mourya - Full Stack Developer",
      },
    ],
  },
  alternates: {
    canonical: siteUrl,
  },
  twitter: twitterMeta({
    title: "Home | Dipak Mourya - Full Stack Developer",
    description:
      "Explore the portfolio of Dipak Mourya, a full-stack developer creating innovative, user-friendly, and high-performance web solutions.",
    image: `${siteUrl}/assets/opengraph/home.webp`,
  }),
  robots: { index: true, follow: true },
};

const Home = () => {
  return (
    <HomePage />
  );
};

export default Home;
