import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ArticleTags from './articleTags'

const ArticleView = ({ grid_config, filterFunc, sortFunc }) => {

    // Because the graphQL layer is used in a component and not a page, useStaticQuery is necessary
    const data = useStaticQuery(graphql`
        query {
            allMdx(sort: { frontmatter: { date: DESC }}) {
                nodes {
                    frontmatter {
                        date(formatString: "MM.DD.YY")
                        title
                        slug
                        tags
                        hero_image {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                    id
                    excerpt
                }
            }
        }
    `)

    // Get a list of all the tags from all the articles
    let all_tags = []
    data.allMdx.nodes.forEach(node => (
        node.frontmatter.tags.forEach(tag => {
            // If the tag is not in the list yet, add it
            if (!all_tags.includes(tag)) { all_tags.push(tag) }
        })
    ))

    /*
        It is not possible to filter data in this component's GraphQL query using variables,
        given that it is static. That method may also be less performant because it could require more
        than one query.

        It is likely more performant to query all the article frontmatter at once,
        and then filter it after using JSX methods. This strategy also allows for different
        first-class filter functions to be passed to this component.
    */
    // If no first-class filter function is passed as a prop, default the filter to do nothing
    if (!filterFunc) {
        filterFunc = (nodes) => { return nodes }
    }
    // If no first-class sort function is passed as a prop, default the sort to do nothing
    if (!sortFunc) {
        sortFunc = (nodes) => { return nodes }
    }

    return (
        <div className={grid_config}>
        {
            sortFunc(filterFunc(data.allMdx.nodes)).map(node => (
                <article key={node.id}>
                    <div className="py-3 break-inside-avoid text-black">
                        <Link to={`/articles/${node.frontmatter.slug}`}>
                            <div className="group font-sans text-xl p-3 shadow-[8px_8px_0_#22190e] border-solid border-[1px] border-black hover:shadow-[8px_8px_0_-1px_#ffeacf,8px_8px_0_#22190e] rounded-md bg-primary hover:bg-black duration-0">
                                <div className="flex flex-col group-hover:text-[#ffeacf] duration-0">
                                    <div className="flex-auto pb-2">
                                        <div className="font-bold pb-2">{node.frontmatter.title}</div>
                                        {/*{
                                            getImage(node.frontmatter.hero_image) 
                                            ?
                                            <div className="relative max-h-[250px] overflow-hidden">
                                                <GatsbyImage 
                                                    image={getImage(node.frontmatter.hero_image)} 
                                                    alt={node.frontmatter.hero_image_alt} 
                                                    className="w-[100%] flex m-auto mb-4 border-solid border-black group-hover:border-primary rounded-sm border-[1px] duration-0" 
                                                />
                                                <div className="h-[250px] absolute inset-0 bg-gradient-to-t from-primary from-10% to-transparent to-25%" />
                                                <div className="h-[250px] absolute inset-0 bg-gradient-to-t from-black from-10% to-transparent to-25% duration-0 group-hover:opacity-100 opacity-0" />
                                            </div>
                                            : 
                                            <div />
                                        }*/}
                                        <ArticleTags tags={node.frontmatter.tags} />
                                    </div>
                                    {/*<div className="h-flex text-right font-bold">{node.frontmatter.date}</div>*/}
                                </div>
                            </div>
                        </Link>
                    </div>
                </article>
            ))
        }
        </div>
    )
}

export default ArticleView