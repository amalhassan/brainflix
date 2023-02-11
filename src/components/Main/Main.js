import React, {useState} from 'react'
import videoPlaylistData from '../../data/videos.json'
import videoDetailsData from '../../data/video-details.json'
import './Main.scss'
import MainVideo from '../MainVideo/MainVideo'
import VideoPlaylist from '../VideoPlaylist/VideoPlaylist'
function Main() {
    // console.log(videoPlaylistData);
    const allVideoData = videoPlaylistData;
    const [currentVideo, setCurrentVideo] = useState(allVideoData[0]);
    const videoInfo = videoDetailsData;
    // console.log(videoInfo);
    const [currentVideoInfo, setCurrentVideoInfo] = useState(videoInfo[0]);
    // console.log(currentVideoInfo);
    

    // console.log(currentVideo)
    const updateVideoDisplayed = (id) => {
        const selectedVideo = allVideoData.find(video => {
            return video.id === id;
        })
        setCurrentVideo(selectedVideo);
        setCurrentVideoInfo(selectedVideo);
    }
    const updateActiveVideo = (id) => {
        updateVideoDisplayed(id);
    }
  return (
    <div className="main">
        <MainVideo
            video={currentVideoInfo.video}
            image={currentVideoInfo.image}
        />
        <div className="main__video-section-container">
            <div className="main__video-details">
                {/* <VideoDescription
                    currentVideo={currentVideo}
                /> */}
                {/* <CommentForm/> */}
                {/* <DisplayComments
                    currentVideo={currentVideo}
                /> */}
            </div>
            <VideoPlaylist 
            currentVideo={currentVideo}
            allVideoData={allVideoData}
            updateActiveVideo = {updateActiveVideo}
            />
        </div>
    </div>
  )
}

export default Main