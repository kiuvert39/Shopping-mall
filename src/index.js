import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/player';
//  import '../src/components/card.css';
//  import Cards from './components/modal2';
//  import Head from './components/header';
//  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//  import '../src/index.css';
//  import {Cart} from "./components/cart"


const Main = () => {

  return (
    <section  >
       {/* <Head/>

    <Cards className="translate-y-2/4 dark:md:hover:bg-fuchsia-600"/>
      <Router>
        <Routes>
          <Route path="Cards" element={Cards}/>
          <Route path="/Cart" element={Cart}/>
        </Routes>
      </Router> */}

    <App/>
     </section>

  )
}

ReactDOM.render(<Main />, document.getElementById('root'));

