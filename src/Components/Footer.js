import React from "react"
import "../App.css"
import twitter from "./twitter.png"
import instagram from "./instagram.png"
import youtube from "./youtube.png"

function Footer() {
    return <>
        <div className="footerContainer">
            <div className="footer">
            <img src={twitter} alt="twitter" href="https://twitter.com/"></img>
            <img src={instagram} alt="instagram" href="https://www.instagram.com/"></img>
            <img src={youtube} alt="youtube" href="https://www.youtube.com/"></img>
        </div>
        <p>Copyright © 2015 - Lil Hacker Creative</p>
        </div>
    </>
}





export default Footer;