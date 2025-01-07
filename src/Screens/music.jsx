import React from "react";
import "./music.css"
import SidebarFull from "../Components/sidebarFull";
import Playbar from "../Components/playbar";


export default function Music(){
    return(
        <div className="cont-music">
            <Playbar/>
            <SidebarFull/>
            HI MUSIC
        </div>
    )
}