import * as React from 'react'
import { useState, useEffect } from 'react'

const TableOfContents = () => {
    const [tableOfContents, setTableOfContents] = useState()
    const [activeSection, setActiveSection] = useState()

    useEffect(() => {
        const contents = Array.from(document.querySelectorAll(".section, .subsection"))
        
        setTableOfContents(
            <div class="font-sans font-regular text-base space-y-1">
            {
                contents.map(section => {
                let classString = (section.className == "section" ? "text-left ml-0" : "text-left ml-8")
                let header = section.children[0]
                return (
                    <ul>
                    {/* Scroll behavior */}
                    <button type="button" onClick={() =>
                        window.scroll({
                        top: header.offsetTop + 5,
                        behavior: 'smooth'
                        })
                    }>
                        {
                        <li class={classString}>
                            {
                            header == activeSection ?
                            <div class="font-bold duration-100">{header.innerText}</div> :
                            <div class="underline p-1 duration-100">{header.innerText}</div>
                            }
                        </li>
                        }
                    </button>
                    </ul>
                )
                })
            }
            </div>
        )

        let options = {
            root: null,
            rootMargin: "0% 0% -100% 0%",
            threshold: 0.0,
        }

        const observer = new IntersectionObserver(
            (contents) => {
            contents.forEach((section) => {
                if (section.isIntersecting) {
                setActiveSection(section.target.children[0])
                }
            })
            },
            options
        )

        contents.forEach((section) => {
            observer.observe(section)
        })

        return () => {
            contents.forEach((section) => {
            observer.unobserve(section)
        })}
    }, [activeSection])

    return (
        <div class="xl:absolute xl:sticky xl:top-0 h-fit pt-10 xl:pb-14 mx-auto max-w-[85%] w-[640px] xl:w-[25%] xl:max-w-full xl:mr-auto">
            <div class="mx-auto xl:w-[85%] border-dashed border-black border-l-2 p-6">
                <p class="font-sans font-bold text-2xl pb-3">Table of Contents</p>
                {tableOfContents}
            </div>
        </div>
    )
}

export default TableOfContents