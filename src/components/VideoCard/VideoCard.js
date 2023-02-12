import React from 'react'
import './VideoCard.scss'

function VideoCard(props) {
  // console.log(props);
  const {id, image, title, channel} = props;
  const clickedVideo = () => {
    props.updateActiveVideo(id);
  }
  return (
    <div className="videoCard" id={id} onClick={clickedVideo}>
        <div className="videoCard__img-container" alt="thumbnail ">
            <img className="videoCard__img" src={image} />
        </div>
        <div className="videoCard__desc-container">
        <h3 className="videoCard__title">{title}</h3>
        <p className="videoCard__channel">{channel}</p>
        </div>
    </div>
  )
}

export default VideoCard