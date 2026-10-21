import * as React from 'react'

const ArticleTags = ({ tags }) => {

    const colors = ['red', 'yellow', 'blue']
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
                    {/* STANDARD
                    <svg version="1.0" id="katman_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="60 0 480 480" className="h-5 fill-primary group-hover:animate-rotate group-hover:fill-yellow">
                        <path d="M331.9,56.7l32.6,79.8c2.5,6.2,8,10.1,14.6,10.6l86,6.4c14.2,1,25.7,10.1,30.1,23.6
                            c4.4,13.5,0.4,27.6-10.5,36.8l-65.9,55.7c-5.1,4.3-7.2,10.7-5.6,17.2l20.5,83.8c3.4,13.8-1.6,27.6-13.2,35.9
                            c-11.5,8.4-26.1,8.9-38.2,1.4l-82.4-51l-82.4,51c-12.1,7.5-26.7,7-38.2-1.4c-11.5-8.4-16.5-22.1-13.2-35.9l20.5-83.8
                            c1.6-6.5-0.5-12.9-5.6-17.2l-65.9-55.7c-10.9-9.2-14.9-23.3-10.5-36.8c4.4-13.5,15.9-22.6,30.1-23.6l86-6.4
                            c6.7-0.5,12.10-4.4,14.6-10.6l32.6-79.8c5.4-13.2,17.5-21.3,31.8-21.3C314.4,35.3,326.5,43.5,331.9,56.7L331.9,56.7z"/>
                    </svg>
                    */}
                    {/* HALLOWEEN */}
                    <svg version="1.0" id="katman_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 520 520" className="h-5 fill-primary group-hover:animate-rotate group-hover:fill-yellow">
                    <g>
                        <path class="st0" d="M256.016,0C114.609,0,0,114.625,0,255.984C0,397.359,114.609,512,256.016,512
                            C397.391,512,512,397.359,512,255.984C512,114.625,397.391,0,256.016,0z M341.781,103.266l87.516,89.953l-127.766,33.109
                            L341.781,103.266z M256.016,245.781l25.859,37.016h-25.859h-25.891L256.016,245.781z M170.219,103.266l40.25,123.063
                            L82.703,193.219L170.219,103.266z M351.563,417.719l-3.5-26.719l-34.469,8.891v34.578c-18.188,5.688-37.5,8.828-57.625,8.828
                            c-14.156,0-27.953-1.563-41.219-4.5l-3.484-31.516l-40.078-4.344l1.391,21.234c-63.766-31-107.656-96.344-107.656-171.969
                            c0-10.922,0.922-21.609,2.672-32.016c9.484,40.938,43.531,75.844,90.813,96.344V357l43.844,3.438l1.25-29.766
                            c16.688,3.453,34.297,5.359,52.469,5.359c25,0,48.781-3.516,70.641-9.875l3.922,34.281l42.625-5.922l1.047-48.313
                            c36.422-20.922,62.141-51.297,70.203-86.016c1.75,10.406,2.703,21.094,2.703,32.016
                            C447.109,322.938,408.656,384.656,351.563,417.719z"/>
                    </g>
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