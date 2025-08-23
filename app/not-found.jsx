// app/not-found.js
import PageNotFound from "../components/notFound/index"
export const metadata = {
  title: "404 | Dipak Mourya - Full Stack Developer",
  description: "Oops! The page you are looking for does not exist. Explore Dipak Mourya's portfolio for web development projects, UI/UX design, and digital solutions.",
};


export default function NotFound() {
  return (
    <PageNotFound />
  );
}
