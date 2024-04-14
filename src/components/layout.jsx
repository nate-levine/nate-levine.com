import * as React from 'react'
import { Link } from 'gatsby'
import NavigationBar from './navigationBar'

const Layout = ({ children }) => {

    return (
        <div class="bg-[#fbf1c7]">
            <header class="bg-[#ebdbb2] py-3">
                <NavigationBar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <p>Nate Levine</p>
            </footer>
        </div>
    )
}

export default Layout