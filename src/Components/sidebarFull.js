import "./sidebarFull.css";
import React from "react";
import { TiHome, TiFlash, TiHeart, TiStarFullOutline, TiUser, TiMediaPlay } from "react-icons/ti";
import { IconContext } from "react-icons";
import Sidebar from "../Components/sidebar";

export default function SidebarFull(){
    return(
        <div className="cont-sidebar">
            <div className="cont-maintitle">
                <img className="cont-mainicon" src="https://cdn-icons-png.flaticon.com/128/2582/2582582.png"></img>smallify
            </div>    
            <IconContext.Provider value ={{className: ".sidebar-btn-icon", size: "40px"}}>
                <Sidebar title="Home" to="/" icon={<TiHome/>}/>
                <Sidebar title="Trends" to="/trending" icon={<TiFlash/>}/>
                <Sidebar title="Music" to="/music" icon={<TiHeart/>}/>
                <Sidebar title="Artists" to="/artists" icon={<TiStarFullOutline/>}/>
                <Sidebar title="Profile" to="/profile" icon={<TiUser/>}/>
            </IconContext.Provider>
        </div>
    )
}