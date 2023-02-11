import React from 'react'
import './VideoPlaylist.scss'
import VideoCard from '../VideoCard/VideoCard'
function VideoPlaylist(props) {
    
  return (
    <div className="video">
        <h2 className="video__playlist-title">Next Videos</h2>
        <div className="video__playlist-cards">
            {props.allVideoData
                .filter((video) => {
                    return props.currentVideo.id !== video.id;
                }).map ((info) => 
                (
                <VideoCard 
                    key={info.id}
                    id={info.id}
                    image={info.image}
                    title={info.title}
                    channel={info.channel}
                    updateActiveVideo = {props.updateActiveVideo}
                />
                ))}  
        </div>
    </div>
  )
}

export default VideoPlaylist