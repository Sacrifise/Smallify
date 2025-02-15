import "./popularTracksComp.css"
import React from "react"
import { useSelector } from "react-redux"
import TrackCard from "./trackCard"

export default function PopTracks(props){
    if (props.isArtists){
        return(
            <div className="poptrack-comp">
                <div className="poptrack-title">Popular</div>
                <div className="poptrack-cont">
                    {useSelector((state) => state.trackCardId.value).map((id) => <TrackCard key = {id} trackid={id}/>)}
                </div>
                <div className="poptrack-title">New idea's</div>
                <div className="poptrack-cont">
                    {useSelector((state) => state.trackCardId.value).map((id) => <TrackCard key = {id} trackid={id}/>)}
                </div>
            </div>
    
        )
    }
    else {
        return(
            <div className="poptrack-comp">
                <div className="poptrack-title">Popular</div>
                <div className="poptrack-cont">
                    {useSelector((state) => state.trackCardId.value).map((id) => <TrackCard key = {id} trackid={id}/>)}
                </div>
                <div className="poptrack-title">New idea's</div>
                <div className="poptrack-cont">
                    {useSelector((state) => state.trackCardId.value).map((id) => <TrackCard key = {id} trackid={id}/>)}
                </div>
            </div>
    
        )
    }
}