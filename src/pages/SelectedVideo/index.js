import React, {useEffect} from 'react'
import { useParams, useLocation } from 'react-router-dom';
import Main from "../../components/Main/Main";
const SelectedVideo = ({allPlaylist, currentVideo, currentVideoInfo, getVideoData, setCurrentVideoInfo}) => {
  const {id} = useParams();
  const location = useLocation();
  useEffect(() => {
    getVideoData(id);
  }, [location])
  return (
    <> 
      <Main allPlaylist={allPlaylist} currentVideo={currentVideo} currentVideoInfo={currentVideoInfo} setCurrentVideoInfo={setCurrentVideoInfo}/>
    </>
  )
}
export default SelectedVideo