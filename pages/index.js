import Head from "next/head";
import PostCard from "@/components/PostCard";
import PostWidget from "@/components/PostWidget";
import Categories from "@/components/Categories";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div className="container mx-auto px-10 mb-2">
      <Head>
        <title>Blogyme</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky  relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/posts");
  const posts = await res.json();

  return {
    props: { posts },
  };
};
