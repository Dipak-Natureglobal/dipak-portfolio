import HireMe from "../../components/hireme/index"

export const metadata = {
    title: "Portfolio | Hire",
    description: "Welcome to the portfolio of Dipak, a full-stack web developer showcasing web development projects and design skills.",
     openGraph: {
    title: 'Dipak Portfolio | Hire',
    url: 'https://dipakdev.in/hireme',
    type: 'website',
    images: [
      {
        url: 'assets/opengraph/hireme.png',
        width: 1200,
        height: 630,
        alt: 'Dipak Dev Hire Image',
      },
    ],
  },
  };
const Hireme=()=>
{
   return(
    <HireMe />
   )
}
export default Hireme;