import React from "react";
import "./home.css"
import Sidebar from "../Components/sidebar";
import TrackCard from "../Components/trackCard";

export default function Home(){
    return(
        <div className="cont-home">
            <div className="cont-sidebar">
                <Sidebar title="Home" to="/"/>
                <Sidebar title="Trends" to="/trending"/>
                <Sidebar title="Music" to="/music"/>
                <Sidebar title="Artists" to="/artists"/>
                <Sidebar title="Profile" to="/profile"/>
            </div>
            <div className="cont-content">
                <div className="cont-content-title">Today's Selection</div>
                <div className="cont-content-trackList">
                    <TrackCard/>
                    <TrackCard/>
                    <TrackCard/>
                    <TrackCard/>
                    <TrackCard/>
                    <TrackCard/>
                    <TrackCard/>
                    <TrackCard/>
                </div>
            </div>
        </div>
    )
}