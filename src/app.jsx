import React, { useState,useEffect, useLayoutEffect } from "react";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/components/card.css";
import "../src/app.css";
import data from "../src/components/videoCard.json";
import Container from "react-bootstrap/Container";
import Navigation from "../src/nav"
import Axios from "axios";


const App = ( ) =>{

 const [playing, setPlaying] = useState("");
 const [search, setSearch] = useState("");

useEffect(() =>{
  const getPoster = async () =>{
    try {
      const response = await Axios.get("http://www.omdbapi.com/?t=john+wick+chapter+4&y=2023");
      console.log(response)
    }
    catch (error) {
      console.log("bad request",+error )
    }
  }
  getPoster()
},[])


    return (
      <section >
       <Navigation /> 
        <input type="text" placeholder='Search...' noChange={ (event) =>{
          setSearch(event.target.value);
        }}/>
        <div style={{ border: "10px", margin: "5px" }}>
          <h1 className="player1">Video Player Area</h1>

          <ReactPlayer
            url={playing}
            controls={true}
            width="600px"
            height="450ps"
          />
          <h5 className="player1">Video Url: {playing}</h5>
        </div>

        {data.filter((value)=>{
          if(search === ""){
            return value;
          } else if(value.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
            return value.title;
          }
        }).map((value) => {
          return (
            <div key={value.id} className="mainVideoCard">
              <div>
                <div className="videoCard">
                  <ReactPlayer
                    url={(onclick = () => setPlaying(value.url))}
                    controls={true}
                    width="300px"
                    height="140ps"
                  />
                  <h3 className="title">{value.title}</h3>
                  <h5 className="Release">{value.duration}</h5>
                </div>
              </div>
            </div>
          );
          })}
      </section>
    );
}

export default App