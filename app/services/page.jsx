
import Services from "../../components/services/index";


export const metadata = {
  title: "Services | Dipak Mourya - Full Stack Developer",
  description:
    "Discover the services offered by Dipak Mourya, a full-stack developer providing web development, UI/UX design, and end-to-end digital solutions tailored to your needs.",
  openGraph: {
    title: "Services | Dipak Mourya - Full Stack Developer",
    description:
      "Explore the services of Dipak Mourya, delivering scalable web applications, intuitive UI/UX design, and innovative digital solutions for clients and businesses.",
    url: "https://dipakdev.in/services",
    type: "website",
    images: [
      {
        url: "https://dipakdev.in/assets/opengraph/services.png",
        width: 1200,
        height: 630,
        alt: "Services Dipak Mourya - Full Stack Developer",
      },
    ],
  },
};


export default function ServicesPage() {
  return <Services />;
}
