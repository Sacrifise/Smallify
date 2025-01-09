import React from "react";

export default function SoundPlay(props){
    let audio = new Audio(props.preview);
    let flag = 1;
    const start = () =>{
        audio.play();
    }
    const end = () =>{
        audio.pause();
        audio.currentTime = 0;
        if (!flag){
            flag = !flag;
        }
    }
    const playOrNot = () =>{
        if (flag){
            flag = !flag;
            return start();
        }
        else{
            flag = !flag;
            return end();
        }
    }
    return(
        <div>
            <div style={{"color": "white", "marginLeft": "20px", "userSelect": "none"}} muted onClick={playOrNot} onMouseLeave={end}>▶</div>
        </div>
    )
}