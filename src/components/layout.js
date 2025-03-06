import * as React from 'react'
import NavigationBar from './navigationBar'
import Credits from './credits'
import HeroImage from '../images/input.png';

const Layout = ({ children }) => {

    return (
        <div>
            <header className="bg-[url('../images/input.png')] bg-[position:0%_56%] bg-cover py-8 border-solid border-b-2 border-black">
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