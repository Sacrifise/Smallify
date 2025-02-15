import React from "react";
import "./profile.css"
import SidebarFull from "../Components/sidebarFull";
import Playbar from "../Components/playbar";
import { useSelector } from "react-redux";
import ProfileAuth from "../Components/profileAuth";

export default function Profile(){
    const user_name = useSelector((state) => state.autorizationUserStore.user_login)
    if(useSelector((state) => state.autorizationUserStore.isAutorized)){
        return(
            <div className="cont-profile">
                <Playbar/>
                <SidebarFull/>
                <ProfileAuth/>
                {user_name}
            </div>
        )
    }
    else{
        return(
            <div className="cont-profile-notlogged">
                
                <ProfileAuth/>
            </div>
        )
    }
}   