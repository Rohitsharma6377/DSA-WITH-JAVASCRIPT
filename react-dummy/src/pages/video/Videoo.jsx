import React from 'react'
import '../video/video.css'
import PlayVideo from '../../components/Playvideo/PlayVideo';
import Recomanded from '../../components/recomanded/Recomanded';
import { useParams } from 'react-router-dom';
const Videoo = () => {
  const {videoId,categoryId}=useParams();
  return (
    <div className="play-container">
      <PlayVideo videoId={videoId}/>
      <Recomanded/>
    </div>
  )
}

export default Videoo;