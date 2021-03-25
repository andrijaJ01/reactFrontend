import React from 'react';
import './details.css';
import '../../App.css';


export default function Proj1() {
  return(

    <div className='detail-container'>
      <h1>Search result web scrapper</h1>

<div class="grid-container">
  <div class="proj-details">
    <h2>Project description:</h2>
    <hr/>
    <p>A Python library that queries Google, Bing, Yahoo and other search engines and collects the results from multiple search engine results pages.
Please note that web-scraping may be against the Terms of Service of some search engines, and may result in a temporary ban.</p>
</div>
  <div class="proj-features">
    <ul>
    <h2>Project features:</h2>
    <hr/>

   <li>Can save output files (html, csv, json)</li>
   <li>Search operators (url, title, text) are supported</li>
   <li>HTTP and SOCKS proxy support.</li>
   <li>Can collect dark web links with Torch.</li>
   <li>Easily extensible with new search engines.</li>
   <li>Python2 - Python3 are both supported.</li>

    </ul>
  </div>
</div>
        <a href="https://github.com/andrijaJ01/ProjectSCRAPPER" target='blank' className="button">VIEW CODE</a>

    </div>

);
}
