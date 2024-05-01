import * as React from 'react'

const BlogTags = ({ tags }) => {
    const colors = ['red', 'green', 'yellow', 'blue', 'purple']

    function getColor(index) {
        // Colors cycle through color list
        return colors[index % colors.length]
    }

    return (
        <div class="flex flex-row flex-wrap gap-x-2 gap-y-2 font-sans font-regular text-sm">
            {
                // Enumerate over each tag
                tags.map((tag, index) => {
                    // Get color for tag index
                    const color = getColor(index)
                    // "Bake" tailwind class string so that tailwind preprocessor doesn't remove it
                    let classString = `bg-${color} rounded-full px-3 py-1`
                    // Add class string to tag style
                    return <p class={classString}>{tag}</p>
                })
            }
        </div>
    )
}


export default BlogTags