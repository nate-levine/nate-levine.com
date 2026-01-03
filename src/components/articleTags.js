import * as React from 'react'

const ArticleTags = ({ tags }) => {

    const colors = ['red', 'green', 'yellow', 'blue']
    const getColor = (index) => {
        // Colors indices cycle through color list
        return colors[index % colors.length]
    }

    return (
        <div className="group flex flex-row flex-wrap gap-x-2 gap-y-2 font-sans font-regular text-sm text-black">
            {
                /* 
                    Add featured tag icon if the tag list includes a hidden "FEATURED" tag

                    The reason with works is that the and statement evaluates the first expression first.
                    If tags.includes("FEATURED") is true, then the second expression, the JSX, will be evaluated
                */
                tags.includes("FEATURED") &&
                <div className="bg-black px-1 py-1 rounded-full group-hover:animate-jump">
                    {/*
                        From https://logowik.com/rounded-star-vector-icon-14817.html
                        Generator: Adobe Illustrator 26.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)
                    */}
                    <svg version="1.0" id="katman_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="60 0 480 480" className="h-5 fill-primary group-hover:animate-rotate group-hover:fill-yellow">
                        <path d="M331.9,56.7l32.6,79.8c2.5,6.2,8,10.1,14.6,10.6l86,6.4c14.2,1,25.7,10.1,30.1,23.6
                            c4.4,13.5,0.4,27.6-10.5,36.8l-65.9,55.7c-5.1,4.3-7.2,10.7-5.6,17.2l20.5,83.8c3.4,13.8-1.6,27.6-13.2,35.9
                            c-11.5,8.4-26.1,8.9-38.2,1.4l-82.4-51l-82.4,51c-12.1,7.5-26.7,7-38.2-1.4c-11.5-8.4-16.5-22.1-13.2-35.9l20.5-83.8
                            c1.6-6.5-0.5-12.9-5.6-17.2l-65.9-55.7c-10.9-9.2-14.9-23.3-10.5-36.8c4.4-13.5,15.9-22.6,30.1-23.6l86-6.4
                            c6.7-0.5,12.10-4.4,14.6-10.6l32.6-79.8c5.4-13.2,17.5-21.3,31.8-21.3C314.4,35.3,326.5,43.5,331.9,56.7L331.9,56.7z"/>
                    </svg>
                </div>
            }
            {
                // Enumerate over each tag, not including the "FEATURED" tag
                tags.filter(tag => tag !== "FEATURED").map((tag, index) => {
                    // Get color for tag index
                    const color = getColor(index)
                    // "Bake" tailwind class string so that tailwind preprocessor doesn't remove it
                    let classString = `bg-${color} rounded-md px-3 py-1`
                    // Add class string to tag style
                    return <div key={index} className={classString}>{tag}</div>
                })
            }
        </div>
    )
}


export default ArticleTags