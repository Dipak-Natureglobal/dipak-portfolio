import PostPage from "../../components/post/index"

export const metadata = {
  title: "Portfolio | Posts",
  description: "Welcome to the portfolio of Dipak, a full-stack web developer showcasing web development projects and design skills.",
  openGraph: {
    title: 'Dipak Portfolio | Posts',
    url: 'https://dipakdev.in/posts',
    type: 'website',
    images: [
      {
        url: 'assets/opengraph/posts.png',
        width: 1200,
        height: 630,
        alt: 'Dipak Dev Post Image',
      },
    ],
  },
};
const Post = () => {
  return (
    <PostPage />
  )
}
export default Post;