import React from 'react'; 
import { useState } from "react";
import  '../components/modal.css'
import{cards} from "../components/array.js"
import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import {Button} from "../components/Button.js"
import { BrowserRouter, Link } from "react-router-dom";
import { Cart } from "../components/cart";



const Card = ({ cardIndex, openModal},props ) => {
  const {url,mark,price,status } = cards[cardIndex];
   
  return (
    <section className="main-card" onClick={() => openModal(cardIndex)}>
   

      {cards.map((card, index) => (

        <images key={cards.id} cardIndex={index} />

      ))}

      <img src={url} alt="error" className="image" />

      <h5 className="status">{mark}</h5>
      <h4 className="price">{price}</h4>
      <div className="icons">
        <AiOutlineStar/>
        <AiOutlineStar/>
        <AiOutlineStar/>
        <AiOutlineStar/>
        <AiOutlineStar/>
      </div>
     
    </section>
  );
};

const Modal = ({ cardIndex, closeModal }) => {
const {
  id,url,ramSize,storageCapacity,modelName,bateryLife,graphicCard,processorType,mark,processorSpeed,
} = cards[cardIndex];

//  if (Modal) {
//     document.body.classList.add("active-modal");
//  } else {
//     document.body.classList.remove("not-active");
//   }

  return (
    <section className="overlay">

      <div className="modal-content">

        <BrowserRouter>

          <Link to="/Cart" element={<Cart/>}>

            <FiShoppingCart className="shopping" size="2rem" />
          </Link>

        </BrowserRouter>

        <AiOutlineHeart className="heart" size="2rem" />

        <img src={url} alt="error" className="modal-image" />

        <div className="conten2">
          <ul className="props">
          <b>
            <h2 classNanme="device">Device properties</h2>
          </b>
            <li>Ram size:{ramSize}</li>
            <li>Storage:{storageCapacity}</li>
            <li>Model Name:{modelName}</li>
            <li>Batery Life:{bateryLife}</li>
            <li>Processor Type:{processorType}</li>
            <li>Processor Speed:{processorSpeed}</li>
            <li>Graphic Card:{graphicCard}</li>
            <Button />
          </ul>
        </div>
        <button className="close-modal" onClick={closeModal}>
          x
        </button>

      </div>
      
    </section>
  );
};

const Cards = () => {
  const [modalIndex, setModalIndex] = useState(null);

  const openModal = (index) => {
    setModalIndex(index);
  };

  const closeModal = () => {
    setModalIndex(null);
  };

  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <Card key={card.id} cardIndex={index} openModal={openModal} />
      ))}
      {modalIndex !== null && (
        <Modal cardIndex={modalIndex} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Cards;