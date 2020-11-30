import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import hackclublogo from './hackclublogo.webp'
import imgleft from './imgleft.jpg'
import imgright from './imgright.jpg'

const rootElement = document.getElementById('root')

const header = (
  <div>
    <h1>Week #1 - React App</h1>
  </div>
);

const main = (
  <div className="main">
    <h2>Let's see if you can click the correct image</h2>
    <br/>
    <div className="img-block">
      <img src= {imgleft} alt=""/>
      <a href="http://hackclub.tech/">
        <img class="logo" src= {hackclublogo} alt=""/>
      </a>
      <img src={imgright} alt=""/>
    </div>
  </div>
);

const footer = (
  <div>
    <h2>Watch this!</h2>
    <br/>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/3d-6YanrbL4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
  </div>
);

const app = (
  <div className="app">
    {header}
    {main}
    {footer}
  </div>
);

ReactDOM.render(app, rootElement);