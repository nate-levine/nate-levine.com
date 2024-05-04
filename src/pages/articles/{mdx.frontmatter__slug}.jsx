import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import ArticleView  from '../../components/articleView'
import ArticleTags from '../../components/articleTags'
import * as Components from '../../components/mdx/mdx_components'

const ArticlePost = ({ data, children }) => {

  const image = getImage(data.mdx.frontmatter.hero_image)

  const firstThree = (nodes) => {
    return nodes.slice(0, 3)
  }

  return (
    <Layout>
      <div class="h-auto min-h-[100vh] max-w-[85%] sm:w-[640px] mx-auto">
        <div class="pt-20">
          <h1 class="text-black text-2xl lg:text-4xl font-serif font-bold">{data.mdx.frontmatter.title}</h1>
          <div class="h-8" />
          <h2 class="text-black max-text-2xl font-sans font-regular">{data.mdx.frontmatter.date}</h2>
          <div class="h-8" />
          <ArticleTags tags={data.mdx.frontmatter.tags} isFeatured={data.mdx.frontmatter.isFeatured} />
          <div class="h-8 border-dashed border-black border-b-2" />
        </div>
        <div class="text-black text-xl text-left font-serif mx-auto pb-10 leading-relaxed">   
          <div class="pt-10 text-center">    
          {
            image ?
            <GatsbyImage
              image={image}
              alt={data.mdx.frontmatter.hero_image_alt}
              class="rounded-md border-solid border-black border-2 shadow-[8px_8px_0_black]"
            /> :
            <p>NO IMAGE</p>
          }
            <sub>
              <Components.ExternalLink endpoint={data.mdx.frontmatter.hero_image_credit_link}>
                {data.mdx.frontmatter.hero_image_alt}
              </Components.ExternalLink>
            </sub>
          </div>
          {children}
        </div>
      </div>
      <div class="border-solid border-black border-b-2" />
      <div class="h-fit"> 
        <div class="py-20 max-w-[75vw] mx-auto">
          <h1 class="font-bold text-4xl pb-10">Related Articles</h1>
          <ArticleView grid_config={"grid md:grid-cols-1 lg:grid-cols-3 gap-6"} filter={firstThree} />
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
        isFeatured
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = ({ data }) => <title>{data.mdx.frontmatter.title}</title>

export default ArticlePost