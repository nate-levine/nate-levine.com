import * as React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

export const BlockQuote = ({ children }) => {
    return (
        <div className="my-3">
            <p className="p-6 border-solid border-black border-2 rounded-2xl shadow-[8px_8px_0_black]">
                {children}
            </p>
        </div>
    )
}

export const ExternalLink = ({ children, to }) => {
    return (
        <a href={to} className="underline">
            {children}
        </a>
    )
}

export const Footnotes = ({ children }) => {
    return (
        <div className="footnotes">
            <p className="font-sans font-bold text-2xl pt-20 pb-3">Footnotes</p>
            <ol className="ms-4 list-decimal text-lg italic">
                {children}
            </ol>
        </div>
    )
}

export const FootnotesItem = ({ children, index }) => {
    const [footnotesLinks, setFootnotesLinks] = useState([])

    // Get an array of all the footnotes links
    useEffect(() => {
        setFootnotesLinks(Array.from(document.querySelectorAll(".footnotes-link")))
    }, [])

    return (
        <li className="footnotes-item py-2 hover:cursor-pointer" onClick={() => 
            // Scroll to the section in the article where the indexed footnote link is
            window.scroll({
                top: footnotesLinks[index].offsetTop - (screen.height / 3),
                behavior: 'smooth'
            })
        }>
            {children}
        </li>
    )
}

export const FootnotesLink = ({ children }) => {
    const [footnotes, setFootnotes] = useState([])

    useEffect(() => {
        setFootnotes(document.querySelector(".footnotes"))
    }, [])

    return (
        <button type="button" className="footnotes-link" onClick={() => 
            // Scroll to the footnotes
            window.scroll({
                top: footnotes.offsetTop,
                behavior: 'smooth'
            })
        }>
            <sup><div className="italic underline">
                {children}
            </div></sup>
        </button>
    )
}

export const InternalLink = ({ children, to }) => {
    return (
        <Link to={to} className="underline">
            {children}
        </Link>
    )
}

export const Image = ({ children, src, alt, to }) => {
    return (
        <div className="text-center py-5">
            <GatsbyImage image={src} alt={alt} className="mx-auto rounded-md border-solid border-black border-2 shadow-[8px_8px_0_black]" />
            <div className="pt-10 text-base underline">
                {  
                    // Link to image if credited from an external link
                    to
                    ?
                    <a href={to}>
                        {children}
                    </a>
                    :
                    <div>{children}</div>
                }
            </div>
        </div>
    )
}

export const ListItem = ({ children }) => {
    return (
        <li className="py-2">
            {children}
        </li>
    )
}

export const Paragraph = ({ children }) => {
    return (
        <p className="py-3">
            {children}
        </p>
    )
}

export const Section = ({ title, children }) => {
    return (
        <div className="section">
            <h2 className="text-black text-xl lg:text-2xl font-sans font-bold pt-10">
                {title}
            </h2>
            {children}
        </div>
    )
}

export const Subsection = ({ title, children }) => {
    return (
        <div className="subsection">
            <h3 className="text-black text-lg lg:text-xl font-sans font-bold pt-10">
                {title}
            </h3>
            {children}
        </div>
    )
}

export const UnorderedList = ({ children }) => {
    return (
        <ul className="py-3 list-disc list-outside ms-8 text-left">
            {children}
        </ul>
    )
}