import React from "react";
import "./artists.css"
import SidebarFull from "../Components/sidebarFull";
import Playbar from "../Components/playbar";

export default function Artists(){
    return(
        <div className="cont-artists">
            <Playbar/>
            <SidebarFull/>
            HI ARTISTS
        </div>
    )
}