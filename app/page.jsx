import HomePage from '../components/home/index'

export const metadata = {
  title: "Portfolio | Home",
  description: "Welcome to the portfolio of Dipak, a full-stack web developer showcasing web development projects and design skills.", 
  openGraph: {
    title: 'Dipak Portfolio | Home',
    url: 'https://dipakdev.in/',
    type: 'website',
    images: [
      {
        url: 'assets/opengraph/home.jpg',
        width: 1200,
        height: 630,
        alt: 'Dipak Dev Home Image',
      },
    ],
  },
};
const Home = () => {
  return(
   <HomePage/>
  );
};

 export default Home;
