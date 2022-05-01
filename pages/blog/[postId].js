import React from 'react'
import Container from '../../components/Layout/Container'
import Main from '../../components/Layout/Main'
import { API_BASE } from '../../utils/api'
import moment from 'moment'
import { BiUser, BiTime } from 'react-icons/bi'
import Markdown from 'marked-react'

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
  const posts = await fetch(`${API_BASE}/posts`).then(data => data.json())
  const paths = posts.map(post => ({ params: { postId: post._id} }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }) => {
  const { postId } = params

  const post = await fetch(`${API_BASE}/posts/${postId}`).then(data => data.json())

  return {
    props: {
      post,
    },
    revalidate: 60
  }
}