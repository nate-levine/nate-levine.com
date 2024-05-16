import * as React from 'react'
import { useState } from 'react'
import { Link } from 'gatsby'

const NavigationBar = () => {
    const [menuIcon, setMenuIcon] = useState("Closed")

    const toggleMenu = (e) => {
        const navigationLinks = document.querySelector('.navigation-links')
        const menuButton = document.querySelector('.menu-button')

        navigationLinks.classList.toggle('left-[-100%]')
        navigationLinks.classList.toggle('border-b-2')

        menuButton.classList.toggle('shadow-[8px_8px_0_-2px_#fbf1c7,8px_8px_0_black]')
        menuButton.classList.toggle('shadow-[8px_8px_0_black]')
        menuButton.classList.toggle('bg-black')

        menuIcon === "Closed" ? setMenuIcon("Open") : setMenuIcon("Closed")
    }

    return (
        <nav class="flex justify-between items-center w-[85%] mx-auto font-sans font-bold text-xl">
            <div class="font-bold">
                <Link to="/">
                    <div class="nate-levine group relative text-2xl font-serif">
                        <div class="flex flex-col -space-y-3 justify-left text-right">
                            <div>Nate</div>
                            <div>Levine</div>
                        </div>
                        <div class="grid grid-cols-4 absolute w-full aspect-square">
                            <div class="static block w-full h-0 group-hover:h-[25%] duration-[100ms] bg-red" />
                            <div class="static block w-full h-0 group-hover:h-[25%] duration-[200ms] bg-green" />
                            <div class="static block w-full h-0 group-hover:h-[25%] duration-[300ms] bg-yellow" />
                            <div class="static block w-full h-0 group-hover:h-[25%] duration-[400ms] bg-blue" />
                        </div>
                    </div>
                </Link>
            </div>
            <div class="navigation-links z-20 md:static absolute md:min-h-fit min-h-[10vh] top-[11%] md:w-auto w-[100%] flex items-center justify-center bg-primary left-0 left-[-100%] border-solid border-black md:border-b-0">
                <ul class="flex flex-col md:flex-row items-center pt-6 pb-10 md:py-0 gap-6 md:gap-[4vw] w-[85%]">
                    <li class="w-full">
                        <Link to="/articles" onClick={toggleMenu}>
                            <div class="w-full md:w-auto p-3 shadow-[8px_8px_0_black] hover:shadow-[8px_8px_0_-2px_#fbf1c7,8px_8px_0_black] border-solid border-2 border-black rounded-2xl hover:bg-black hover:text-primary duration-100">Articles</div>
                        </Link>
                    </li>
                    {/*<li class="w-full">
                        <Link to="/articles" onClick={toggleMenu}>
                            <div class="w-full md:w-auto p-3 shadow-[8px_8px_0_black] hover:shadow-[8px_8px_0_-2px_#fbf1c7,8px_8px_0_black] border-solid border-2 border-black rounded-2xl hover:bg-black hover:text-primary duration-100">Newsletter</div>
                        </Link>
                    </li>*/}
                    <li class="w-full">
                        <Link to="/about" onClick={toggleMenu}>
                            <div class="w-full md:w-auto p-3 shadow-[8px_8px_0_black] hover:shadow-[8px_8px_0_-2px_#fbf1c7,8px_8px_0_black] border-solid border-2 border-black rounded-2xl hover:bg-black hover:text-primary duration-100">About</div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div class="flex items-center gap-[6%]">
                {/* Clicking the button toggles the left property of the navigation-links class to make it toggle*/}
                <button class="menu-button shadow-[8px_8px_0_black] border-solid border-2 border-black p-2 rounded-lg md:invisible duration-100" onClick={toggleMenu}>
                    {
                    menuIcon === "Closed"
                    ?
                    <svg class="h-7 w-7" id="eEy52ihAnbC1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 100" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
                        <line x1="15" y1="0" x2="135" y2="0" fill="none" stroke="#000" stroke-width="20" stroke-linecap="round"/>
                        <line x1="15" y1="50" x2="135" y2="50" fill="none" stroke="#000" stroke-width="20" stroke-linecap="round"/>
                        <line x1="15" y1="100" x2="135" y2="100" fill="none" stroke="#000" stroke-width="20" stroke-linecap="round"/>
                    </svg>
                    :
                    <svg class="h-7 w-7 stroke-primary" id="eEy52ihAnbC1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 100" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
                        <line x1="20" y1="-5" x2="75" y2="50" fill="none" stroke-width="20" stroke-linecap="round"/>
                        <line x1="20" y1="105" x2="130" y2="-5" fill="none" stroke-width="20" stroke-linecap="round"/>
                        <line x1="75" y1="50" x2="130" y2="105" fill="none" stroke-width="20" stroke-linecap="round"/>
                    </svg>
                    }
                </button>
            </div>
        </nav>
    )
}

export default NavigationBar