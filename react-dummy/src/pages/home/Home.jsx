import React, { useState } from 'react'
import '../home/home.css'
import Sidebar from '../../components/sidebar/Sidebar';
import Feedx from '../../components/feed/Feedx';
const Home = ({sidebar}) => {
  const [category , setCategory] =useState(0);
  return (
    <>
    <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
    <div className='main'>
<div className={`container${sidebar?"":"large-container"}`}>
  <Feedx category={category}/>
</div>

    </div>
    </>
  )
}

export default Home;