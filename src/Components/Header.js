import React from "react";
import "../App.css";


function Header() {
    return <div className="header">
       <nav>
           <a>Home</a>
           <a>About</a>
           <a>News</a>
           <input className="search" type="text" placeholder="type your search"></input>
           <button>search</button> 
       </nav>
    </div>
    
} 


export default Header;

