/*
    Rudimentary algorithm for finding related articles to a particular article
*/
const relatedArticles = (current, numArticles) => {
    // Return a function that takes the list of nodes
    return (nodes) => {
        /*
            1. For each node in nodes, store how many tags are matching with the current node in key value pairs
        */
        let matchingTagsMap = new Map()
        nodes.forEach(node => {

            if (node.frontmatter.title === current.frontmatter.title) {     // If the node is the current node, set its key (matching tags) to -1
                matchingTagsMap.set(node, -1)
            } else {
                matchingTagsMap.set(node, 0)

                node.frontmatter.tags.forEach(tag => {

                    if (tag !== "FEATURED" && current.frontmatter.tags.includes(tag))   // Ignore the FEATURED tag
                        matchingTagsMap.set(node, matchingTagsMap.get(node) + 1)
                })
            }
        })

        /*
            2. Select N nodes (key) with the highest number (value) of matching tags
        */
        let relatedNodes = []
        for (var i = 0; i < numArticles; i++) {
            const maxNode = [...matchingTagsMap.entries()].reduce((a, b) => a[1] > b[1] ? a : b)      // Find the node with the highest matching tags
            relatedNodes.push(maxNode[0])                                                                       // Add that node to the related nodes
            matchingTagsMap.delete(maxNode[0])                                                                  // Delete that node from the map
        }
        return relatedNodes
    }
}

export default relatedArticles