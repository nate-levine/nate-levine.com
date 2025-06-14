import * as React from 'react'
import { useState } from 'react'
import { Link } from 'gatsby'

const NavigationBar = () => {
    // Store menu icon state
    const [menuIcon, setMenuIcon] = useState("Closed")

    // When the menu is toggled
    const toggleMenu = (e) => {
        const navigationLinks = document.querySelector('.navigation-links')
        const menuButton = document.querySelector('.menu-button')

        // Toggle navigation links styles
        navigationLinks.classList.toggle('left-[-100%]')
        navigationLinks.classList.toggle('border-b-[1px]')

        // Toggle menu button links styles
        menuButton.classList.toggle('shadow-[8px_8px_0_-2px_#fbf1c7,8px_8px_0_black]')
        menuButton.classList.toggle('shadow-[8px_8px_0_black]')
        menuButton.classList.toggle('bg-black')

        // Change menu icon
        menuIcon === "Closed" ? setMenuIcon("Open") : setMenuIcon("Closed")
    }

    return (
        <nav className="flex justify-between items-center w-[90%] mx-auto font-sans font-bold text-xl text-black pt-0 pb-20 md:pb-0">
            <div className="font-bold">
                <Link to="/">
                    <div className="nate-levine group relative text-4xl font-serif">
                        <div className="flex flex-col -space-y-3 justify-left text-right text-black drop-shadow-[2px_2px_0px_#fbf1c7]">
                            <div>Nate</div>
                            <div>Levine</div>
                        </div>
                        <div className="grid grid-cols-4 absolute w-full aspect-square">
                            <div className="static block w-full h-0 group-hover:h-[25%] duration-[75ms] bg-red" />
                            <div className="static block w-full h-0 group-hover:h-[25%] duration-[150ms] bg-green" />
                            <div className="static block w-full h-0 group-hover:h-[25%] duration-[225ms] bg-yellow" />
                            <div className="static block w-full h-0 group-hover:h-[25%] duration-[300ms] bg-blue" />
                        </div>
                    </div>
                </Link>
            </div>
            <div className="navigation-links z-20 md:static absolute md:min-h-fit min-h-[10vh] top-[11%] md:w-auto w-[100%] flex items-center justify-center left-0 left-[-100%] border-solid border-black md:border-b-0">
                <ul className="pt-6 pb-10 md:py-0 flex flex-col md:flex-row gap-5 w-[90%] justify-center">
                    <li className="w-full">
                        <Link to="/articles" onClick={toggleMenu}>
                            <div className="w-full md:w-auto p-3 shadow-[8px_8px_0_#22190e] hover:shadow-[8px_8px_0_-1px_#fbf1c7,8px_8px_0_#22190e] border-solid border-[1px] border-black rounded-md bg-primary hover:bg-black hover:text-primary duration-0">Articles</div>
                        </Link>
                    </li>
                    {/*<li className="w-full">
                        <Link to="/articles" onClick={toggleMenu}>
                            <div className="w-full md:w-auto p-3 shadow-[8px_8px_0_black] hover:shadow-[8px_8px_0_-2px_#fbf1c7,8px_8px_0_black] border-solid border-[1px] border-black rounded-2xl hover:bg-black hover:text-primary duration-0">Newsletter</div>
                        </Link>
                    </li>*/}
                    <li className="w-full">
                        <Link to="/about" onClick={toggleMenu}>
                            <div className="w-full md:w-auto p-3 shadow-[8px_8px_0_#22190e] hover:shadow-[8px_8px_0_-1px_#fbf1c7,8px_8px_0_#22190e] border-solid border-[1px] border-black rounded-md bg-primary hover:bg-black hover:text-primary duration-0">About</div>
                        </Link>
                    </li>
                    <li>
                        {/*
                            LinkedIn Logo

                            From: https://www.svgrepo.com/svg/108614/linkedin
                            Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools
                        */}
                        <a href="https://www.linkedin.com/in/nate-levine-/">
                            <div className="group p-2 bg-primary hover:bg-black border-solid border-black border-[1px] rounded-md shadow-[8px_8px_0_#22190e] hover:shadow-[8px_8px_0_-1px_#fbf1c7,8px_8px_0_#22190e] duration-0">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310" className="h-10">
                                <g id="XMLID_801_" className="fill-black group-hover:fill-primary duration-0">
                                <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
                                    C77.16,101.969,74.922,99.73,72.16,99.73z"/>
                                <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
                                    c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/>
                                <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
                                    c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
                                    c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
                                    C310,145.43,300.549,94.761,230.454,94.761z"/>
                                </g>
                            </svg>
                            </div>
                        </a>
                    </li>
                    <li>
                        {/*
                            GitHub Logo

                            From: https://github.com/logos
                        */}
                        <a href="https://github.com/nate-levine">
                            <div className="group p-1 bg-primary hover:bg-black border-solid border-black border-[1px] rounded-md hover:stroke-black hover:stroke-[3] shadow-[8px_8px_0_#22190e] hover:shadow-[8px_8px_0_-1px_#fbf1c7,8px_8px_0_#22190e] duration-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 105 105" className="h-12">
                                <path className="fill-black group-hover:fill-primary duration-0" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
                            </svg>
                            </div>
                        </a>
                    </li>
                    
                </ul>
            </div>
            <div className="flex items-center gap-[6%]">
                {
                menuIcon === "Closed"
                ?
                // Closed menu icon
                <button className="menu-button shadow-[8px_8px_0_-2px_#22190e] border-solid border-[1px] border-black p-2 rounded-md bg-primary md:invisible md:w-[8.5vw] duration-0" onClick={toggleMenu}>
                    <svg className="h-10 w-10" id="eEy52ihAnbC1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 100" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
                        <line x1="15" y1="0" x2="135" y2="0" fill="none" stroke="#000" strokeWidth="20" strokeLinecap="round"/>
                        <line x1="15" y1="50" x2="135" y2="50" fill="none" stroke="#000" strokeWidth="20" strokeLinecap="round"/>
                        <line x1="15" y1="100" x2="135" y2="100" fill="none" stroke="#000" strokeWidth="20" strokeLinecap="round"/>
                    </svg>
                </button>
                :
                // Open "X" icon
                <button className="menu-button shadow-[8px_8px_0_-2px_#fbf1c7,8px_8px_0_#22190e] border-solid border-[1px] border-black p-2 rounded-md bg-black md:invisible md:w-[8.5vw] duration-0" onClick={toggleMenu}>
                    <svg className="h-10 w-10 stroke-primary" id="eEy52ihAnbC1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 100" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
                        <line x1="20" y1="-5" x2="75" y2="50" fill="none" strokeWidth="20" strokeLinecap="round"/>
                        <line x1="20" y1="105" x2="130" y2="-5" fill="none" strokeWidth="20" strokeLinecap="round"/>
                        <line x1="75" y1="50" x2="130" y2="105" fill="none" strokeWidth="20" strokeLinecap="round"/>
                    </svg>
                </button>
                }
            </div>
        </nav>
    )
}

export default NavigationBar