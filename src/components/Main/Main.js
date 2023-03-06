import React from 'react'
import './Main.scss'
import MainVideo from '../MainVideo/MainVideo'
import VideoPlaylist from '../VideoPlaylist/VideoPlaylist'
import VideoDescription from '../VideoDescription/VideoDescription'
import CommentSection from '../CommentSection/CommentSection'
const Main = (props) => {
  return (
    <div className="main">
        <MainVideo
            video={props.currentVideoInfo.video}
            image={props.currentVideoInfo.image}
        /> 
        <div className="main__video-section-container">
            <div className="main__video-details">
                <VideoDescription
                    currentVideoInfo={props.currentVideoInfo}
                />  
                <CommentSection commentArray={props.currentVideoInfo.comments} setCurrentVideoInfo={props.setCurrentVideoInfo} id={props.currentVideoInfo.id} />
            </div> 
            <VideoPlaylist 
                currentVideo={props.currentVideo}
                allPlaylist={props.allPlaylist} 
            />
        </div>
    </div>
  )
}
export default Main