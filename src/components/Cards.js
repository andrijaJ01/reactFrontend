
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
              path='/services'
            />
            <CardItem
              src='images/portfolio_2.webp'
              text='Reddit and Discord bots'
              label='Automation'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/portfolio_3.webp'
              text='First iteration of this website made with fastAPI and bootstrap'
              label='Web'
              path='/services'
            />
            <CardItem
              src='images/img-4.webp'
              text='Lorem ipsum project (to be added)'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.webp'
              text='Lorem ipsum project No 2 (to be added)'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
