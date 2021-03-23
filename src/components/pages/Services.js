import React,{useState,useEffect} from 'react';
import '../../App.css';
import Footer from '../Footer';
import { Chrono } from "react-chrono";


export default function Services() {

	
  const [data,setData]= useState({});
  const [title,setTitle]=useState(localStorage.getItem('title') || 'Loading...');
  const [desc,setDesc]=useState(localStorage.getItem('description') || '');
  const [desc1,setDesc1]=useState(desc.split('$')[0] || 'I am freelance, self-educated, highly motivated, python developer from Serbia and I’ve been coding for 1 year with multiple years of supporting education.I usually work on building web scrapers,FastAPI or Flask web apps and all kinds of automatization.');
  const [desc2,setDesc2]=useState(desc.split('$')[1] || 'My primary concentration at the moment is python and have a firm understanding of HTML, CSS and Javascipt.I am comfortable with working on both Windows and Linux operating systems. To help enhance and support my graphics projects I often work with GIMP and Inkscape.');

  const get_data = async () =>{
  //const response= await fetch('http://127.0.0.1:8000/about');
  const response= await fetch('https://fastapibackend.herokuapp.com/about');
  const data= await response.json();
  const title= data.title;
  const desc= data.description;
  setDesc(desc);
  setTitle(title);
  setDesc1(desc.split('$')[0]);
  setDesc2(desc.split('$')[1]);
  
{
  if(localStorage.getItem('title')!==title){
      localStorage.setItem('title','')
    }
  if(localStorage.getItem('description')!==desc){
      localStorage.setItem('description','')
    }

  if(localStorage.getItem('desc1')!==desc1){
    localStorage.setItem('desc1','')
  }
  
  if(localStorage.getItem('desc2')!==desc2){
    localStorage.setItem('desc2','')
  }
}   
  }
  useEffect(()=>{
    get_data();

    localStorage.setItem('title',title)
    localStorage.setItem('desc1',desc1)
    localStorage.setItem('desc2',desc2)

    }
              ,[title,desc,desc1,desc2,get_data]
    );
  return (
	  <>
	  <h1 className='services'>{title}</h1>
	  <div className='container'>
<Chrono mode="VERTICAL" hideControls theme={{primary: "#242424", secondary: "#222222" , cardForeColor: "violet" }} allowDynamicUpdate>
    <div>
      <p className='tline-txt'>{desc1}</p>
    </div>
    <div>
      <p className='tline-txt'>{desc2}</p>
    </div>
  </Chrono>
	  </div>
	<Footer/>
	  </>
  );
}
