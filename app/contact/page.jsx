import ContactPage from "../../components/contact/index"
import { siteUrl, defaultKeywords, twitterMeta } from '../../lib/seo'

export const metadata = {
  title: "Contact | Dipak Mourya - Full Stack Developer",
  description:
    "Get in touch with Dipak Mourya, a full-stack developer open to collaborations, freelance projects, and exciting opportunities in web development and UI/UX design.",
  keywords: defaultKeywords,
  openGraph: {
    title: "Contact | Dipak Mourya - Full Stack Developer",
    description:
      "Reach out to Dipak Mourya for collaborations, freelance work, or project opportunities. Let's build scalable and user-focused digital experiences together.",
    url: `${siteUrl}/contact`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/assets/opengraph/contact.webp`,
        width: 1200,
        height: 630,
        alt: "Contact Dipak Mourya - Full Stack Developer",
      },
    ],
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  twitter: twitterMeta({
    title: "Contact | Dipak Mourya - Full Stack Developer",
    description:
      "Reach out to Dipak Mourya for collaborations, freelance work, or project opportunities. Let's build scalable and user-focused digital experiences together.",
    image: `${siteUrl}/assets/opengraph/contact.webp`,
  }),
  robots: { index: true, follow: true },
};


const Contact = () => {
  return (
    <ContactPage />
  )
};

export default Contact;
