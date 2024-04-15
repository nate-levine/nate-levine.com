import * as React from 'react'
import Layout from '../components/layout'

const BlogPage = () => {
  return (
    <Layout>
      <h1 class="h-[100vh] text-black text-6xl font-geist font-bold text-[12vw] py-20">Blog goes here</h1>
    </Layout>
  )
}


export default BlogPage

export const Head = () => <title>Blog</title>