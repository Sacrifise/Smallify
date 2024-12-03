import React from "react";
import "./home.css"
import Sidebar from "../Components/sidebar";
export default function Home(){
    return(
        <div className="cont-home">
            <div className="cont-sidebar">
                <Sidebar title="Home" to="/"/>
                <Sidebar title="Trends" to="/trending"/>
                <Sidebar/>
                <Sidebar/>
                <Sidebar/>
            </div>
            <div className="cont-content">
            </div>
        </div>
    )
}