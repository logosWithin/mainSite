import React from "react"
import './Header.css'
import logo from './assets/logo.jpg'

export default function Header(){
    return (
    <header className="header-container">
        <div className="logo-title">
        <img src={logo} alt="Site Logo" className="logo"/>
        <h1>Welcome to the site!</h1>
        </div>
        <nav>
            <ul>
                <li><a href= "#">Home</a></li>
                <li><a href= "#">Latest</a></li>
                <li><a href= "#">Recommendations</a></li>
                <li><a href= "#">About</a></li>
                <li><a href= "#">Blog</a></li>
            </ul>
        </nav>
    </header>
    )
}