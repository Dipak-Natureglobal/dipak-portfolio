import HireMe from "../../components/hireme/index"

export const metadata = {
  title: "Hire Me | Dipak Mourya - Full Stack Developer",
  description:
    "Hire Dipak Mourya, a full-stack developer specializing in building responsive, scalable, and user-focused web applications with modern technologies.",
  openGraph: {
    title: "Hire Me | Dipak Mourya - Full Stack Developer",
    description:
      "Work with Dipak Mourya, a full-stack developer delivering high-performance web solutions, UI/UX design, and end-to-end application development.",
    url: "https://dipakdev.in/hireme",
    type: "website",
    images: [ 
      {
        url: "https://dipakdev.in/assets/opengraph/hireme.png",
        width: 1200,
        height: 630,
        alt: "Hire Dipak Mourya - Full Stack Developer",
      },
    ],
  },
};

const Hireme = () => {
  return (
    <HireMe />
  )
}
export default Hireme;