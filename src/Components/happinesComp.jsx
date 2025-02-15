import React from "react";
import "./happinesComp.css"


export default function HappinesComp(){
    return(
        <div className="happines-cont">
            <div className="happines-cont-title">YOU ARE INSPIRED on 15%</div>
             <svg class="svg" height="250" width="100" fill="grey">
        
                <path class="anim1 anim" d="M 0 200 Q 160 180, 320 200 T 960 200 T 1200 200 V 250 H 0 Z"  />
                
                <path class="anim1 anim2" d="M -80 210 Q 80 190, 240 210 T 880 210 T 1120 210 V 250 H -80 Z" />
                
                <path class="anim1 anim3" d="M -160 220 Q 0 200, 160 220 T 800 220 T 960 220 V 250 H -160 Z"  />
            </svg>
        </div>
    )
}