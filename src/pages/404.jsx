import * as React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import ArticleView from "../components/articleView"

const NotFoundPage = () => {
  
  const isFeatured = (nodes) => {
    return nodes.filter((node) => node.frontmatter.tags.includes("FEATURED"))
  }

  return (
    <Layout>
      <div class="h-auto min-h-[100vh]">
        <div class="max-w-[75vw] mx-auto py-20">
          <h1 class="text-left text-6xl font-serif font-bold pb-10">Page Not Found</h1>
          <div class="font-sans text-left text-xl pt-5">
            <p>Sorry, this page does not exist or is unavailable. Try checking for typos in the URL.</p>
            <p class="pt-10">  
              <Link to="/" class="underline">Click here to return to the main page</Link>, or explore some of the featured articles:
            </p>
          </div>
        </div>
        <div class="border-dashed border-black border-b-2" />
        <div class="max-w-[75vw] mx-auto py-20">
          <ArticleView grid_config={"grid md:grid-cols-2 lg:grid-cols-3 gap-6"} filterFunc={isFeatured} />
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Page Not Found</title>
