import * as React from 'react'
import NavigationBar from './navigationBar'
import Credits from './credits'

const Layout = ({ children }) => {

    return (
        <div>
            <header className="bg-[url('../images/sangre_de_cristo.png')] bg-[position:0%_56%] bg-cover py-8 border-solid border-b-2 border-black">
                <NavigationBar/>
            </header>
            <main className="bg-primary">
                {children}
            </main>
            <footer>
                <Credits />
            </footer>
        </div>
    )
}

export default Layout