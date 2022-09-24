import React from "react"

import { GetStaticPaths, GetStaticProps } from "next"

import moment from "moment"
import Markdown from "marked-react" // @ts-ignore
import Lowlight from "react-lowlight"

import prisma from "server/prisma"
import { Post, Category } from "@prisma/client"
import { BiUser, BiTime } from "react-icons/bi"

import Main from "layouts/Main"
import SEO from "components/shared/SEO"
import Container from "components/shared/Container" // @ts-ignore

import "react-lowlight/common"
import "highlight.js/styles/atom-one-dark.css" // @ts-ignore
import python from "highlight.js/lib/languages/python" // @ts-ignore
import markdown from "highlight.js/lib/languages/markdown" // @ts-ignore
import javascript from "highlight.js/lib/languages/javascript" // @ts-ignore

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
          // @ts-ignore
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
  const posts = await prisma.post.findMany()

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

  try {
    const data = await prisma.post.findUnique({
      where: {
        slug: slug,
      },
    })

    if (!data) {
      return {
        redirect: {
          destination: "/blog",
          permanent: false,
        },
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
      revalidate: 600,
    }
  } catch (err) {
    return {
      redirect: {
        destination: "/blog",
        permanent: false,
      },
    }
  }
}
