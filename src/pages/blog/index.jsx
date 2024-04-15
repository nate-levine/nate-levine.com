import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <div class="h-auto min-h-[100vh]">
        <h1 class="text-black text-center text-[7vw] font-geist font-bold py-20">Blog Posts</h1>
        <div class="text-xl leading-[50px]">
        {
          data.allMdx.nodes.map(node => (
            <article key={node.id} class="hover:text-gray-500 py-5">
              <h2>
                <Link to={`/blog/${node.frontmatter.slug}`}>
                  <div class="flex md:flex-row flex-col justify-between md:w-[50vw] max-w-[75vw] min-h-[10vh] mx-auto md:text-xl text-base p-5 shadow-[10px_10px_0px_rgba(0,0,0,1)]">
                    <div class="md:flex-[35vw] font-bold">{node.frontmatter.title}</div>
                    <div class="md:flex-[5vw]" />
                    <div class="md:flex-auto text-right font-regular">{node.frontmatter.date}</div>
                  </div>
                </Link>
              </h2>
            </article>
          ))
        }
        </div>
      </div>
    </Layout>
  )
}

// Page query to local file system
export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MM.DD.YY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <title>Blog</title>

export default BlogPage