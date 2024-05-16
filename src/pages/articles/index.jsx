import * as React from 'react'
import { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import ArticleView from '../../components/articleView'

const ArticlePage = ({ data }) => {
  const [selectedTags, setSelectedTags] = useState([])
  const [articleOrder, setArticleOrder] = useState("Latest")

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

  const sortOptions = ["Latest", "Oldest"]
  let orderArticles = (nodes) => {
    if (articleOrder === "Latest") {
      return nodes.sort((a, b) => { return new Date(b.frontmatter.date) - new Date(a.frontmatter.date) })
    }
    
    if (articleOrder === "Oldest") {
      return nodes.sort((a, b) => { return new Date(a.frontmatter.date) - new Date(b.frontmatter.date) })
    }
  }

  const toggleMenu = (e) => {
    const dropDownMenu = document.querySelector('.drop-down-menu')
    const dropDownArrow = document.querySelector('.drop-down-arrow')

    dropDownMenu.classList.toggle('hidden')
    dropDownArrow.classList.toggle('rotate-[-180deg]')
}

  return (
    <Layout>
      <div class="h-auto min-h-[100vh] max-w-[75vw] mx-auto py-20">
        <h1 class="text-left text-6xl font-serif font-bold pb-10">Explore Articles</h1>
        <div class="flex flex-row space-x-5 items-center justify-left" >
          <p class="font-serif font-bold text-xl" >Sort By:</p>
          <div class="inline-block min-w-[7vw] text-left text-sm font-sans font-regular border-solid border-black border-2 rounded-lg">
            <button type="button" onClick={toggleMenu} class="drop-down-button inline-flex w-full text-l justify-center gap-x-1.5 rounded-lg px-2 py-2 bg-primary">
              {
                articleOrder == "Latest"
                ?
                <svg class="drop-down-icon my-auto h-[0.9rem] w-5" id="eEy52ihAnbC1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 200" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
                  <line x1="0" y1="-49.962364" x2="0" y2="49.962364" transform="matrix(2.017858 0 0 1.578812 75 111.370907)" fill="none" stroke="#000" stroke-width="10" stroke-linecap="round"/>
                  <line x1="15.807301" y1="-15.807301" x2="-15.807302" y2="15.807302" transform="matrix(-2.017858 0 0 2.017859 106.896889 46.575094)" fill="none" stroke="#000" stroke-width="10" stroke-linecap="round"/>
                  <line x1="15.807301" y1="-15.807301" x2="-15.807302" y2="15.807302" transform="matrix(2.017858 0 0 2.017859 43.103111 46.575094)" fill="none" stroke="#000" stroke-width="10" stroke-linecap="round"/>
                </svg>
                :
                <svg class="drop-down-icon my-auto h-[0.9rem] w-5 rotate-[-180deg]" id="eEy52ihAnbC1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 200" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
                  <line x1="0" y1="-49.962364" x2="0" y2="49.962364" transform="matrix(2.017858 0 0 1.578812 75 111.370907)" fill="none" stroke="#000" stroke-width="10" stroke-linecap="round"/>
                  <line x1="15.807301" y1="-15.807301" x2="-15.807302" y2="15.807302" transform="matrix(-2.017858 0 0 2.017859 106.896889 46.575094)" fill="none" stroke="#000" stroke-width="10" stroke-linecap="round"/>
                  <line x1="15.807301" y1="-15.807301" x2="-15.807302" y2="15.807302" transform="matrix(2.017858 0 0 2.017859 43.103111 46.575094)" fill="none" stroke="#000" stroke-width="10" stroke-linecap="round"/>
                </svg>
              }
              {articleOrder}
              <svg class="-mr-1 h-5 w-5" viewBox="0 0 20 20" aria-hidden="true">
                <path fill-rule="evenodd" class="drop-down-arrow origin-center duration-100" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"/>
              </svg>
            </button>
            <div class="drop-down-menu left-0 z-10 w-full origin-top-right bg-primary rounded-lg hidden">
              {
                sortOptions.map(option => {
                  if (option !== articleOrder)
                    return <button class="block text-center py-2 font-sans w-full hover:font-bold hover:bg-black hover:text-primary border-solid border-black border-t-2 duration-100" onClick={() => setArticleOrder(option)}>{option}</button>
                })
              }
            </div>
          </div>
        </div>
        <div class="group flex flex-row flex-wrap gap-x-2 gap-y-2 font-sans font-regular text-sm pt-5 pb-10">
        <p class="font-serif font-bold text-xl pr-2 items-center" >Tags:</p>
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
        <ArticleView grid_config={"grid md:grid-cols-2 lg:grid-cols-3 gap-6"} filterFunc={tagFilter} sortFunc={orderArticles} />
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

export const Head = () => <title>Explore Articles</title>

export default ArticlePage