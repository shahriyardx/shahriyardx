import React from "react"

import { GetStaticPaths, GetStaticProps } from "next"

import moment from "moment"
import Markdown from "marked-react" //@ts-expect-error("idk why error")
import Lowlight from "react-lowlight"

import prisma from "server/prisma"
import { Post, Category } from "@prisma/client"
import { BiUser, BiTime } from "react-icons/bi"

import Main from "layouts/Main"
import SEO from "components/shared/SEO"
import Container from "components/shared/Container"

import "react-lowlight/common"
import "highlight.js/styles/atom-one-dark.css" // @ts-expect-error("idk why error")
import python from "highlight.js/lib/languages/python" // @ts-expect-error("idk why error")
import markdown from "highlight.js/lib/languages/markdown" // @ts-expect-error("idk why error")
import javascript from "highlight.js/lib/languages/javascript"

type Props = {
  post: Post & { category: Category }
}

Lowlight.registerLanguage("js", javascript)
Lowlight.registerLanguage("py", python)
Lowlight.registerLanguage("md", markdown)

const SinglePost = ({ post }: Props) => {
  const renderer = {
    code(snippet: any, lang: any) {
      return (
        <Lowlight
          // @ts-expect-error("idk why error")
          key={this.elementId as string}
          language={lang}
          value={snippet}
        />
      )
    },
  }

  return (
    <Main>
      <SEO
        title={post.title}
        description={post.meta_description as string}
        image={post.thumbnail as string}
        url={`https://shahriyar.dev/blog/${post.id}`}
      />
      <Container className="py-20 prose prose-invert prose-green max-w-[88ch]">
        <h1>{post.title}</h1>
        <div className="flex gap-3 mt-3 mb-10 flex-wrap">
          <div className="flex gap-2 text-sm text-zinc-300 items-center">
            <BiUser className="text-base text-accent" />{" "}
            <span className="author">Md Shahriyar Alam</span>
          </div>

          <div className="flex gap-2 text-sm text-zinc-300 items-center">
            <BiTime className="text-base text-accent" />{" "}
            <span className="createdAt tracking-tighter">
              {moment(post.createdAt).format("MMMM d, YYYY")}
            </span>
          </div>
        </div>
        <div>
          <Markdown renderer={renderer}>{post.content}</Markdown>
        </div>
      </Container>
    </Main>
  )
}

export default SinglePost

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await prisma.post.findMany({
    take: 1,
  })

  const paths = posts.map((post) => {
    return { params: { slug: post.slug } }
  })

  return {
    paths,
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string

  const data = await prisma.post.findUnique({
    where: {
      slug: slug,
    },
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post: {
        ...data,
        createdAt: data.createdAt.toISOString(),
        updatedAt: data.updatedAt.toISOString(),
      },
    },
  }
}
