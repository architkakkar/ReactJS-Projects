import React from 'react'
import ReactLogo from '../assets/reactjs-icon 2.png'

function Main(props) {
    return (
        <main className={props.darkMode ? "container main-dark" : "container main-light"}>
            <h1 className="heading">Fun Facts about React</h1>
            <ul className="list-items">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img src={ReactLogo} alt="React-Logo" className="bg-reactlogo" />
        </main>
    )
}

export default Main