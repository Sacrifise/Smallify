import React from "react";
import TrackCard from "../Components/trackCard";
import "./contentComp.css"


class ContentComp extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
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
                <div className="cont-content-news">Today's News
                    <img className="image-placeholder" src="https://i.pinimg.com/originals/fc/19/ef/fc19ef294f445494cb05bda231a97046.png"></img>
                    <img className="image-placeholder" src="https://i.pinimg.com/originals/fc/19/ef/fc19ef294f445494cb05bda231a97046.png"></img>
                    <img className="image-placeholder" src="https://i.pinimg.com/originals/fc/19/ef/fc19ef294f445494cb05bda231a97046.png"></img>
                </div>
                
            </div>
        )
    }
}
export default ContentComp