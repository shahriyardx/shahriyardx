require('../../utils/mongoose')
import React from 'react'
import Container from '../../components/Layout/Container'
import Main from '../../components/Layout/Main'
import { API_BASE } from '../../utils/api'
import moment from 'moment'
import { BiUser, BiTime } from 'react-icons/bi'
import Markdown from 'marked-react'
import Post from '../../utils/schemas/Post'

const SinglePost = ({ post }) => {

  return (
    <Main>
      <Container className='py-20 prose prose-invert'>
        <h1>{post.title}</h1>
        <div className='flex gap-2 mt-3 mb-10 flex-wrap'>
          <div className='flex gap-2 text-sm text-zinc-300 items-center'>
            <BiUser className='text-base text-accent' /> <span className='author'>Shahriyar</span>
          </div>

          <div className='flex gap-2 text-sm text-zinc-300 items-center'>
            <BiTime className='text-base text-accent' /> <span className='createdAt tracking-tighter'>{moment(post.createdAt).format('MMMM d, YYYY')}</span>
          </div>
        </div>
        <div>
          <Markdown>
            {post.content}
          </Markdown>
        </div>
      </Container>
    </Main>
  )
}

export default SinglePost

export const getStaticPaths = async () => {
  const posts = await Post.find({})
  const paths = posts.map(post => ({ params: { postId: post._id.toString()} }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const { postId } = params

  const data = await Post.findOne({ _id: postId })
  const post = data.toObject()
  post._id = postId
  post.createdAt = data.createdAt.toString()
  post.updatedAt = data.updatedAt.toString()
  post.tags = data.tags.map(tag => ({ value: tag.value, label: tag.label }))

  return {
    props: {
      post,
    },
    revalidate: 60
  }
}