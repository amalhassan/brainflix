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
                if (allPlaylist.length === 0) {
                    const res = await axios.get(baseURL);
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
                return setCurrentVideoInfo(res.data);   
            } catch (error) {
                console.log(error)
            }
        }
        (async function () { 
            const videos =  await getPlaylist();  
            if (location.pathname === "/")  {
                id = videos[0].id;
                setCurrentVideo(videos[0]);
                getVideoInfo(id);
            } else {
                setCurrentVideo(videos.find(video => video.id === id));
                getVideoInfo(id);
            }
        } ())
    }, [location.pathname, allPlaylist, id])
    useEffect(() => {
        const abortController = new AbortController();
        const postUploadVideo = async (title, description) => {
            try {
            await axios.post(baseURL, {
                    title: title,
                    description: description
            }, { signal: abortController.signal })    
            } catch (error) {
                console.log(error);
            } 
        }
        if (location.state !== null) {
            const {title, description} = location.state; 
              window.history.replaceState({}, document.title);
              postUploadVideo(title, description);
        }
        return () => {
            abortController.abort();
        }
    }, [location.state])  
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