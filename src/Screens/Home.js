import React from "react";
import "./home.css"
import Sidebar from "../Components/sidebar";
import TrackCard from "../Components/trackCard";
import { TiHome, TiFlash, TiHeart, TiStarFullOutline, TiUser } from "react-icons/ti";
import { IconContext } from "react-icons";

export default function Home(){
    return(
        <div className="cont-home">
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
            <div className="cont-content">
                <div className="cont-content-title">Today's Selection</div>
                <div className="cont-content-trackList">
                    <TrackCard trackid="1109739"/>
                    <TrackCard trackid="2525864"/>
                    <TrackCard trackid="116866566"/>
                    <TrackCard trackid="89077555"/>
                    <TrackCard trackid="737208652"/>
                    <TrackCard trackid="671270"/>
                    <TrackCard trackid="528330441"/>
                    <TrackCard trackid="472992592"/>
                </div>
            </div>
        </div>
    )
}