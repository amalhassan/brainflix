import React from 'react'
import './VideoCard.scss'
const VideoCard = ({id, image, title, channel}) => {
  return (
      <div className="videoCard" id={id}>
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