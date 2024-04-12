import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ children }) => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
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