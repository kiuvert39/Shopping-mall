import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card';
import { images } from './imageArray';
import '../src/components/card.css';




const Main = () => {


  return (
    <section className="Card2">
      {images.map((images) => {

        return <Card key={images.id}{...images}></Card>
      })}
    
    </section>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'));

