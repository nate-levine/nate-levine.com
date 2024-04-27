import * as React from 'react'
import { Link } from 'gatsby'

const NavigationBar = () => {

    const toggleMenu = (e) => {
        const navigationLinks = document.querySelector('.navigation-links')

        navigationLinks.classList.toggle('left-[-100%]')
        navigationLinks.classList.toggle('border-b-2')
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
            <div class="navigation-links md:static absolute md:min-h-fit min-h-[10vh] top-[9%] md:w-auto w-[100%] flex items-center justify-center bg-[#fbf1c7] left-0 left-[-100%] border-solid border-black md:border-b-0">
                <ul class="flex flex-col md:flex-row items-center py-5 md:py-0 gap-8 md:gap-[4vw]">
                    <li>
                        <Link to="/blog" onClick={toggleMenu}>
                            <div class="hover:bg-black hover:text-[#fbf1c7] p-3 rounded-2xl duration-100">Blog</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" onClick={toggleMenu}>
                            <div class="hover:bg-black hover:text-[#fbf1c7] p-3 rounded-2xl duration-100">Newsletter</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" onClick={toggleMenu}>
                            <div class="hover:bg-black hover:text-[#fbf1c7] p-3 rounded-2xl duration-100">About</div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div class="flex items-center gap-[6%]">
                {/* Clicking the button toggles the left property of the navigation-links class to make it toggle*/}
                <button class="shadow-[2px_2px_0_rgba(0,0,0,1)] border-solid border-2 border-black p-4 rounded-md md:invisible" onClick={toggleMenu} />
            </div>
        </nav>
    )
}

export default NavigationBar