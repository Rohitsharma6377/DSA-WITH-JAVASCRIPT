import React from 'react'
import '../sidebar/side.css'
import home from '../../assets/home.png'
import game from '../../assets/game_icon.png'
import automobile from '../../assets/automobiles.png'
import sport from '../../assets/sports.png'
import tech from '../../assets/tech.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import news from '../../assets/news.png'
import funn from '../../assets/entertainment.png'
import music from '../../assets/music.png'
import megan from '../../assets/megan.png'
import blogs from '../../assets/blogs.png'
import tom from '../../assets/tom.png'
const Sidebar = ({sidebar , category,setCategory}) => {

  return (
    <div className={`${sidebar?"":"small-sidebar"}sidebar`}>
      <div className="shortlink">
        <div className={`sidelink ${category===0?"active":""}`} onClick={()=>setCategory(0)}  >
          <img src={home} alt="" /><p>Home</p>
        </div>
         <div className={`sidelink ${category===20?"active":""}`} onClick={()=>setCategory(20)}  >
          <img src={game} alt="" /><p>Gaming</p>
        </div>
         <div className={`sidelink ${category===2?"active":""}`} onClick={()=>setCategory(2)}  >
          <img src={automobile} alt="" /><p>Automobiles</p>
        </div>
         <div className={`sidelink ${category===17?"active":""}`} onClick={()=>setCategory(17)}  >
          <img src={sport} alt="" /><p>sports</p>
        </div>
         <div className={`sidelink ${category===24?"active":""}`} onClick={()=>setCategory(24)}  >
          <img src={funn} alt="" /><p>Entertenment</p>
        </div>
         <div className={`sidelink ${category===28?"active":""}`} onClick={()=>setCategory(28)}  >
          <img src={tech} alt="" /><p>Technology</p>
        </div>
         <div className={`sidelink ${category===10?"active":""}`} onClick={()=>setCategory(10)}  >
          <img src={music} alt="" /><p>Musics</p>
        </div>
         <div className={`sidelink ${category===22?"active":""}`} onClick={()=>setCategory(22)}  >
          <img src={blogs} alt="" /><p>Blogs</p>
        </div>
         <div className={`sidelink ${category===25?"active":""}`} onClick={()=>setCategory(25)}  >
          <img src={news} alt="" /><p>News</p>
        </div>
        
        <hr />
        <div className="subscribed">
          <h3>Subscribed</h3>
           <div className="sidelink">
          <img src={jack} alt="" /><p>Ezsnipts</p>
        </div>
         <div className="sidelink">
          <img src={simon} alt="" /><p>mr.beast</p>
        </div>
         <div className="sidelink">
          <img src={tom} alt="" /><p>sidhumoosewala</p>
        </div>
         <div className="sidelink">
          <img src={megan} alt="" /><p>Chai or code</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;