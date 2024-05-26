import * as React from 'react'
import { Link } from 'gatsby'

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

export const Paragraph = ({ children }) => {
    return (
        <p className="py-3">
            {children}
        </p>
    )
}

export const BlockQuote = ({ children }) => {
    return (
        <div className="my-3">
            <p className="p-6 border-solid border-black border-2 rounded-2xl shadow-[8px_8px_0_black]">
                {children}
            </p>
        </div>
    )
}

export const InternalLink = ({ children, to }) => {
    return (
        <Link to={to} className="underline">
            {children}
        </Link>
    )
}

export const ExternalLink = ({ children, to }) => {
    return (
        <a href={to} className="underline">
            {children}
        </a>
    )
}

export const UnorderedList = ({ children }) => {
    return (
        <ul className="py-3 list-disc list-outside ms-8 text-left">
            {children}
        </ul>
    )
}

export const ListItem = ({ children }) => {
    return (
        <li className="py-2">
            {children}
        </li>
    )
}

export const Image = ({ children, src, alt, to }) => {
    return (
        <div className="text-center py-5">
            <img src={src} alt={alt} className="w-full mx-auto rounded-md border-solid border-black border-2 shadow-[8px_8px_0_black]" />
            <div className="pt-10 text-base">
                <a href={to} className="underline">
                    {children}
                </a>
            </div>
        </div>
    )
}