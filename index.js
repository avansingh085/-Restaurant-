import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//  import Card from './newreact';
//  import Data from './display';
 import Header from './Header_Res.js';
 import Footer from './Footer.js';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="main">
      <Header/> 
     <Footer/>  
    </div>
 </React.StrictMode>
);
reportWebVitals();
