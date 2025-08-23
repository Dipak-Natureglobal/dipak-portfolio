import LiveProject from "../../components/project/index"


export const metadata = {
  title: "Projects | Dipak Mourya - Full Stack Developer",
  description:
    "Explore the projects of Dipak Mourya, a full-stack developer creating scalable, responsive, and user-friendly web applications with modern design and development practices.",
  openGraph: {
    title: "Projects | Dipak Mourya - Full Stack Developer",
    description:
      "Check out Dipak Mourya's portfolio showcasing full-stack web development projects, UI/UX design, and innovative digital solutions.",
    url: "https://dipakdev.in/projects",
    type: "website",
    images: [
      {
        url: "https://dipakdev.in/assets/opengraph/project.png",
        width: 1200,
        height: 630,
        alt: "Projects Dipak Mourya - Full Stack Developer",
      },
    ],
  },
};


const Work = () => {
  return (
    <LiveProject />
  )
}

export default Work;