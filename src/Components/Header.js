import React from "react";
import "../App.css";
import logo from "./logo.png"

console.log(logo);

function Header() {
    return <>
    <nav className="nav">
    <div className="logo">News<span>Bot</span></div>
		<a>Home</a>
        <a>About</a>
		<a>News</a>
		<a>Contact</a>
    </nav>
    <div className="header">
    </div>
    </>
} 


export default Header;

