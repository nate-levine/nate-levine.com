import * as React from 'react'
import { Link } from 'gatsby'

const NavigationBar = () => {

    const toggleMenu = (e) => {
        const navigationLinks = document.querySelector('.navigation-links')
        const menuButton = document.querySelector('.menu-button')

        navigationLinks.classList.toggle('left-[-100%]')
        navigationLinks.classList.toggle('border-b-2')

        menuButton.classList.toggle('shadow-[8px_8px_0_-2px_#fbf1c7,8px_8px_0_black]')
        menuButton.classList.toggle('shadow-[8px_8px_0_rgba(0,0,0,1)]')
        menuButton.classList.toggle('bg-black')
    }

    return (
        <nav class="flex justify-between items-center w-[85%] mx-auto font-geist font-bold text-xl">
            <div class="font-bold">
                <Link to="/">
                    <div class="nate-levine group relative text-2xl">
                        <div class="flex flex-col -space-y-3 justify-left text-right">
                            <div>Nate</div>
                            <div>Levine</div>
                        </div>
                        <span class="flex flex-row absolute w-full">
                            <span class="static block w-[20%] h-0 group-hover:h-[17px] duration-[100ms] bg-[#fb4934]" />
                            <span class="static block w-[20%] h-0 group-hover:h-[17px] duration-[200ms] bg-[#b8bb26]" />
                            <span class="static block w-[20%] h-0 group-hover:h-[17px] duration-[300ms] bg-[#fabd2f]" />
                            <span class="static block w-[20%] h-0 group-hover:h-[17px] duration-[400ms] bg-[#83a598]" />
                            <span class="static block w-[20%] h-0 group-hover:h-[17px] duration-[500ms] bg-[#d3869b]" />
                        </span>
                    </div>
                </Link>
            </div>
            <div class="navigation-links md:static absolute md:min-h-fit min-h-[10vh] top-[11%] md:w-auto w-[100%] flex items-center justify-center bg-[#fbf1c7] left-0 left-[-100%] border-solid border-black md:border-b-0">
                <ul class="flex flex-col md:flex-row items-center pt-6 pb-10 md:py-0 gap-6 md:gap-[4vw] w-[85%]">
                    <li class="w-full">
                        <Link to="/blog" onClick={toggleMenu}>
                            <div class="w-full md:w-auto p-3 shadow-[8px_8px_0_rgba(0,0,0,1)] hover:shadow-[8px_8px_0_-2px_#fbf1c7,8px_8px_0_black] border-solid border-2 border-black rounded-2xl hover:bg-black hover:text-[#fbf1c7] duration-100">Blog</div>
                        </Link>
                    </li>
                    <li class="w-full">
                        <Link to="/blog" onClick={toggleMenu}>
                            <div class="w-full md:w-auto p-3 shadow-[8px_8px_0_rgba(0,0,0,1)] hover:shadow-[8px_8px_0_-2px_#fbf1c7,8px_8px_0_black] border-solid border-2 border-black rounded-2xl hover:bg-black hover:text-[#fbf1c7] duration-100">Newsletter</div>
                        </Link>
                    </li>
                    <li class="w-full">
                        <Link to="/blog" onClick={toggleMenu}>
                            <div class="w-full md:w-auto p-3 shadow-[8px_8px_0_rgba(0,0,0,1)] hover:shadow-[8px_8px_0_-2px_#fbf1c7,8px_8px_0_black] border-solid border-2 border-black rounded-2xl hover:bg-black hover:text-[#fbf1c7] duration-100">About</div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div class="flex items-center gap-[6%]">
                {/* Clicking the button toggles the left property of the navigation-links class to make it toggle*/}
                <button class="menu-button shadow-[8px_8px_0_rgba(0,0,0,1)] border-solid border-2 border-black p-5 rounded-xl md:invisible duration-100" onClick={toggleMenu} />
            </div>
        </nav>
    )
}

export default NavigationBar