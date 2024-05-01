import * as React from 'react'
import Layout from '../components/layout'
import BlogView from '../components/blogView'

const IndexPage = () => {

  return (
    <Layout>
      <div class="h-auto min-h-[100vh]">
        <h1 class="text-right text-black text-6xl font-serif font-bold text-[25vw] leading-[19vw] pt-20">Nate Levine</h1>
        <div class="font-sans flex flex-col lg:flex-row border-solid border-t-2 border-b-2 border-black">
          <div class="py-20 flex-1 border-dashed border-b-2 lg:border-b-0 lg:border-r-2 border-black text-xl">
            <div class="w-[80%] mx-auto leading-8">
              <h1 class="font-bold text-4xl">What's up?</h1>
              <br />
              <p>
                I'm Nate, a senior at Worcester Polytechnic Institute (WPI). I'm currently pursuing a 
                Bachelors in mechanical engineering and a minor in computer science.
              </p>
              <br />
              <p>
                This site is where I share my ideas, interests, and thoughts on topics ranging from
                software development, to productivity, to food science.
              </p>
              <br />
              <p>
                I'd recommend you get started by reading one of the featured articles on this page. If
                you don't have time right now, I'd suggest signing up for my newsletter, where I send
                out a weekly article about something interesting.
              </p>
              <br />
              <p>
                For any inquiries please contact me at <a href="mailto:n8levine11@gmail.com" class="underline">n8levine11@gmail.com</a>
              </p>
              <br />
              <p>
                Follow me on:
              </p>
              <ul class="list-disc list-inside">
                <li><a href="https://github.com/nate-levine" class="underline">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/nate-levine-/" class="underline">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div class="py-20 flex-1">
            <div class="w-[80%] mx-auto">
              <BlogView grid_config={"grid md:grid-cols-2 lg:grid-cols-2 gap-6"} num_articles={6} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage