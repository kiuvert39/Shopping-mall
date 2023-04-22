import React, {useState} from "react";

const Modal =(props)=>{
 const [modal, setModal]=useState(false);   

const {url, ramSize, storageCapacity, modelName, bateryLife,processorType, processorSpeed, graphicCard}=props;

 const toggleModal =()=>{
    setModal(!modal)
 }

 if(modal){
    document.body.classList.add('active-modal')
 }
 else{
    document.body.classList.remove('active-modal')
 }

   return(
    <section className="modal">
       <button className="btn" onClick={toggleModal}>open</button>
       

      {modal && (
         
        <div className="overlay" >
            <div className="modal-content" >
                <img src={url} alt="error" className="modal-image"/>
                <div className="conten2">
                     <h2 classNanme='device'>Device properties</h2>
                     <ul className="props">
                        <li>Ram size:{ramSize}</li>
                        <li>Storage:{storageCapacity}</li>
                        <li>Model Name:{modelName}</li>
                        <li>Batery Life:{bateryLife}</li>
                        <li>Processor Type:{processorType}</li>
                        <li>Processor Speed:{processorSpeed}</li>
                        <li>Graphic Card:{graphicCard}</li>
                     </ul>
                </div>
                <button className="close-modal" onClick={ toggleModal  }>x</button>

            </div>
       </div>
      )}

       
    </section>
   )
}

export default Modal