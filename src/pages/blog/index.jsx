import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import BlogView from "../../components/blogView"

const BlogPage = () => {
  return (
    <Layout>
      <div class="h-auto min-h-[100vh]">
        <h1 class="text-black text-center text-6xl font-geist font-bold py-20">Blog Posts</h1>
        <BlogView cols_md={2} cols_lg={3} />
      </div>
    </Layout>
  )
}

export const Head = () => <title>Blog</title>

export default BlogPage