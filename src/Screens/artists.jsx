import React from "react";
import "./artists.css"
import SidebarFull from "../Components/sidebarFull";
import Playbar from "../Components/playbar";
import SearchComp from "../Components/searchComp";
import PopTracks from "../Components/poularTracksComp";

export default function Artists(){
    return(
        <div className="cont-artists">
            <Playbar/>
            <SidebarFull/>
            <div className="content">
                <div className="content-cont">
                    <SearchComp isArtists={true}/>
                    <PopTracks isArtists={true}/>
                </div>
            </div>
        </div>
    )
}