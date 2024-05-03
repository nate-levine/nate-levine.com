import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import BlogTags from './blogTags'

const BlogView = ({ grid_config, filter }) => {

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
                        isFeatured
                    }
                    id
                    excerpt
                }
            }
        }
    `)

    /*
        It is not possible to filter data in this component's GraphQL query using variables,
        given that it is static. It also may be less performant since it could require more
        than one query.

        It is likely that it is more performant to query all the blog frontmatter at once,
        and then filter it after using JSX methods. This strategy also allows for different
        first-class filter functions to be passed to this component.
    */
    // If no first-class function is passed as a prop, default the filter to do nothing
    if (!filter) {
        filter = (nodes) => { return nodes }
    }

    return (
        <div class={grid_config}>
        {
            filter(data.allMdx.nodes).map(node => (
            <article key={node.id}>
                <h2 class="h-full">
                <Link to={`/blog/${node.frontmatter.slug}`}>
                    <div class="h-full group font-sans text-xl p-3 shadow-[8px_8px_0_black] border-solid border-2 border-black hover:shadow-[8px_8px_0_-2px_#fbf1c7,8px_8px_0_black] rounded-2xl hover:bg-black duration-100">
                    <div class="flex flex-col h-full group-hover:text-[#fbf1c7]">
                        <div class="flex-auto">
                            <div class="font-bold">{node.frontmatter.title}</div>
                            <div class="h-2" />
                            <BlogTags tags={node.frontmatter.tags} isFeatured={node.frontmatter.isFeatured} />
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