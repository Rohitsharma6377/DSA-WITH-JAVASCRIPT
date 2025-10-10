import React, { useEffect, useState } from 'react'
import '../recomanded/re.css'
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import { API_KEY } from '../../Data';
const Recomanded = ({categoryId}) => {
    const [apiData , setApiData] = useState([]);
    const fetchData = async() =>{
        const relatedVideo_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
        await fetch(relatedVideo_url).then(res=>res.json()).then(data=>setApiData(data.items))
    }
    useEffect(()=>{
      fetchData();
    },[])
  return (
    <div className="recoman">
        {apiData && apiData.map((item,index)=>{
            return(
        <div className="side-video-list" key={index}>
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vidinfo">
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, praesentium?</h4>
                <p>codex journey</p>
                <p>199k views</p>
            </div>
        </div>

            )
        })}
       
    </div>
  )
}

export default Recomanded;