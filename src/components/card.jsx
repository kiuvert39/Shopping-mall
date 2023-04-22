import React from "react";
import Modal from "./modal";
import {specifications} from '../specification'
import './modal.css'


const Card =(props)=>{
 const {url,spec,price,status,mark}=props;
   return(
    <section className="main-card">
      {specifications.map((specifications)=>{
        return <Modal key={specifications.id}{...specifications} className="click"></Modal>

      })}
        <img src={url} alt="error"  className="image"/>
        <h3 className="specifications">{spec}</h3>
        <h4 className="price">{price}</h4>
        <h5 className="status">{status}</h5>
        <h5 className="status">{mark}</h5>
    </section>
   )
}

export default Card