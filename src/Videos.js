import React from 'react';
import './Videos.css';
import VideoCard from './VideoCard'
import { BrowserRouter as Router , Switch, Route} from "react-router-dom";
import videoOne from './videoOne';
import videotwo from './videotwo';
import videothree from './videothree';
import videofour from './videofour';
import { Link } from 'react-router-dom';








function Videos() {
    return (
      <Router>
        
        <div className="videos">
        
            <h2>Recommended</h2> 
            
              
            <div className="vidoes__R">
            <Switch>
            
            <Route path="/video1" exact component={videoOne} />
            <Route path="/video2" component={videotwo} />
            <Route path="/video3" component={videothree} />
            <Route path="/video4" component={videofour} />
            


            


            </Switch>
          
              
                <Link to="/video1" >
                <VideoCard                 
                  title="Build an Online store with Wix"
                  views="2M views"
                  timestamp="5 days ago"
                  channelimage="https://www.svgrepo.com/show/113193/avatar.svg"
                  channel="TN CODE"
                  image="https://i.ytimg.com/vi/VeFEn9tMKvo/maxresdefault.jpg"
                 
                />
                </Link>
                <Link to="/video2">
                <VideoCard
                  title="Documentation with Latex"
                  views="5M views"
                  timestamp="1 day ago"
                  channelimage="https://www.svgrepo.com/show/113193/avatar.svg"
                  channel="TN CODE"
                  image="https://s3-alpha-sig.figma.com/plugins/754622689958838972/1200/bc211d57-2716-415c-8b7a-21b4a3455660-cover?Expires=1639353600&Signature=PGLYV5zqHFqlWyX~esEXVvKE3sz-OBZ4mIadxXOIwYYX6SgPxhLT2MeQB7smIsYyyxJR~jZ9nGx7b~EicgxOWkUfDfJHKlxBF3C6vBVPUIYIH-TphXy4~4kRNTx648zO-pLvtRO7VKNLXaHi2LooyUedzsluPz~~s6pvK6hQmHwEk5isBpU9x7K45M6hQEu1bqJqtrzWrPthz0S7T3FsAruwzx2haeoCiaoc3tKV63DlPS35mD1MXnAI7dCTHOh-BHDbxoq8GraG5kOua~NOwTpblUH3wYcuqZgfiP~ay3uYnIB0us940SqeZk0J-nD2r2yI57AK11RlCHnjv8Wvew__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  
               />
               </Link>

               <Link to="/video3">
                <VideoCard
                  title="Python full course"
                  views="22M views"
                  timestamp="1 year ago"
                  channelimage="https://www.svgrepo.com/show/113193/avatar.svg"
                  channel="TN CODE"
                  image="https://i.ytimg.com/vi/_uQrJ0TkZlc/maxresdefault.jpg"
                  
                />
                </Link>

                <Link to="/video4">
                <VideoCard
                  title="Java full course"
                  views="2M views"
                  timestamp="3 months ago"
                  channelimage="https://www.svgrepo.com/show/113193/avatar.svg"
                  channel="TN CODE"
                  image="https://i.ytimg.com/vi/xk4_1vDrzzo/maxresdefault.jpg"
                  
                />
                </Link>
              
            </div>
            
            
        </div>
        
        </Router>
    )
}

export default Videos
