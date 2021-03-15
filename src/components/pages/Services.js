import React,{useState,useEffect} from 'react';
import '../../App.css';
import Footer from '../Footer';
import { Chrono } from "react-chrono";


export default function Services() {

	
  const [data,setData]= useState({});
  const [title,setTitle]=useState(localStorage.getItem('title') || '');
  const [desc,setDesc]=useState(localStorage.getItem('description') || '');
  const get_data = async () =>{
  const response= await fetch('http://127.0.0.1:8000/about');
  //const response= await fetch('https://fastapibackend.herokuapp.com/about');
  const data= await response.json();
  const title= data.title;
  const desc= data.description;
  setDesc(desc);
  setTitle(title);


  if(localStorage.getItem('title')!==title){
      localStorage.setItem('title','')
    }
  if(localStorage.getItem('description')!==desc){
      localStorage.setItem('description','')
    }
  }
  useEffect(()=>{
    get_data();

    localStorage.setItem('title',title)
    localStorage.setItem('description',desc)

    }
              ,[title,desc]
    );
  return (
	  <>
	  <h1 className='services'>{title}</h1>
	  <div className='container'>
<Chrono mode="VERTICAL" hideControls theme={{primary: "#242424", secondary: "#222222" , cardForeColor: "violet" }} allowDynamicUpdate>
    <div>
      <p className='tline-txt'>{desc.split('$')[0]}</p>
    </div>
    <div>
      <p className='tline-txt'>{desc.split('$')[1]}</p>
    </div>
  </Chrono>
	  </div>
	<Footer/>
	  </>
  );
}
