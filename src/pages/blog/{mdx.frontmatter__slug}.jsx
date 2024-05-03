import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import BlogView  from '../../components/blogView'
import BlogTags from '../../components/blogTags'

const BlogPost = ({ data, children }) => {

  /*
    I'm not happy with this algorithm, but it works for right now

    It needs to be more streamlined, and also suggest better imo
  */
  const related = (nodes) => {
    let related_tag_count = []

    /*
      Count how many tags from each article are shared by the current article
    */
    for (var i = 0; i < nodes.length; i++) {
      const node = nodes[i];

      // Disregard the current article
      if (node.frontmatter.title == data.mdx.frontmatter.title){
        related_tag_count[i] = -1
      // If not the current article, count how many tags it shares with the current one
      } else {
        related_tag_count[i] = 0;

        for (var j = 0; j < node.frontmatter.tags.length; j++) {
          let tag = node.frontmatter.tags[j];

          if (data.mdx.frontmatter.tags.includes(tag)) {
            related_tag_count[i]++;
          }
        }
      }
    }


    /*
      Select three article indices with the most related tags
    */
   console.log(related_tag_count)
    let top_related = [];
    for (var i = 0; i < 3; i++) {
      let max_index = 0;

      // If the starting index is already in the top related index, increment it
      if (top_related.includes(max_index)) {
        max_index++;
      }
      
      for (let j = 0; j < related_tag_count.length; j++) {
        if (related_tag_count[j] > related_tag_count[max_index]) {
          // If the index is not already in the top related index list
          if (!top_related.includes(j)) {
            max_index = j
          }
        }
      }

      // Add the index to the top related index list
      top_related.push(max_index);
    }

    
    /*
      Return the three articles with the most related tags
    */
    let top_related_articles = []
    for (var i = 0; i < 3; i++) {
      top_related_articles.push(nodes[top_related[i]]);
    }
    console.log(top_related)
    return top_related_articles;
  }

  return (
    <Layout>
      <div class="h-auto min-h-[100vh] max-w-[85%] sm:w-[640px] mx-auto">
        <div class="pt-20">
          <h1 class="text-black text-2xl lg:text-4xl font-sans font-bold">{data.mdx.frontmatter.title}</h1>
          <div class="h-8" />
          <h2 class="text-black max-text-2xl font-sans font-regular">{data.mdx.frontmatter.date}</h2>
          <div class="h-8" />
          <BlogTags tags={data.mdx.frontmatter.tags} isFeatured={data.mdx.frontmatter.isFeatured} />
          <div class="h-8 border-dashed border-black border-b-2" />
        </div>
        <div class="text-black text-xl text-left font-serif mx-auto pb-10 leading-relaxed">
          {children}
        </div>
      </div>
      <div class="border-solid border-black border-b-2" />
      <div class="h-fit"> 
        <div class="py-20 max-w-[75vw] mx-auto">
          <h1 class="font-bold text-4xl pb-10">Related Articles</h1>
          <BlogView grid_config={"grid md:grid-cols-1 lg:grid-cols-3 gap-6"} func={related} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        tags
        isFeatured
      }
    }
  }
`

export const Head = ({ data }) => <title>{data.mdx.frontmatter.title}</title>

export default BlogPost