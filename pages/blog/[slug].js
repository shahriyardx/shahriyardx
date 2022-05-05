require('../../utils/mongoose')
import React from 'react'
import Container from '../../components/Layout/Container'
import Main from '../../components/Layout/Main'
import moment from 'moment'
import { BiUser, BiTime } from 'react-icons/bi'
import { ImStatsBars } from 'react-icons/im'
import Markdown from 'marked-react'
import Post from '../../utils/schemas/Post'
import Lowlight from 'react-lowlight'

import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import markdown from 'highlight.js/lib/languages/markdown';

import 'highlight.js/styles/atom-one-dark.css'
import SEO from '../../components/SEO'

const SinglePost = ({ post }) => {
  Lowlight.registerLanguage('js', javascript);
  Lowlight.registerLanguage('py', python);
  Lowlight.registerLanguage('md', markdown);

  const renderer = {
    code(snippet, lang) {
      return <Lowlight key={this.elementId} language={lang} value={snippet} />;
    },
  };

  return (
    <Main>
      <SEO title={post.title} description={post.meta} image={post.image} url={`https://shahriyar.dev/blog/${post._id}`} keywords={post.tags.map(tag => tag.value).join(", ")} />
      <Container className='py-20 prose prose-invert prose-green max-w-[88ch]'>
        <h1>{post.title}</h1>
        <div className='flex gap-3 mt-3 mb-10 flex-wrap'>
          <div className='flex gap-2 text-sm text-zinc-300 items-center'>
            <BiUser className='text-base text-accent' /> <span className='author'>Shahriyar</span>
          </div>

          <div className='flex gap-2 text-sm text-zinc-300 items-center'>
            <BiTime className='text-base text-accent' /> <span className='createdAt tracking-tighter'>{moment(post.createdAt).format('MMMM d, YYYY')}</span>
          </div>

          <div className='flex gap-2 text-sm text-zinc-300 items-center'>
            <ImStatsBars className='text-base text-accent' />{post.views}
          </div>
        </div>
        <div>
          <Markdown renderer={renderer}>
            {post.content}
          </Markdown>
        </div>

        <div className='invisible flex gap-2 flex-wrap'>
          {post.tags.map((tag, index) => <span key={index}>{tag.value}</span>)}
        </div>
      </Container>
    </Main>
  )
}

export default SinglePost

export const getStaticPaths = async () => {
  const posts = await Post.find({})
  const paths = posts.map(post => {
    return { params: { slug: post.slug }}
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params

  try {
    const data = await Post.findOne({ slug: slug })
    
    await Post.updateOne({ _id: data._id.toString()}, { $set: { views: data.views + 1}})
    const post = data.toObject()

    post._id = data._id.toString()
    post.createdAt = data.createdAt.toISOString()
    post.updatedAt = data.updatedAt.toISOString()
    post.tags = data.tags.map(tag => ({ value: tag.value, label: tag.label }))

    return {
      props: {
        post,
      },
      revalidate: 10
    }
  } catch (err) {
    return {
      redirect: {
        destination: '/blog',
        permanent: false
      }
    }
  }
}