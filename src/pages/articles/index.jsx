import * as React from 'react'
import { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import ArticleView from '../../components/articleView'

const ArticlePage = ({ data }) => {
  const [selectedTags, setSelectedTags] = useState([])

  let all_tags = []
  data.allMdx.nodes.forEach(node => (
      node.frontmatter.tags.forEach(tag => {
          if (!all_tags.includes(tag) && tag !== "FEATURED") { all_tags.push(tag) }
      })
  ))
  all_tags.sort()
  all_tags.unshift("FEATURED")
  
  let tagFilter = (nodes) => {
    // If any filters are applied
    if (selectedTags.length > 0) {
      // Return nodes which have all the selected filter tags
      return nodes.filter((node) => {
        return selectedTags.every(tag => node.frontmatter.tags.includes(tag))
      })
    } else {
      return nodes
    }
  }

  return (
    <Layout>
      <div class="h-auto min-h-[100vh] max-w-[75vw] mx-auto py-20">
        <h1 class="text-center text-6xl font-serif font-bold pb-10">Explore Articles</h1>
        <div class="group flex flex-row flex-wrap gap-x-2 gap-y-2 font-sans font-regular text-sm">
          {
              // Enumerate over each tag
              all_tags.map(tag => {
                  let classString = ""
                  if (selectedTags.includes(tag)) {
                    classString = "flex flex-row border-solid border-black border-2 bg-black focus:bg-black text-primary focus:text-primary rounded-full px-3 py-1 duration-100"
                  } else {
                    classString = "flex flex-row border-solid border-black border-2 bg-primary focus:bg-primary text-black focus:text-black rounded-full px-3 py-1 duration-100"
                  }

                  let starClassString = ""
                  if (tag == "FEATURED") {
                    if (selectedTags.includes(tag)) {
                      starClassString = "h-5 fill-primary animate-rotate duration-100"
                    } else {
                      starClassString = "h-5 fill-black duration-100"
                    }
                  }

                  return (
                    <button class={classString} onClick={() => {
                      // Add or remove filter tags from state
                      if (selectedTags.includes(tag)) {
                        setSelectedTags(selectedTags.filter(selectedTag => { return selectedTag !== tag }))
                      } else {
                        setSelectedTags([...selectedTags, tag])
                      }
                    }}>
                        <div class="left-1 pr-2">
                          {/*
                            From: https://www.svgrepo.com/svg/521794/plus
                          */}
                          {selectedTags.includes(tag) ?
                            <svg x="0px" y="0px" viewBox="2 2 20 20" class="my-[0.2rem] h-3 rotate-[45deg] duration-100">
                              <path class="fill-primary" d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V11H3C2.44772 11 2 11.4477 2 12C2 12.5523 
                              2.44772 13 3 13H11V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V13H21C21.5523 13 22 12.5523 22 
                              12C22 11.4477 21.5523 11 21 11H13V3Z" fill="#0F0F0F"/>
                            </svg> :
                            <svg x="0px" y="0px" viewBox="2 2 20 20" class="my-[0.2rem] h-3 rotate-0 duration-100">
                              <path class="fill-black" d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V11H3C2.44772 11 2 11.4477 2 12C2 12.5523 
                              2.44772 13 3 13H11V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V13H21C21.5523 13 22 12.5523 22 
                              12C22 11.4477 21.5523 11 21 11H13V3Z" fill="#0F0F0F"/>
                            </svg>
                          }
                        </div>
                        {
                          tag == "FEATURED"
                          ?
                          <div class="rounded-full rounded-full">
                            {/*
                                From https://logowik.com/rounded-star-vector-icon-14817.html
                                Generator: Adobe Illustrator 26.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)
                            */}
                            <svg version="1.0" id="katman_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="60 0 480 480" class={starClassString}>
                                <path d="M331.9,56.7l32.6,79.8c2.5,6.2,8,10.1,14.6,10.6l86,6.4c14.2,1,25.7,10.1,30.1,23.6
                                    c4.4,13.5,0.4,27.6-10.5,36.8l-65.9,55.7c-5.1,4.3-7.2,10.7-5.6,17.2l20.5,83.8c3.4,13.8-1.6,27.6-13.2,35.9
                                    c-11.5,8.4-26.1,8.9-38.2,1.4l-82.4-51l-82.4,51c-12.1,7.5-26.7,7-38.2-1.4c-11.5-8.4-16.5-22.1-13.2-35.9l20.5-83.8
                                    c1.6-6.5-0.5-12.9-5.6-17.2l-65.9-55.7c-10.9-9.2-14.9-23.3-10.5-36.8c4.4-13.5,15.9-22.6,30.1-23.6l86-6.4
                                    c6.7-0.5,12.10-4.4,14.6-10.6l32.6-79.8c5.4-13.2,17.5-21.3,31.8-21.3C314.4,35.3,326.5,43.5,331.9,56.7L331.9,56.7z"/>
                            </svg>
                          </div> 
                          :
                          <div>{tag}</div>
                        }
                    </button>
                  )
              })
          }
        </div>
        <div class="h-10" />
        <ArticleView grid_config={"grid md:grid-cols-2 lg:grid-cols-3 gap-6"} filterFunc={tagFilter} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
        nodes {
            frontmatter {
                date(formatString: "MM.DD.YY")
                title
                slug
                tags
            }
            id
            excerpt
        }
    }
  }
`

export const Head = () => <title>Articles</title>

export default ArticlePage