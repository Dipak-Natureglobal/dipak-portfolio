import LiveProject from "../../components/project/index"
import { siteUrl, defaultKeywords, twitterMeta } from '../../lib/seo'


export const metadata = {
  title: "Projects | Dipak Mourya - Full Stack Developer",
  description:
    "Explore the projects of Dipak Mourya, a full-stack developer creating scalable, responsive, and user-friendly web applications with modern design and development practices.",
  keywords: defaultKeywords,
  openGraph: {
    title: "Projects | Dipak Mourya - Full Stack Developer",
    description:
      "Check out Dipak Mourya's portfolio showcasing full-stack web development projects, UI/UX design, and innovative digital solutions.",
    url: `${siteUrl}/projects`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/assets/opengraph/project.webp`,
        width: 1200,
        height: 630,
        alt: "Projects Dipak Mourya - Full Stack Developer",
      },
    ],
  },
  alternates: {
    canonical: `${siteUrl}/projects`,
  },
  twitter: twitterMeta({
    title: "Projects | Dipak Mourya - Full Stack Developer",
    description:
      "Check out Dipak Mourya's portfolio showcasing full-stack web development projects, UI/UX design, and innovative digital solutions.",
    image: `${siteUrl}/assets/opengraph/project.webp`,
  }),
  robots: { index: true, follow: true },
};


const Work = () => {
  return (
    <LiveProject />
  )
}

export default Work;