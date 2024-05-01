import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import BlogTags from './blogTags'

const BlogView = ({ grid_config, num_articles }) => {

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
                    }
                    id
                    excerpt
                }
            }
        }
    `)

    return (
        <div class={grid_config}>
        {
            data.allMdx.nodes.slice(0, num_articles).map(node => (
            <article key={node.id}>
                <h2 class="h-full">
                <Link to={`/blog/${node.frontmatter.slug}`}>
                    <div class="h-full group font-sans text-xl p-3 shadow-[8px_8px_0_black] border-solid border-2 border-black hover:shadow-[8px_8px_0_-2px_#fbf1c7,8px_8px_0_black] rounded-2xl hover:bg-black duration-100">
                    <div class="flex flex-col h-full group-hover:text-[#fbf1c7]">
                        <div class="flex-auto">
                            <div class="font-bold">{node.frontmatter.title}</div>
                            <div class="h-2" />
                            <BlogTags tags={node.frontmatter.tags} />
                        </div>
                        <div class="h-2" />
                        <div class="h-flex text-right font-bold">{node.frontmatter.date}</div>
                    </div>
                    </div>
                </Link>
                </h2>
            </article>
            ))
        }
        </div>
    )
}

export default BlogView