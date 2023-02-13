import React from 'react'
import './MainVideo.scss'
function MainVideo(props) {
    const { image, video: videoSrc } = props;
  return (
    <div className="current-video">
        <video className="current-video__container" controls poster={image} width="100%" height="100%" >
            <source src={videoSrc} type = "video/mp4"></source>
        </video>
    </div>
  )
}

export default MainVideo