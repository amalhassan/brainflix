import React, {useState} from 'react'
import videoPlaylistData from '../../data/videos.json'
import videoDetailsData from '../../data/video-details.json'
import './Main.scss'
import MainVideo from '../MainVideo/MainVideo'
import VideoPlaylist from '../VideoPlaylist/VideoPlaylist'
import VideoDescription from '../VideoDescription/VideoDescription'
import CommentSection from '../CommentSection/CommentSection'
function Main() {
    // assigned json data to variables, used the variables as default data through useState 
    const allVideoPlaylistData = videoPlaylistData;
    const [currentVideo, setCurrentVideo] = useState(allVideoPlaylistData[0]);
    const videoInfo = videoDetailsData;
    const [currentVideoInfo, setCurrentVideoInfo] = useState(videoInfo[0]);
    // function to find the data of the clicked VideoCard component, return the id from json object variables and update state 
    const getVideoToDisplay = (id) => {
        const getVideo = allVideoPlaylistData.find(video => {
            return video.id === id;
        })
        const getVideoInfo = videoInfo.find(video => {
            return video.id === id;
        })
        setCurrentVideo(getVideo);
        setCurrentVideoInfo(getVideoInfo );
    }
    // function to pass id to getVideoToDisplay
    const updateActiveVideo = (id) => {
        getVideoToDisplay(id);
    }
  return (
    <div className="main">
        <MainVideo
            video={currentVideoInfo.video}
            image={currentVideoInfo.image}
        />
        <div className="main__video-section-container">
            <div className="main__video-details">
                <VideoDescription
                    currentVideoInfo={currentVideoInfo}
                />
                <CommentSection comments={currentVideoInfo.comments} />
            </div>
            <VideoPlaylist 
                currentVideo={currentVideo}
                allVideoPlaylistData={allVideoPlaylistData}
                updateActiveVideo = {updateActiveVideo}
            />
        </div>
    </div>
  )
}
export default Main