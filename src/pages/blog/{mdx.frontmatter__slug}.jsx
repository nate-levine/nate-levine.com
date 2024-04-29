import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from "../../components/layout"

const BlogPost = ({ data, children }) => {
  return (
    <Layout>
      <div class="h-auto min-h-[100vh]">
        <h1 class="text-black text-center text-6xl font-sans font-bold pt-20 pb-10">{data.mdx.frontmatter.title}</h1>
        <h2 class="text-black text-center text-4xl font-sans font-regular pb-20">{data.mdx.frontmatter.date}</h2>
        <div class="text-black text-xl text-left font-serif w-[50%] mx-auto pb-10 leading-relaxed">
          {children}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MM.DD.YY")
      }
    }
  }
`

export const Head = ({ data }) => <title>{data.mdx.frontmatter.title}</title>

export default BlogPost