import React, { useState } from "react";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.min.css";
import VideoCard from './videoCard'

const App = () => {
 
 

 
  return (
    <div>
      
      <VideoPlayer/>
      <div>
        <VideoCard title='thor' duration='8mins'/>
        <VideoCard title='fast X' duration='8mins'/>
        <VideoCard title='black adam' duration='8mins'/>
        <VideoCard title='the mother' duration='8mins'/>
        <VideoCard title='the ark' duration='8mins'/>
      </div>

    </div>
  );
};

const VideoPlayer = () => {
   const [video, setVideo]=useState("https://youtu.be/8SnL0TxsGhQ")

  return (
    <div>
    
      <ReactPlayer url={video} controls={true} />
    </div>
  );
}

export default App;
