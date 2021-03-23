import React ,{useState,useEffect} from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  const [data,setData]= useState({});
  const [text,setText]=useState(localStorage.getItem('text') || '');
  const [name,setName]=useState(localStorage.getItem('name') || '');
  const get_data = async () =>{
   // const response= await fetch('http://127.0.0.1:8000/');
   const response= await fetch('https://fastapibackend.herokuapp.com/');
    const data= await response.json();
    const name= data.name;
    const text= data.text;
    setText(text);
    setName(name);

    if(localStorage.getItem('text')!==text){
      localStorage.setItem('text','')
    }
    if(localStorage.getItem('name')!==name){
      localStorage.setItem('name','')
    }

  }
  useEffect(()=>{
    get_data();

    localStorage.setItem('name',name)
    localStorage.setItem('text',text)

    }
              ,[text,name]
    );

  return (
    <div className='hero-container'>
      <h1>{name}</h1>
      <p>{text}</p>
      <a href="#cards" className="button">LEARN MORE</a>

    </div>
  );
}

export default HeroSection;
