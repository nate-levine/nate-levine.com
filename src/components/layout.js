import * as React from 'react'
import NavigationBar from './navigationBar'
import Credits from './credits'

const Layout = ({ children }) => {

    return (
        <div>
            <header className="bg-[url('../images/sangre_de_cristo.png')] bg-[position:0%_56%] bg-cover py-10 border-solid border-b-[1px] border-black text-black">
                <NavigationBar/>
            </header>
            <main className="relative bg-primary pb-10">
                <div className="absolute top-0 w-full h-10 overflow-hidden">
                    <svg viewBox="2 0 600 4" preserveAspectRatio="none" className="w-[10000px] h-full">
                        <defs>
                            <pattern id="triangle-banner" patternUnits="userSpaceOnUse" width="4" height="4">
                                <polygon points="0,0 2,4 4,0" fill="#ddc8ad" />
                            </pattern>
                        </defs>
                        <rect width="600" height="4" fill="url(#triangle-banner)" />
                    </svg>
                </div>
                {children}
                <div className="absolute bottom-0 w-full h-10 overflow-hidden">
                    <svg viewBox="2 0 600 4" preserveAspectRatio="none" className="w-[10000px] h-full">
                        <defs>
                            <pattern id="triangle-banner-flipped" patternUnits="userSpaceOnUse" width="4" height="4">
                                <polygon points="0,4 2,0 4,4" fill="#ddc8ad" />
                            </pattern>
                        </defs>
                        <rect width="600" height="4" fill="url(#triangle-banner-flipped)" />
                    </svg>
                </div>
            </main>
            <footer>
                <Credits />
            </footer>
        </div>
    )
}

export default Layout