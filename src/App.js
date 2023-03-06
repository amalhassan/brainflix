import React, {useState} from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import axios from 'axios';
import {baseURL, apiKEY} from './constant.js'
import Header from "./components/Header";
import Home from "./pages/Home"
import SelectedVideo from "./pages/SelectedVideo";
import UploadVideo from './pages/UploadVideo';
const App = () => {
  const [currentVideo, setCurrentVideo] = useState({});
  const [currentVideoInfo, setCurrentVideoInfo] = useState({});
  const [allPlaylist, setAllPlaylist] = useState([]);
  const getVideoData = async (id) => {
    let currentAllPlaylist = allPlaylist;
    console.log("id in app", id);
    console.log("playlist in app", currentAllPlaylist)
    if (currentAllPlaylist.length === 0)  {
      await axios.get(`${baseURL}/videos?api_key=${apiKEY}`)
        .then((res) => {
            currentAllPlaylist = res.data;
            setAllPlaylist(currentAllPlaylist);
            id = res.data[0].id; 
          }
        ).catch(error => {
          console.log(error);
        })
    }
    id = id || currentAllPlaylist[0].id;
    setCurrentVideo(id ? currentAllPlaylist.find(video => 
       video.id === id  
    ) : currentAllPlaylist[0].id)
    axios.get(`${baseURL}/videos/${id}?api_key=${apiKEY}`)
      .then((resp) => {
        setCurrentVideoInfo(resp.data);
      })
      .catch(error => {
          console.log(error);
      });
  } 
  return (
  <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route exact path="/" element={<Home  allPlaylist={allPlaylist} getVideoData={getVideoData} currentVideo={currentVideo} currentVideoInfo={currentVideoInfo} setCurrentVideoInfo={setCurrentVideoInfo}/>}></Route>
        <Route path=":id" element={<SelectedVideo getVideoData={getVideoData} allPlaylist={allPlaylist} currentVideo={currentVideo} currentVideoInfo={currentVideoInfo} setCurrentVideoInfo={setCurrentVideoInfo}/>}></Route>
        <Route path="/upload" element={<UploadVideo />}></Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
