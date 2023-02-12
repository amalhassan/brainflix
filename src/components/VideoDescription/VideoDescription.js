import React from 'react'
import './VideoDescription.scss'
import viewsIcon from '../../assets/icons/views.svg'
import likesIcon from '../../assets/icons/likes.svg'

function VideoDescription(props) {
    console.log(props);
    const {title, channel, views: viewsCount, timestamp, likes, description} = props.currentVideoInfo;
    // console.log(viewsCount)
    const date = timestamp;
    const dateFormatter = (date) => {
        const formatVideoDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: "2-digit", day: "2-digit"}).format(date);
        console.log(formatVideoDate);
        return formatVideoDate
    }
   
  return (
    <section className="video-desc">
        <h1 className="video-desc__title">{title}</h1>
        <div className="video-desc__snapshot"> 
            <section className="video-desc__snapshot-items video-desc__snapshot--left">
                <p className="video-desc__snapshot--left__channel">By {channel}</p>
                <time>{dateFormatter(date)}</time>
            </section>
            <section className="video-desc__snapshot-items video-desc__snapshot--right">
                <div className="video-desc__snapshot--right__icons">
                    <i><img src={viewsIcon}/></i>
                    <p>{viewsCount}</p>
                </div>
                <div className="video-desc__snapshot--right__icons">
                    <i className="video-desc__views-icon"><img src={likesIcon}/></i>
                    <p>{likes}</p>
                </div>
            </section>
        </div>
        <p className="video-desc__text">{description}</p>
    </section>
  )
}

export default VideoDescription