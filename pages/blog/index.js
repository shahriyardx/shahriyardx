require('../../utils/mongoose')
import React, { useState, useEffect } from 'react'
import PostCard from '../../components/Blog/PostCard'
import Container from '../../components/Layout/Container'
import Main from '../../components/Layout/Main'
import SEO from '../../components/SEO'
import Post from '../../utils/schemas/Post'

const Blog = ({ staticPosts }) => {
  const [posts, setPosts] = useState(staticPosts)

  useEffect(() => {
    fetch('/api/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data)
      })
  }, [])

  return (
    <Main>
      <SEO title='Blog - Md Shahriyar Alam' url='https://shahriyar.dev/blog' description="Shahriyar's blogs. Read Now..." />

      <Container className='max-w-5xl py-20'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl text-white font-black text-center mb-10'>Blog</h1>
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
            {posts.map(post => <PostCard key={post._id} blog={post} />)}
          </div>
        </div>
      </Container>
    </Main>
  )
}

export default Blog

export const getStaticProps = async () => {
  const data = await Post.find({})

  const posts = data.map(post => {
    const modifiedPost = post.toObject()
    modifiedPost._id = post._id.toString()
    modifiedPost.createdAt = post.createdAt.toISOString()
    modifiedPost.updatedAt = post.updatedAt.toISOString()
    modifiedPost.tags = post.tags.map(tag => ({ value: tag.value, label: tag.label }))
    return modifiedPost
  })

  return {
    props: {
      staticPosts: posts
    },
    revalidate: 10
  }
}