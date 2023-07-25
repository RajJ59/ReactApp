import React from "react";
import './NavBar.css';


function NavBar ({userClick}){
    return(
        <div className="Nav">
            <h1 id="heading">React App</h1>
            <button id="btn" onClick={userClick}>Get Users</button>



        </div>
    )
}

export default NavBar;