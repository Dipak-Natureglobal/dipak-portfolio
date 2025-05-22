export const metadata = {
  title: "Portfolio | Services",
  description: "Welcome to the portfolio of Dipak, a full-stack web developer showcasing web development projects and design skills.",
  openGraph: {
    title: 'Dipak Portfolio | Services',
    url: 'https://dipakdev.in/services',
    type: 'website',
    images: [
      {
        url: 'https://dipakdev.in/assets/opengraph/services.png',
        width: 1200,
        height: 630,
        alt: 'Dipak Dev Service Image',
      },
    ],
  },
};

import Services from "../../components/services/index";

export default function ServicesPage() {
  return <Services />;
}
