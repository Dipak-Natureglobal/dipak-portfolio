import About from "../../components/about/index"
import { siteUrl, defaultKeywords, twitterMeta } from '../../lib/seo'

export const metadata = {
  title: "About | Dipak Mourya - Full Stack Developer",
  description:
    "Discover more about Dipak Mourya, a full-stack developer dedicated to building scalable web applications and crafting seamless, user-friendly digital experiences.",
  keywords: defaultKeywords,
  openGraph: {
    title: "About | Dipak Mourya - Full Stack Developer",
    description:
      "Learn more about Dipak Mourya, a full-stack developer passionate about blending technology and design to deliver innovative and high-performance web solutions.",
    url: `${siteUrl}/about`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/assets/opengraph/about.webp`,
        width: 1200,
        height: 630,
        alt: "About Dipak Mourya - Full Stack Developer",
      },
    ],
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  twitter: twitterMeta({
    title: "About | Dipak Mourya - Full Stack Developer",
    description:
      "Learn more about Dipak Mourya, a full-stack developer passionate about blending technology and design to deliver innovative and high-performance web solutions.",
    image: `${siteUrl}/assets/opengraph/about.webp`,
  }),
  robots: { index: true, follow: true },
};


const Resume = () => {
  return (
    <About />
  );
}

export default Resume;