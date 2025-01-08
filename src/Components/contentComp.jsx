import React from "react";
import TrackCard from "../Components/trackCard";
import "./contentComp.css"
import PopPlaylist from "./popPlaylist";
import SubscriptionBar from "./subscriptionBar";
import HappinesComp from "./happinesComp";
import { useSelector } from "react-redux";



export default function ContentComp(){
    return(
        <div className="cont-content">
            <div className="cont-content-upperBar">
                <div className="cont-content-upperBar-firstblock">
                    <SubscriptionBar/>
                    <div className="cont-content-upperBar-text">Today's Selection</div>
                </div>
                <div className="cont-content-upperBar-secondBlock">
                    <PopPlaylist/>
                    <HappinesComp/>
                </div>
            </div>
            <div className="cont-content-trackList">
                {useSelector((state) => state.trackCardId.value).map((id) => <TrackCard key = {id} trackid={id}/>)}
            </div>
        </div>
    )
}
 