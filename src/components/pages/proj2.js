import React from 'react';
import './details.css';
import '../../App.css';


export default function Proj2() {
  return(

    <div className='detail-container'>
      <h1>Discord Bot</h1>

<div class="grid-container">
  <div class="proj-details">
    <h2>Project description:</h2>
    <hr/>
    <p>A Python library that uses discord api to function as discord bot.</p>
</div>
  <div class="proj-features">
    <ul>
    <h2>Project features:</h2>
    <hr/>

   <li>Roll dice</li>
   <li>fetch random quote </li>
   <li>TODO:frontend for bot made with fastapi</li>
   <li>TODO:monetary system for users to have points that can be exchanged for 'items'</li>
   

    </ul>
  </div>
</div>
        <a href="https://github.com/andrijaJ01/discord_bots" target='blank' className="button">VIEW CODE</a>

    </div>


    );
}
