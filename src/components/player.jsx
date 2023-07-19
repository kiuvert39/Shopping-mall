import React, { useState } from 'react'
import data from './playerData.json'

const Player= () =>{

    const [playing, setPlaying] = useState("");


  return (
    <div>

       <div className='videoSwap'>
               <h1 className='player1'>Video Player Area</h1>
               <h5 className='VideoURL'>Video Url: {playing}</h5>
       </div>

       {/*consider the code above☝ as the main video player that you will create */}

       <div>
        {/* map method displays each item as well as adding an event listener each. */}
            { data.map((value) => {
                 return ( 
                   <h1 key={value.id} onClick={() =>setPlaying(value.url)}>{value.name}</h1> 
                ) }) }
       </div>  

    </div>    
  )
}




export default Player