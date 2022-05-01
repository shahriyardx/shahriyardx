import React from 'react'
import PostCard from '../../components/Blog/PostCard'
import Container from '../../components/Layout/Container'
import Main from '../../components/Layout/Main'
import SEO from '../../components/SEO'
import posts from '../../redux/posts'
import { API_BASE } from '../../utils/api'

const Blog = ({ posts }) => {
  return (
    <Main>
      <SEO title='Blog - Md Shahriyar Alam' url='https://shahriyar.dev/blog' description="Shahriyar's blogs. Read Now..." />

      <Container className='max-w-5xl py-20'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl text-white font-black text-center mb-10'>Blog</h1>
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
            {posts.map(post => <PostCard key={post.id} blog={post} />)}
          </div>
        </div>
      </Container>
    </Main>
  )
}

export default Blog

export const getStaticProps = async (ctx) => {
  const posts = await fetch(`${API_BASE}/posts`).then(data => data.json())

  return {
    props: {
      posts
    }
  }
}