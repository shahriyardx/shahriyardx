import React from "react"

import { type GetStaticPaths, type GetStaticProps } from "next"

import moment from "moment"
import Markdown from "marked-react" //@ts-expect-error("idk why error")
import Lowlight from "react-lowlight"

import { BiUser, BiTime } from "react-icons/bi"

import Main from "components/layouts/Main"
import SEO from "components/shared/SEO"
import Container from "components/shared/Container"

import "react-lowlight/common"
import "highlight.js/styles/atom-one-dark.css" // @ts-expect-error("idk why error")
import python from "highlight.js/lib/languages/python" // @ts-expect-error("idk why error")
import markdown from "highlight.js/lib/languages/markdown" // @ts-expect-error("idk why error")
import javascript from "highlight.js/lib/languages/javascript"
import { type ICollectionResponse, type IPost } from "types"
import { api } from "utils/http"

type Props = {
  post: IPost
}

Lowlight.registerLanguage("js", javascript)
Lowlight.registerLanguage("py", python)
Lowlight.registerLanguage("md", markdown)

const SinglePost = ({ post }: Props) => {
  const { attributes } = post
  const { title, content, description, thumbnail, createdAt, slug } = attributes

  const renderer = {
    code(snippet: string, lang: string) {
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
        title={title}
        description={description}
        image={thumbnail.data.attributes.formats.large?.url}
        url={`https://shahriyar.dev/blog/${slug}`}
      />
      <Container className="py-20 prose prose-invert prose-green max-w-[88ch]">
        <h1>{title}</h1>
        <div className="flex gap-3 mt-3 mb-10 flex-wrap">
          <div className="flex gap-2 text-sm text-zinc-300 items-center">
            <BiUser className="text-base text-accent" />{" "}
            <span className="author">Md Shahriyar Alam</span>
          </div>

          <div className="flex gap-2 text-sm text-zinc-300 items-center">
            <BiTime className="text-base text-accent" />{" "}
            <span className="createdAt tracking-tighter">
              {moment(createdAt).format("MMMM DD, YYYY")}
            </span>
          </div>
        </div>
        <div>
          <Markdown renderer={renderer}>{content}</Markdown>
        </div>
      </Container>
    </Main>
  )
}

export default SinglePost

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: posts }: ICollectionResponse<Array<IPost>> = await api(
    "/api/posts?populate=*"
  );

  const paths = posts.map((post) => {
    return { params: { slug: post.attributes.slug } }
  })

  return {
    paths,
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string

  const { data }: ICollectionResponse<Array<IPost>> = await api(
    `/api/posts?populate=*&filters[slug][$eq]=${slug}`
  );

  if (data.length < 0) {
    return {
      notFound: true,
    }
  }

  const post: IPost = data[0] as IPost

  return {
    props: {
      post: post
    },
  }
}
