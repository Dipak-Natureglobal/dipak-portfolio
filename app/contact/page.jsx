import ContactPage from "../../components/contact/index"

export const metadata = {
  title: "Portfolio | Contact",
  description: "Welcome to the portfolio of Dipak, a full-stack web developer showcasing web development projects and design skills.",
  openGraph: {
    title: 'Dipak Portfolio | Contact',
    url: 'https://dipakdev.in/contact',
    type: 'website',
    images: [
      {
        url: 'https://dipakdev.in/assets/opengraph/contact.png',
        width: 1200,
        height: 630,
        alt: 'Dipak Dev Contact Image',
      },
    ],
  },
};

const Contact = () => {
 return(
    <ContactPage />
 )
};

export default Contact;
