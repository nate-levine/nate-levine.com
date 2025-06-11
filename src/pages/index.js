import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import ArticleView from '../components/articleView'
import MainPageAnimation from '../components/mainPageAnimation'
import SEO from '../components/seo'

const IndexPage = () => {

  // Filter all articles except those that are featured
  const isFeatured = (nodes) => {
    return nodes.filter((node) => node.frontmatter.tags.includes("FEATURED"))
  }

  return (
    <Layout>
      <div className="h-auto min-h-[100vh] text-black">
        <div className="font-serif flex flex-col lg:flex-col">
          <div className="py-20 flex-1 border-dotted border-b-[1px] lg:border-b-0 lg:border-b-[1px] border-black text-2xl">
            <div className="w-[85%] md:w-[650px] mx-auto leading-relaxed">
              <h1 className="text-left text-6xl font-serif font-bold text-black ">What's up?</h1>
              <br />
              <p>
                I'm Nate, a graduate of the Worcester Polytechnic Institute (WPI) class of 2025 with a Bachelor in mechanical engineering and a minor in computer science.
              </p>
              <br />
              <p>
                This site is where I share my ideas, interests, and thoughts relating to topics ranging from
                engineering, to software, to marketing.
              </p>
              <br />
              <p>
                I'd recommend you get started by reading one of the featured articles on this page. {/* If
                you don't have time right now, I'd suggest signing up for my newsletter, where I send
                out a weekly article about something interesting.*/}
                For any inquiries please email me at <a href="mailto:n8levine11@gmail.com" className="underline">n8levine11@gmail.com</a>
              </p>
            </div>
          </div>
          {/* Articles */}
          <div className="py-20 flex-1">
            <div className="w-[85%] mx-auto">
              <ArticleView grid_config={"md:columns-2 lg:columns-5 gap-6"} filterFunc={isFeatured} />
              <Link to="/articles">
                <div className="font-sans text-xl m-auto text-center w-[240px] mt-10 p-3 shadow-[8px_8px_0_#22190e] hover:shadow-[8px_8px_0_-1px_#fbf1c7,8px_8px_0_#22190e] border-solid border-[1px] border-black rounded-md bg-primary hover:bg-black hover:text-primary duration-0">
                  Explore more articles
                  </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <SEO
  title={"Nate Levine"}
  description={"A place to share my ideas, interests, and thoughts on topics ranging from engineering, to software development, to food science."}
  article={false}
/>

export default IndexPage