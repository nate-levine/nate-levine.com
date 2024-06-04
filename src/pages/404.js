import * as React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import ArticleView from "../components/articleView"
import SEO from '../components/seo'

const NotFoundPage = () => {
  
  // Filter all articles except those that are featured
  const isFeatured = (nodes) => {
    return nodes.filter((node) => node.frontmatter.tags.includes("FEATURED"))
  }

  return (
    <Layout>
      <div className="h-auto min-h-[100vh]">
        <div className="max-w-[75vw] mx-auto py-20">
          <h1 className="text-left text-6xl font-serif font-bold pb-10">Page Not Found</h1>
          <div className="font-sans text-left text-xl pt-5">
            <p>Sorry, this page doesn't exist or is unavailable. Try checking the URL for typos.</p>
            <p className="pt-10">  
              <Link to="/" className="underline">Click here to return to the main page</Link>, or check out one of the featured articles:
            </p>
          </div>
        </div>
        <div className="border-dashed border-black border-b-2" />
        <div className="max-w-[75vw] mx-auto py-20">
          <ArticleView grid_config={"grid md:grid-cols-2 lg:grid-cols-3 gap-6"} filterFunc={isFeatured} />
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <SEO
  title={"Page Not Found"}
  description={"A place to share my ideas, interests, and thoughts on topics ranging from engineering, to software development, to food science."}
  article={false}
/>
