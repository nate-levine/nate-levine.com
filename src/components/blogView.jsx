import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const BlogView = ({ grid_config }) => {

    // Because the graphQL layer is used in a component and not a page, useStaticQuery is necessary
    const data = useStaticQuery(graphql`
        query {
            allMdx(sort: { frontmatter: { date: DESC }}) {
                nodes {
                    frontmatter {
                        date(formatString: "MM.DD.YY")
                        title
                        slug
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
            data.allMdx.nodes.map(node => (
            <article key={node.id}>
                <h2 class="h-full">
                <Link to={`/blog/${node.frontmatter.slug}`}>
                    <div class="h-full group font-geist font-bold text-xl p-3 shadow-[8px_8px_0_rgba(0,0,0,1)] border-solid border-2 border-black hover:shadow-[8px_8px_0_-2px_#fbf1c7,8px_8px_0_black] rounded-2xl hover:bg-black duration-100">
                    <div class="flex flex-col h-full group-hover:text-[#fbf1c7]">
                        <div class="flex-auto">{node.frontmatter.title}</div>
                        <div class="h-2" />
                        <div class="h-flex flex flex-row flex-wrap gap-x-2 gap-y-2 text-sm">
                            <p class="bg-[#fb4934] rounded-full px-3 py-1">Software</p>
                            <p class="bg-[#b8bb26] rounded-full px-3 py-1">Productivity</p>
                            <p class="bg-[#fabd2f] rounded-full px-3 py-1">Review</p>
                        </div>
                        <div class="h-2" />
                        <div class="h-flex text-right font-regular">{node.frontmatter.date}</div>
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