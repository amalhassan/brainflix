import React from 'react'
import { useParams } from 'react-router-dom';
import Main from "../../components/Main/Main";

const SelectedVideo = () => {
  const {id} = useParams();
  console.log("para ", id);
  // useEffect(() => {

  // }, [])
  return (
    <> 
      <Main />
    </>
  )
}

export default SelectedVideo