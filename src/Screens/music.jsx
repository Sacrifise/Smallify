import React from "react";
import "./music.css"
import SidebarFull from "../Components/sidebarFull";
import Playbar from "../Components/playbar";
import SearchComp from "../Components/searchComp";



export default function Music(){
    return(
        <div className="cont-music">
            <Playbar/>
            <SidebarFull/>
            <div className="content">
                <div className="content-cont">
                    <SearchComp/>
                </div>
            </div>
        </div>
    )
}