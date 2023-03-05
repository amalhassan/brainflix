import React from 'react'
import {Link} from 'react-router-dom'
import './VideoPlaylist.scss'
import VideoCard from '../VideoCard/VideoCard'
function VideoPlaylist(props) {
  // console.log(props);
  return (
    <div className="video">
        <h2 className="video__playlist-title">Next Videos</h2>
        <div className="video__playlist-cards">
          {/* filter out current video and pass data belonging to the remaining videos to the VideoCard component */}
            {props.allPlaylist
                .filter((video) => {
                    return props.currentVideo.id !== video.id;
                }).map ((info) => 
                (
                  <Link to={`/${info.id}`} key={info.id}>
                    <VideoCard 
                        id={info.id}
                        image={info.image}
                        title={info.title}
                        channel={info.channel}
                        getVideoToDisplay = {props.getVideoToDisplay}
                    />
                  </Link>
                ))}  
        </div>
    </div>
  )
}

export default VideoPlaylist