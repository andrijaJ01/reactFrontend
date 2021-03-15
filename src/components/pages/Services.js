import React,{useState,useEffect} from 'react';
import '../../App.css';
import '../Cards.css';
import CardItem from '../CardItem';
import Footer from '../Footer';

export default function Services() {
  const [data,setData]= useState({});
  const [title,setTitle]=useState(localStorage.getItem('title') || '');
  const [desc,setDesc]=useState(localStorage.getItem('description') || '');
  const get_data = async () =>{
    //const response= await fetch('http://127.0.0.1:8000/about');
    const response= await fetch('https://fastapibackend.herokuapp.com/about');
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
	  {desc}

	  </div>
	<Footer/>
	  </>
  );
}
