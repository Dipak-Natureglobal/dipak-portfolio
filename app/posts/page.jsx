import PostPage from "../../components/post/index"

export const metadata = {
  title: "Posts | Dipak Mourya - Full Stack Developer",
  description:
    "Read the latest articles and insights from Dipak Mourya, a full-stack developer sharing knowledge on web development, UI/UX design, and modern technologies.",
  openGraph: {
    title: "Posts | Dipak Mourya - Full Stack Developer",
    description:
      "Explore Dipak Mourya's posts on full-stack development, UI/UX design, and practical tips for building seamless and high-performance web applications.",
    url: "https://dipakdev.in/posts",
    type: "website",
    images: [
      {
        url: "https://dipakdev.in/assets/opengraph/posts.png",
        width: 1200,
        height: 630,
        alt: "Blog & Articles Dipak Mourya - Full Stack Developer",
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