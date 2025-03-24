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
        <div className="font-serif flex flex-col lg:flex-row">
          <div className="py-20 flex-1 border-dotted border-b-[1px] lg:border-b-0 lg:border-r-[1px] border-black text-2xl bg-[url('../images/IMG_7455.png')] bg-[center_bottom_-12rem] md:bg-[position:0%_25.5vw] bg-contain md:bg-cover bg-no-repeat">
            <div className="w-[85%] mx-auto leading-relaxed">
              <h1 className="font-sans font-bold text-4xl ">What's up?</h1>
              <br />
              <p>
                I'm Nate, a student at Worcester Polytechnic Institute (WPI) graduating in 2025. I'm currently pursuing a 
                Bachelors in mechanical engineering and a minor in computer science.
              </p>
              <br />
              <p>
                This site is where I share my ideas, interests, and thoughts on topics ranging from
                engineering, to software development, to food science.
              </p>
              <br />
              <p>
                I'd recommend you get started by reading one of the featured articles on this page.{/* If
                you don't have time right now, I'd suggest signing up for my newsletter, where I send
                out a weekly article about something interesting.*/}
              </p>
              <br />
              <p>
                For any inquiries please contact me at <a href="mailto:n8levine11@gmail.com" className="underline">n8levine11@gmail.com</a>
              </p>
              <br />
              <div className="flex flex-row space-x-5">
                {/*
                  LinkedIn Logo

                  From: https://www.svgrepo.com/svg/108614/linkedin
                  Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools
                */}
                <a href="https://www.linkedin.com/in/nate-levine-/">
                  <div className="group p-3 bg-primary hover:bg-black border-solid border-black border-[1px] rounded-md shadow-[8px_8px_0_#22190e] hover:shadow-[8px_8px_0_-1px_#fbf1c7,8px_8px_0_#22190e] duration-100">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310" className="h-10">
                      <g id="XMLID_801_" className="fill-black group-hover:fill-primary">
                        <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
                          C77.16,101.969,74.922,99.73,72.16,99.73z"/>
                        <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
                          c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/>
                        <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
                          c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
                          c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
                          C310,145.43,300.549,94.761,230.454,94.761z"/>
                      </g>
                    </svg>
                  </div>
                </a>
                {/*
                  GitHub Logo

                  From: https://github.com/logos
                */}
                <a href="https://github.com/nate-levine">
                  <div className="group p-2 bg-primary hover:bg-black border-solid border-black border-[1px] rounded-md hover:stroke-black hover:stroke-[3] shadow-[8px_8px_0_#22190e] hover:shadow-[8px_8px_0_-1px_#fbf1c7,8px_8px_0_#22190e] duration-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 105 105" className="h-12">
                      <path className="fill-black group-hover:fill-primary" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* Articles */}
          <div className="py-20 flex-1 bg-[url('../images/IMG_7456.png')]  bg-[center_bottom_-5rem] md:bg-[position:0%_21vw]  bg-contain md:bg-cover bg-no-repeat">
            <div className="w-[85%] mx-auto">
              <ArticleView grid_config={"md:columns-2 lg:columns-2 gap-6"} filterFunc={isFeatured} />
              <Link to="/articles">
                <div className="font-sans text-xl m-auto text-center w-[240px] mt-10 p-3 shadow-[8px_8px_0_#22190e] hover:shadow-[8px_8px_0_-1px_#fbf1c7,8px_8px_0_#22190e] border-solid border-[1px] border-black rounded-md bg-primary hover:bg-black hover:text-primary duration-100">
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