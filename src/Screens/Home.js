import React from "react";
import "./home.css";
import TrackCard from "../Components/trackCard";
import Playbar from "../Components/playbar";
import SidebarFull from "../Components/sidebarFull";

export default function Home(){
    return(
        <div className="cont-home">
            <Playbar/>
            <SidebarFull/>
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