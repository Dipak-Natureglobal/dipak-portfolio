
import Services from "../../components/services/index";
import { siteUrl, defaultKeywords, twitterMeta } from '../../lib/seo'


export const metadata = {
  title: "Services | Dipak Mourya - Full Stack Developer",
  description:
    "Discover the services offered by Dipak Mourya, a full-stack developer providing web development, UI/UX design, and end-to-end digital solutions tailored to your needs.",
  keywords: defaultKeywords,
  openGraph: {
    title: "Services | Dipak Mourya - Full Stack Developer",
    description:
      "Explore the services of Dipak Mourya, delivering scalable web applications, intuitive UI/UX design, and innovative digital solutions for clients and businesses.",
    url: `${siteUrl}/services`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/assets/opengraph/services.webp`,
        width: 1200,
        height: 630,
        alt: "Services Dipak Mourya - Full Stack Developer",
      },
    ],
  },
  alternates: {
    canonical: `${siteUrl}/services`,
  },
  twitter: twitterMeta({
    title: "Services | Dipak Mourya - Full Stack Developer",
    description:
      "Explore the services of Dipak Mourya, delivering scalable web applications, intuitive UI/UX design, and innovative digital solutions for clients and businesses.",
    image: `${siteUrl}/assets/opengraph/services.webp`,
  }),
  robots: { index: true, follow: true },
};


export default function ServicesPage() {
  return <Services />;
}
