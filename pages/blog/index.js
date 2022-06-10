require("@/utils/mongoose");
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import SEO from "@/components/SEO";
import Post from "@/utils/schemas/Post";
import Main from "@/components/Layout/Main";
import PostCard from "@/components/Blog/PostCard";
import Container from "@/components/Layout/Container";
import { useSelector } from "react-redux";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0,
      staggerChildren: 0.1,
    },
  },
};

const Blog = ({ staticPosts }) => {
  const [posts, setPosts] = useState(staticPosts);
  const postState = useSelector((state) => state.posts.value);

  useEffect(() => {
    if (postState.length) {
      setPosts(postState);
    }
  }, [postState]);

  return (
    <Main>
      <SEO
        title="Blog - Md Shahriyar Alam"
        url="https://shahriyar.dev/blog"
        description="Shahriyar's blogs. Read Now..."
      />

      <Container className="max-w-5xl py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-black text-center mb-10">
          Blog
        </h1>
        <div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3"
          >
            {posts.map((post) => (
              <PostCard key={post._id} blog={post} />
            ))}
          </motion.div>
        </div>
      </Container>
    </Main>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const data = await Post.find({}).sort({ createdAt: -1 });

  const posts = data.map((post) => {
    const modifiedPost = post.toObject();
    modifiedPost._id = post._id.toString();
    modifiedPost.createdAt = post.createdAt.toISOString();
    modifiedPost.updatedAt = post.updatedAt.toISOString();
    modifiedPost.tags = post.tags.map((tag) => ({
      value: tag.value,
      label: tag.label,
    }));
    return modifiedPost;
  });

  return {
    props: {
      staticPosts: posts,
    },
    revalidate: 600,
  };
};
