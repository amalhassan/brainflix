import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {baseURL} from '../../constant.js';
import './Main.scss';
import {useParams, useLocation} from 'react-router-dom'; 
import MainVideo from '../MainVideo/MainVideo'
import VideoPlaylist from '../VideoPlaylist/VideoPlaylist'
import VideoDescription from '../VideoDescription/VideoDescription'
import CommentSection from '../CommentSection/CommentSection'
const Main = () => {
    let {id} = useParams();
    const location = useLocation();
    const [allPlaylist, setAllPlaylist] = useState([]);
    const [currentVideo, setCurrentVideo] = useState({});
    const [currentVideoInfo, setCurrentVideoInfo] = useState({});
    useEffect(() => {
        const getPlaylist = async() => {
            try {
                if (allPlaylist.length == 0) {
                    const res = await axios.get(baseURL);
                    console.log(res.data);
                    setAllPlaylist(res.data);
                    return res.data
                } else {
                    return allPlaylist
                }
            } catch (error) {
                console.log(error)
            }
        }
        const getVideoInfo = async(id) => {
            try {
                const res = await axios.get(`${baseURL}/${id}`);
                console.log("seceond api id", id);
                console.log("second api", res.data);
                console.log("second api location ", location);
                return setCurrentVideoInfo(res.data);   
            } catch (error) {
                console.log(error)
            }
        }
        (async function () { 
            const videos =  await getPlaylist();  
            if (location.pathname === "/")  {
                console.log(videos);
                id = videos[0].id;
                setCurrentVideo(videos[0]);
                getVideoInfo(id);
            } else {
                setCurrentVideo(videos.find(video => video.id === id));
                getVideoInfo(id);
                console.log("playlist in 2nd api", allPlaylist);
                console.log("current vid", currentVideo)
            }
        } ())   
    }, [location])   
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
                    <CommentSection commentArray={currentVideoInfo.comments} setCurrentVideoInfo={setCurrentVideoInfo} id={currentVideoInfo.id} />
                    
                </div>
                <VideoPlaylist 
                    currentVideo={currentVideo}
                    allPlaylist={allPlaylist} 
                />
            </div>
        </div>
    )
}
export default Main