import ContactPage from "../../components/contact/index"

export const metadata = {
  title: "Contact | Dipak Mourya - Full Stack Developer",
  description:
    "Get in touch with Dipak Mourya, a full-stack developer open to collaborations, freelance projects, and exciting opportunities in web development and UI/UX design.",
  openGraph: {
    title: "Contact | Dipak Mourya - Full Stack Developer",
    description:
      "Reach out to Dipak Mourya for collaborations, freelance work, or project opportunities. Let's build scalable and user-focused digital experiences together.",
    url: "https://dipakdev.in/contact",
    type: "website",
    images: [
      {
        url: "https://dipakdev.in/assets/opengraph/contact.png",
        width: 1200,
        height: 630,
        alt: "Contact Dipak Mourya - Full Stack Developer",
      },
    ],
  },
};


const Contact = () => {
  return (
    <ContactPage />
  )
};

export default Contact;
