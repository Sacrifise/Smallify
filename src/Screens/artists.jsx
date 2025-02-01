import React from "react";
import "./artists.css"
import SidebarFull from "../Components/sidebarFull";
import Playbar from "../Components/playbar";
import SearchComp from "../Components/searchComp";

export default function Artists(){
    return(
        <div className="cont-artists">
            <Playbar/>
            <SidebarFull/>
            <SearchComp isArtists={true}/>
        </div>
    )
}