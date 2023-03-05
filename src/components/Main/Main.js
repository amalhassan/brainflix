import React from 'react'
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';
// import {baseURL, apiKEY} from '../../constant.js'
// import videoPlaylistData from '../../data/videos.json'
// import videoDetailsData from '../../data/video-details.json'
import './Main.scss'
import MainVideo from '../MainVideo/MainVideo'
import VideoPlaylist from '../VideoPlaylist/VideoPlaylist'
import VideoDescription from '../VideoDescription/VideoDescription'
import CommentSection from '../CommentSection/CommentSection'
function Main() {
    // const [currentVideo, setCurrentVideo] = useState({});
    // const [currentVideoInfo, setCurrentVideoInfo] = useState({});
    // const [allPlaylist, setAllPlaylist] = useState([]);
    // let location = useLocation();
    // console.log(location.pathname);
    // let loc = location.pathname.slice(1);
    // const getVideoToDisplay = (id) => {
    //     setCurrentVideo(allPlaylist.find(video => 
    //         video.id === id
    //      ))
    //     setCurrentVideoInfo(allPlaylist.find(video => 
    //             video.id === id
    //         ));
    // };
    // useEffect(() => {
    //     let targetId = null;
    //     console.log(allPlaylist);
    //     if (allPlaylist.length === 0)  {
    //     axios.get(`${baseURL}/videos?api_key=${apiKEY}`)
    //     .then((res) => {
    //         setAllPlaylist(res.data);
    //         targetId = 0;
    //         setCurrentVideo(res.data[targetId]);        
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })}
    //     else {
    //     axios.get(`${baseURL}/videos/${loc}?api_key=${apiKEY}`)
    //     .then((res) => {
    //         console.log(res.data)
    //         setCurrentVideoInfo(res.data);
    //         setCurrentVideo(res.data);
    //         // console.log(res.data.video)
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })}
    // // getVideoToDisplay(loc);
    // }, [location]) 
       
  return (
    <div className="main">
        {/* <MainVideo
            video={currentVideoInfo.video}
            image={currentVideoInfo.image}
        /> */}
        <div className="main__video-section-container">
            {/* <div className="main__video-details">
                <VideoDescription
                    currentVideoInfo={currentVideoInfo}
                />  */}
                {/* <CommentSection comments={currentVideoInfo.comments} /> */}
            {/* </div> */}
            {/* <VideoPlaylist 
                currentVideo={currentVideo}
                allPlaylist={allPlaylist} */}
                {/* getVideoToDisplay = {getVideoToDisplay} */}
            {/* /> */}
        </div>
    </div>
    
  )
}
export default Main