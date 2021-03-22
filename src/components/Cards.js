
import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Projects!</h1>
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
              src='images/portfolio_2.webp'
              text='Reddit and Discord bots'
              label='Automation'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
