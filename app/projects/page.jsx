import LiveProject from "../../components/project/index"


export const metadata = {
  title: "Portfolio | Projects",
  description: "Welcome to the portfolio of Dipak, a full-stack web developer showcasing web development projects and design skills.",
  openGraph: {
    title: 'Dipak Portfolio | Projects',
    url: 'https://dipakdev.in/projects',
    type: 'website',
    images: [
      {
        url: 'https://dipakdev.in/assets/opengraph/project.png',
        width: 1200,
        height: 630,
        alt: 'Dipak Dev Project Image',
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