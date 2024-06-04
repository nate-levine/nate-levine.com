import * as React from 'react'
import { useState, useEffect } from 'react'

const TableOfContents = () => {
    // Store section headers in table of contents state
    const [tableOfContents, setTableOfContents] = useState()
    /*
        The currently active section is the section which the window is currently viewing
    */
    const [activeSection, setActiveSection] = useState()

    useEffect(() => {
        // Query all sections on the page
        const contents = Array.from(document.querySelectorAll(".section, .subsection"))
        
        // Populate the "tableOfContents" state
        setTableOfContents(
            <ul className="font-sans font-regular text-base space-y-1">
            {
                // For each section
                contents.map((section, id) => {
                    // Style the section based on whether it is a section or subsection
                    let classString = (section.className == "section" ? "text-left ml-0" : "text-left ml-8")
                    // Get the section header
                    let header = section.children[0]
                    
                    return (
                        <li key={id}>
                        {/* Scroll behavior */}
                            {/* When a section is clicked, scroll to that section's header */}
                            <button type="button" className={classString} onClick={() =>
                                window.scroll({
                                    top: header.offsetTop + 5,
                                    behavior: 'smooth'
                                })
                            }>
                                {
                                    // If the section is currently active, style it accordingly in the table of contents
                                    header == activeSection ? <div className="font-bold duration-100">{header.innerText}</div> : <div className="underline p-1 duration-100">{header.innerText}</div>
                                }
                            </button>
                        </li>
                    )
                })
            }
            </ul>
        )
        
        // Intersection observer options
        let options = {
            root: null,
            rootMargin: "0% 0% -100% 0%",
            threshold: 0.0,
        }

        /*
            The intersection observer tracks if the window is currently viewings each section
        */
        const observer = new IntersectionObserver(
            (contents) => {
                contents.forEach((section) => {
                    // If a section is being viewed, set that section as the active section
                    if (section.isIntersecting) {
                        setActiveSection(section.target.children[0])
                    }
                })
            },
            options
        )

        // Observe each section when they are rendered
        contents.forEach((section) => {
            observer.observe(section)
        })

        // Unobserve each section when they are unrendered
        return () => {
            contents.forEach((section) => {
            observer.unobserve(section)
        })}
    }, [activeSection])

    return (
        <div className="xl:absolute xl:sticky xl:top-0 h-fit pt-10 xl:pb-14 mx-auto max-w-[85%] w-[640px] xl:w-[25%] xl:max-w-full xl:mr-auto">
            <div className="mx-auto xl:w-[85%] border-dashed border-black border-l-2 p-6">
                <p className="font-sans font-bold text-2xl pb-3">Table of Contents</p>
                {tableOfContents}
            </div>
        </div>
    )
}

export default TableOfContents