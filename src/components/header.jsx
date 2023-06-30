import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import '../components/header.css';
import "swiper/css";

const Head = ({slids})=>{

    return (
      <div className="main-content">
        <div className="text-header">
          <h1 className="text">
            We Have you covered with
            <br /> all you elctrontice products
          </h1>
        </div>
        
      </div>
    );
}

export default Head;