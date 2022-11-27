import React from "react";
import { type GetStaticProps } from "next";

import Main from "components/layouts/Main";
import PostCard from "components/blog/PostCard";
import SEO from "components/shared/SEO";
import { type ICollectionResponse, type IPost } from "types";
import { api } from "utils/http";

type Props = {
  posts: Array<IPost>;
};

const BlogPage = ({ posts }: Props) => {
  return (
    <Main>
      <SEO title="Blog" description="Go and read please..." />
      <div className="p-5 pb-20">
        <h1 className="text mt-10 mb-10 text-center text-4xl font-bold">
          Blog
        </h1>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5">
          {posts?.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </Main>
  );
};

export default BlogPage;

export const getStaticProps: GetStaticProps = async () => {
  const { data: posts }: ICollectionResponse<Array<IPost>> = await api(
    "/api/posts?populate=*"
  );

  return {
    props: {
      posts: posts,
    },
  };
};
