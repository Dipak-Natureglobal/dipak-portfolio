import HomePage from '../components/home/index'

export const metadata = {
  title: "Home | Dipak Mourya - Full Stack Developer",
  description:
    "Welcome to the portfolio of Dipak Mourya, a full-stack developer passionate about building scalable web applications and crafting engaging digital experiences.",
  openGraph: {
    title: "Home | Dipak Mourya - Full Stack Developer",
    description:
      "Explore the portfolio of Dipak Mourya, a full-stack developer creating innovative, user-friendly, and high-performance web solutions.",
    url: "https://dipakdev.in",
    type: "website",
    images: [
      {
        url: "https://dipakdev.in/assets/opengraph/home.jpg",
        width: 1200,
        height: 630,
        alt: "Dipak Mourya - Full Stack Developer",
      },
    ],
  },
};

const Home = () => {
  return (
    <HomePage />
  );
};

export default Home;
