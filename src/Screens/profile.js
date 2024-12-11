import React from "react";
import "./profile.css"
import SidebarFull from "../Components/sidebarFull";
import Playbar from "../Components/playbar";

export default function Profile(){
    return(
        <div className="cont-profile">
            <Playbar/>
            <SidebarFull/>
            HI PROFILE
        </div>
    )
}