import PostPage from "../../components/post/index"
import { siteUrl, defaultKeywords, twitterMeta } from '../../lib/seo'

export const metadata = {
  title: "Posts | Dipak Mourya - Full Stack Developer",
  description:
    "Read the latest articles and insights from Dipak Mourya, a full-stack developer sharing knowledge on web development, UI/UX design, and modern technologies.",
  keywords: defaultKeywords,
  openGraph: {
    title: "Posts | Dipak Mourya - Full Stack Developer",
    description:
      "Explore Dipak Mourya's posts on full-stack development, UI/UX design, and practical tips for building seamless and high-performance web applications.",
    url: `${siteUrl}/posts`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/assets/opengraph/posts.png`,
        width: 1200,
        height: 630,
        alt: "Blog & Articles Dipak Mourya - Full Stack Developer",
      },
    ],
  },
  alternates: {
    canonical: `${siteUrl}/posts`,
  },
  twitter: twitterMeta({
    title: "Posts | Dipak Mourya - Full Stack Developer",
    description:
      "Explore Dipak Mourya's posts on full-stack development, UI/UX design, and practical tips for building seamless and high-performance web applications.",
    image: `${siteUrl}/assets/opengraph/posts.png`,
  }),
  robots: { index: true, follow: true },
};


const Post = () => {
  return (
    <PostPage />
  )
}
export default Post;