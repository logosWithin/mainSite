import React from "react"
import './Header.css'
import logosWithin from './assets/newLogoNoBackgroundLogosWithin.png'

export default function Header(){
    return (
    <header className="header-container">
        <div className="logo-title">
        <img src={logosWithin} alt="Site Logo" className="logo"/>
        <h4>Reviews, commentary, and themes from believers</h4>
        </div>
        <nav>
            <ul>
                <li><a href= "#">Home</a></li>
                <li><a href= "#">Reviews</a></li>
                <li><a href= "#">Recommendations</a></li>
                {/* Add community at a later time */}
                {/* <li><a href= "#">Community</a></li> */}
                <li><a href= "#">About</a></li>
                <li><a href= "#">Blog</a></li>
            </ul>
        </nav>
    </header>
    )
}