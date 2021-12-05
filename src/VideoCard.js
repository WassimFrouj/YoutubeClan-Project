import React from 'react';
import { Avatar } from '@mui/material';
import "./VideoCard.css";





function VideoCard({ image, title, channel, views , timestamp, channelimage}) {
    return (
        <div className="videocard">
            
           <img className="videocard__tumbnail" src={image} alt=""/>
           <div className="videocard__info">
               <Avatar className="videocard__avatar"
                alt={channel} src={channelimage}/>
             <div className="videocard__text">
                 <h4>{title}</h4>
                 <p>{channel}</p>
                 <p>{views} . {timestamp}</p>
             </div>

           </div>
        </div>
    )
}

export default VideoCard
