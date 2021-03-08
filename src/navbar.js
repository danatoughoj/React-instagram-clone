import React from "react"
import "./css/navbar.css"
import Logo from "./imgs/logo.png"
import profile_picture from "./imgs/profile_picture1.jpg"


class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar_container">
                <nav className="navbar">
                    <div className="logo"><img src={Logo} alt="instagram logo"></img></div>
                    <div className="search_div"><input type="text" className="search" style={{fontFamily:"Arial, FontAwesome"}} placeholder="&#xF002; Search"></input> </div> 
                    <div className="navigation_icons">
                        <a href="/"><i class="fas fa-home item"></i></a>
                        <i class="far fa-paper-plane item"></i>
                        <i class="far fa-compass item"></i>
                        <i class="far fa-heart item"></i>
                        <a href="/profile"><img className="navbar_profile_picture item" src={profile_picture} ></img></a>
                    </div>
                </nav>               
            </div>
        )
    }
}

export default Navbar;