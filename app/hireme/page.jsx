import HireMe from "../../components/hireme/index"
import { siteUrl, defaultKeywords, twitterMeta } from '../../lib/seo'

export const metadata = {
  title: "Hire Me | Dipak Mourya - Full Stack Developer",
  description:
    "Hire Dipak Mourya, a full-stack developer specializing in building responsive, scalable, and user-focused web applications with modern technologies.",
  keywords: defaultKeywords,
  openGraph: {
    title: "Hire Me | Dipak Mourya - Full Stack Developer",
    description:
      "Work with Dipak Mourya, a full-stack developer delivering high-performance web solutions, UI/UX design, and end-to-end application development.",
    url: `${siteUrl}/hireme`,
    type: "website",
    images: [ 
      {
        url: `${siteUrl}/assets/opengraph/hireme.webp`,
        width: 1200,
        height: 630,
        alt: "Hire Dipak Mourya - Full Stack Developer",
      },
    ],
  },
  alternates: {
    canonical: `${siteUrl}/hireme`,
  },
  twitter: twitterMeta({
    title: "Hire Me | Dipak Mourya - Full Stack Developer",
    description:
      "Work with Dipak Mourya, a full-stack developer delivering high-performance web solutions, UI/UX design, and end-to-end application development.",
    image: `${siteUrl}/assets/opengraph/hireme.webp`,
  }),
  robots: { index: true, follow: true },
};

const Hireme = () => {
  return (
    <HireMe />
  )
}
export default Hireme;