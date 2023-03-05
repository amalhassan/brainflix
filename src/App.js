import React, {useState} from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from 'axios';
import {baseURL, apiKEY} from './constant.js'
import Header from "./components/Header";
import Home from "./pages/Home"
import SelectedVideo from "./pages/SelectedVideo";
import UploadVideo from './pages/UploadVideo';
import NotFound from "./pages/NotFound";
function App() {
  // const defaultVideo = {};
  // const defaultVideoInfo = {}
  // const [currentVideo, setCurrentVideo] = useState({});
  // const [currentVideoInfo, setCurrentVideoInfo] = useState({});
  // let allPlaylist = [];
  // let id = '';
  // const getVideoData = () => {
  //   // let targetId = null;
  //   // console.log(allPlaylist);
  //   axios.get(`${baseURL}/videos?api_key=${apiKEY}`)
  //   .then((res) => {
  //     if (allPlaylist.length === 0)  {
  //       allPlaylist = res.data;
  //       // targetId = 0;
  //       setCurrentVideo(res.data[0]);
  //       id = res.data[0].id; 
  //     }
  //     setCurrentVideo(allPlaylist.find(video => 
  //       video.id === id
  //     ))
  //     console.log(currentVideo); 
  //   })
  //   axios.get(`${baseURL}/videos/${id}?api_key=${apiKEY}`)
  //     .then((resp) => {
  //         //console.log(res.data)
  //         console.log(resp.data)
  //         setCurrentVideoInfo(resp.data);
  //         // console.log(res.data.video)
  //     })
  //     .catch(error => {
  //         console.log(error);
  //     })
  //   .catch(error => {
  //     console.log(error);
  // })
  // }
   //id={id} getVideoData = {getVideoData} currentVideo={currentVideo} getVideoDate(); 
  
  return (
  <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route exact path="/" element={<Home  />}></Route>
        <Route path=":id" element={<SelectedVideo />}></Route>
        <Route path="/upload" element={<UploadVideo />}></Route>
        <Route path="*" element={< NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
