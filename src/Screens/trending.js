import React from "react";
import "./trending.css"
import SidebarFull from "../Components/sidebarFull";
import Playbar from "../Components/playbar";

export default function Trend(){
    return(
        <div className="cont-trending">
            <Playbar/>
            <SidebarFull/>
            HI TRENDS
        </div>
    )
}