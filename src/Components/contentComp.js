import React from "react";
import TrackCard from "../Components/trackCard";
import "./contentComp.css"
import PopPlaylist from "./popPlaylist";
import SubscriptionBar from "./subscriptionBar";
import HappinesComp from "./happinesComp";


class ContentComp extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
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
                    <TrackCard trackid="1109739"/>
                    <TrackCard trackid="2525864"/>
                    <TrackCard trackid="116866566"/>
                    <TrackCard trackid="89077555"/>
                    {/* <TrackCard trackid="737208652"/>
                    <TrackCard trackid="671270"/>
                    <TrackCard trackid="528330441"/>
                    <TrackCard trackid="472992592"/> */}
                </div>
            </div>
        )
    }
}
export default ContentComp