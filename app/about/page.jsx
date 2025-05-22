import About from "../../components/about/index"

export const metadata = {
  title: "Portfolio | About",
  description: "Welcome to the portfolio of Dipak, a full-stack web developer showcasing web development projects and design skills.",
   openGraph: {
    title: 'Dipak Portfolio | About',
    url: 'https://dipakdev.in/about',
    type: 'website',
    images: [
      {
        url: 'assets/opengraph/about.png',
        width: 1200,
        height: 630,
        alt: 'Dipak Dev About Image',
      },
    ],
  },
};

const  Resume=()=> {
  return(
     <About />
  );
  }
  
export default Resume;