import React from "react";
import "./home.css";
import Playbar from "../Components/playbar";
import SidebarFull from "../Components/sidebarFull";
import ContentComp from "../Components/contentComp";

export default function Home(){
    return(
        <div className="cont-home">
            <Playbar/>
            <SidebarFull/>
            <ContentComp/>
        </div>
    )
}