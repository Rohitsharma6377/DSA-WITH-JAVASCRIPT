import React, { useEffect, useState } from 'react'
import'../Playvideo/play.css'
import v1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, Value_Gen } from '../../Data'
import moment from 'moment'
import { useParams } from 'react-router-dom'
const PlayVideo = ({videoId}) => {
    // const [videoId] = useParams();
    const [apiData ,setApiData]=useState(null);
    const [channelData , setChannelData] = useState(null);
    const [commentData ,setCommentData] = useState([]);


    const fetchvdata = async()=>{
        //fetch vedio data
        const VideoDetails_url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(VideoDetails_url).then(res=>res.json()).then(data=>setApiData(data.items[0]));

    }
    const fetchOtherdata= async ()=>{
   //fetching channel data

        const channelData_url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
        await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]))


        //fetchhing comment data
        const cooment_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
        await fetch(cooment_url).then(res=>res.json()).then(data=>setCommentData(data.items))
    }

    useEffect(()=>{
fetchvdata();
    },[{/*videoId*/}])
    useEffect(()=>{
        fetchOtherdata();
    },[apiData])
  return (
    
    <div className="playvideo">
        {/* {<video src={v1} controls  autoPlay muted ></video>} */}
        <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  ></iframe>
        <h3>{apiData?apiData.snippet.title:"title here"}</h3>
        <div className="playvinfo">
            <p>{apiData?Value_Gen(apiData.statistics.viewCount):"16k"} Views &bull;  </p>
            <div>
                <span>
                    <img src={like} alt="" />{apiData?Value_Gen(apiData.statistics.likeCount):"111"}
                </span>
                <span>
                    <img src={dislike} alt="" />100
                </span>
                <span>
                    <img src={share} alt="" />Share
                </span>
                <span>
                    <img src={save} alt="" />Save
                </span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
            <div>
                <p>{apiData?apiData.snippet.channelTitle:""}</p>
                <span>{channelData?Value_Gen(channelData.statistics.subscriberCount):"1M"} Subscribed</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="description">
            <p>{apiData?apiData.snippet.descriptoin:"Decription here"}</p>
       
            <hr />
            <h4>{apiData?Value_Gen(apiData.statistics.commentCount):"102"}Comments</h4>
            {commentData && commentData.map((item,index)=>{
                return(
            <div className="comment" key={index}>
                <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                <div>
                    <h3>
                        {item.snippet.topLevelComment.snippet.authorDisplayName}<span>1 day ago</span>
                    </h3>
                    <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                    <div className="cm-action">
                        <img src={like} alt="" />
                        <span>{Value_Gen(item.snippet.topLevelComment.snippet.likeCount)}</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>

                )

            })}
            
            
        </div>
    </div>
  )
}

export default PlayVideo;