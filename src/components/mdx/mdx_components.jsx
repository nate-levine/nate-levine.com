import * as React from 'react'
import { Link } from 'gatsby'

export const Title = ({ children }) => {
    return (
        <h1 class="text-black text-xl lg:text-2xl font-sans font-bold pt-10">
            {children}
        </h1>
    )
}

export const Paragraph = ({ children }) => {
    return (
        <p class="py-3">
            {children}
        </p>
    )
}

export const BlockQuote = ({ children }) => {
    return (
        <div class="my-3">
            <p class="p-6 border-solid border-black border-2 rounded-2xl shadow-[8px_8px_0_black]">
                {children}
            </p>
        </div>
    )
}

export const InternalLink = ({ children, endpoint }) => {
    return (
        <Link to={endpoint} class="underline">
            {children}
        </Link>
    )
}

export const UnorderedList = ({ children }) => {
    return (
        <ul class="py-3 list-disc list-outside ms-8 text-left">
            {children}
        </ul>
    )
}

export const ListItem = ({ children }) => {
    return (
        <li class="py-2">
            {children}
        </li>
    )
}