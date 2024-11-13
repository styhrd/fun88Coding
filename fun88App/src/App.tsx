import React, { useState } from 'react';
import Carousel from './components/Carousel.tsx';
import bellIcon from './assets/SvgIcons/bell-svgrepo-com 1.svg';
import { Navbar } from './components/Navbar.tsx';
import Games from './components/Games.tsx';
import Categories from './components/Categories.tsx';

function App() {

  return (
    <div className='main'>
      <div className='header'>
        <Navbar />
      </div>
      <div className='content-container'>
        <div className='carousel'>
          <Carousel />
        </div>

        <div className='alert'>
          <img src={bellIcon} alt="Arrow Icon" width="18" height="18" />
          <p>¡FELICIDADES artxxxxipa! GANADOR DESTACADO</p>
        </div>

        <div className='category'>
          <Categories />

        </div>
      </div>

    </div>
  );
}

export default App;
