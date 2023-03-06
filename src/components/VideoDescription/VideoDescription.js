import React from 'react'
import './VideoDescription.scss'
import viewsIcon from '../../assets/icons/views.svg'
import likesIcon from '../../assets/icons/likes.svg'
import { dateFormatter } from '../../utils';
const VideoDescription = (props) => {
    const {title, channel, views: viewsCount, timestamp, likes, description} = props.currentVideoInfo;
  return (
    <section className="video-desc">
        <h1 className="video-desc__title">{title}</h1>
        <div className="video-desc__snapshot"> 
            <section className="video-desc__snapshot-items video-desc__snapshot--left">
                <p className="video-desc__snapshot--left__channel">By {channel}</p>
                <p>{dateFormatter(timestamp)}</p>
            </section>
            <section className="video-desc__snapshot-items video-desc__snapshot--right">
                <div className="video-desc__snapshot--right__icons">
                    <i><img src={viewsIcon} alt="views icon"/></i>
                    <p>{viewsCount}</p>
                </div>
                <div className="video-desc__snapshot--right__icons">
                    <i><img src={likesIcon} alt="likes icon"/></i>
                    <p>{likes}</p>
                </div>
            </section>
        </div>
        <p className="video-desc__text">{description}</p>
    </section>
  )
}
export default VideoDescription