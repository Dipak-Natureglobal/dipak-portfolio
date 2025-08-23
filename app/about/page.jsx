import About from "../../components/about/index"

export const metadata = {
  title: "About | Dipak Mourya - Full Stack Developer",
  description:
    "Discover more about Dipak Mourya, a full-stack developer dedicated to building scalable web applications and crafting seamless, user-friendly digital experiences.",
  openGraph: {
    title: "About | Dipak Mourya - Full Stack Developer",
    description:
      "Learn more about Dipak Mourya, a full-stack developer passionate about blending technology and design to deliver innovative and high-performance web solutions.",
    url: "https://dipakdev.in/about",
    type: "website",
    images: [
      {
        url: "https://dipakdev.in/assets/opengraph/about.png",
        width: 1200,
        height: 630,
        alt: "About Dipak Mourya - Full Stack Developer",
      },
    ],
  },
};


const Resume = () => {
  return (
    <About />
  );
}

export default Resume;