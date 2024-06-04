import * as React from 'react'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import ArticleView  from '../../components/articleView'
import ArticleTags from '../../components/articleTags'
import * as Components from '../../components/mdx/mdx_components'
import TableOfContents from '../../components/tableOfContents'
import relatedArticles from '../../components/relatedArticles'
import SEO from '../../components/seo'

const ArticlePost = ({ data, children }) => {

  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout>
      <div className="pt-20 max-w-[85%] sm:w-[640px] mx-auto">
        <h1 className="text-black text-4xl font-serif font-bold">{data.mdx.frontmatter.title}</h1>
        <div className="h-8" />
        <p className="text-black max-text-2xl font-sans font-regular">{data.mdx.frontmatter.date}</p>
        <div className="h-8" />
        <ArticleTags tags={data.mdx.frontmatter.tags} isFeatured={data.mdx.frontmatter.isFeatured} />
      </div>
      <div className="h-8 border-dashed border-black border-b-2" />
      <div className="flex flex-col-reverse xl:flex-row pb-20">
        <div className="w-[25%]" />
        <div className="h-auto min-h-[100vh] max-w-[85%] sm:w-[640px] mx-auto">
          <div className="text-black text-2xl text-left font-serif mx-auto py-10 leading-relaxed">   
            {/* Hero image */}
            { image && <Components.Image src={image} alt={data.mdx.frontmatter.hero_image_alt} to={data.mdx.frontmatter.hero_image_credit_link}>{data.mdx.frontmatter.hero_image_alt}</Components.Image> }
            {/* Article contents */}
            {children}
          </div>
        </div>
        <TableOfContents />
      </div>
      <div className="border-solid border-black border-b-2" />
      <div className="h-fit"> 
        <div className="py-20 max-w-[75vw] mx-auto">
          <p className="font-bold text-4xl pb-10">Related Articles</p>
          <ArticleView grid_config={"grid md:grid-cols-1 lg:grid-cols-3 gap-6"} filterFunc={relatedArticles(data.mdx, 3)} />
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
        date(formatString: "MMMM Do, YYYY")
        tags
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      excerpt
    }
  }
`
export const Head = ({ data }) => <SEO
  title={`${data.mdx.frontmatter.title} - Nate Levine`}
  description={data.mdx.except}
  image={data.mdx.frontmatter.hero_image_credit_link}
  article={false}
/>

export default ArticlePost