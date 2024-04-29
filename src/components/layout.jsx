import * as React from 'react'
import NavigationBar from './navigationBar'
import Credits from './credits'

const Layout = ({ children }) => {

    return (
        <div>
            <header class="bg-primary py-5">
                <NavigationBar />
            </header>
            <main class="bg-primary">
                {children}
            </main>
            <footer>
                <Credits />
            </footer>
        </div>
    )
}

export default Layout