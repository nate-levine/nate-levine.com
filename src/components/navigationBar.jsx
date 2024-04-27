import * as React from 'react'
import { Link } from 'gatsby'

const NavigationBar = () => {

    const toggleMenu = (e) => {
        const navigationLinks = document.querySelector('.navigation-links')

        navigationLinks.classList.toggle('left-[-100%]')
    }

    return (
        <nav class="flex justify-between items-center w-[92%] mx-auto">
            <div class="font-bold">
                <Link to="/" class="nate-levine group relative">
                    NATE LEVINE
                    <span class="flex flex-row absolute w-full">
                        <span class="static block w-[20%] h-0 group-hover:h-5 duration-[100ms] bg-[#fb4934]" />
                        <span class="static block w-[20%] h-0 group-hover:h-5 duration-[200ms] bg-[#b8bb26]" />
                        <span class="static block w-[20%] h-0 group-hover:h-5 duration-[300ms] bg-[#fabd2f]" />
                        <span class="static block w-[20%] h-0 group-hover:h-5 duration-[400ms] bg-[#83a598]" />
                        <span class="static block w-[20%] h-0 group-hover:h-5 duration-[500ms] bg-[#d3869b]" />
                    </span>
                </Link>
            </div>
            <div class="navigation-links md:static absolute md:min-h-fit min-h-[10vh] top-[4%] md:w-auto w-[100%] flex items-center justify-center bg-[#fbf1c7] left-0 left-[-100%] font-bold">
                <ul class="flex md:flex-row flex-col items-center md:py-0 py-5 md:gap-[4vw] gap-8">
                    <li class="hover:text-gray-500">
                        <Link to="/blog" onClick={toggleMenu}>Blog</Link>
                    </li>
                    <li class="hover:text-gray-500">
                        <Link to="/blog" onClick={toggleMenu}>Newsletter</Link>
                    </li>
                    <li class="hover:text-gray-500">
                        <Link to="/blog" onClick={toggleMenu}>About</Link>
                    </li>
                </ul>
            </div>
            <div class="flex items-center gap-[6%]">
                {/* Clicking the button toggles the left property of the navigation-links class to make it toggle*/}
                <button class="bg-[#282828] px-3 py-3 md:hidden" onClick={toggleMenu} />
            </div>
        </nav>
    )
}

export default NavigationBar