import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Nav({open , closeNav}) {

    return (
        <nav style={{
            transform: `translateX(${open}%)`
        }}>
            <button id="close" onClick={closeNav}><FontAwesomeIcon icon="times" /></button>
            <div id="second-nav">
                <Link to="/" onClick={closeNav}>
                    <div id="routes">
                        <h1>Home</h1>
                    </div>
                </Link>

                <Link to="/movies" onClick={closeNav}>
                    <div id="routes">
                        <h1>Movies</h1>
                    </div>
                </Link>

                <Link to="/aboutus" onClick={closeNav}>
                    <div id="routes">
                        <h1>About Us</h1>
                    </div>
                </Link>
            </div>
            <div className="footer">
                <h2>Movie App</h2>
                <h3>Other projects: </h3>
                <a href="https://covid-19-app-cases.netlify.app/">Covid Project</a>
            </div>
        </nav>
    )
}
