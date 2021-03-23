
import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

import { Button } from './Button';

function Cards() {
  return(
    <div id="cards">
    <div   className='cards'>
      <h1>Check out projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/portfolio_1.webp'
              text='Search engine results scrapper'
              label='Python'
              path='/'
            />
            <CardItem
              src='images/img-1.webp'
              text='Discord Bot'
              label='Automation'
              path='/'
            />

            <CardItem
              src='images/portfolio_2.webp'
              text='NASA APOD Wallpaper changer'
              label='Automation'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cards;
