import React, {useEffect} from 'react'
import Main from '../../components/Main/Main'
const Home = ({getVideoData, currentVideo, currentVideoInfo, allPlaylist, setCurrentVideoInfo}) => {
  console.log("home", currentVideo)
  useEffect(() => {
    getVideoData();
  }, [])
  return (
    <Main allPlaylist={allPlaylist} currentVideo={currentVideo} currentVideoInfo={currentVideoInfo} setCurrentVideoInfo={setCurrentVideoInfo}/>
  )
}
export default Home