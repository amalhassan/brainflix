import React from 'react'
import './VideoCard.scss'
function VideoCard(props) {
  const {id, image, title, channel} = props;
  // function to pass video's id when clicked
  const clickedVideo = () => {
    props.updateActiveVideo(id);
  }
  return (
    <div className="videoCard" id={id} onClick={clickedVideo}>
        <div className="videoCard__img-container" alt="thumbnail ">
            <img className="videoCard__img" src={image} alt="thumbnail"/>
        </div>
        <div className="videoCard__desc-container">
        <h3 className="videoCard__title">{title}</h3>
        <p className="videoCard__channel">{channel}</p>
        </div>
    </div>
  )
}
export default VideoCard