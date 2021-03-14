import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={Services} />
          <Route path='/projects' component={Products} />
          <Route path='/contact' component={SignUp} />
	  <Route path='/instagram' component={() => { 
     window.location.href = 'https://www.instagram.com/aandrija01_/'; 
     return null;
	  }}/>


	  <Route path='/youtube' component={() => { 
     window.location.href = 'https://www.youtube.com/channel/UCKDsCTjAFEhdzGgrT-wwzEQ'; 
     return null;
	  }}/>

	  <Route path='/github' component={() => { 
     window.location.href = 'https://github.com/andrijaJ01'; 
     return null;
	  }}/>


	  <Route path='/twitter' component={() => { 
     window.location.href = 'https://twitter.com/andrijaj01'; 
     return null;
	  }}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
