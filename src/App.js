import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Mid from './components/Mid';
import React from 'react';
import About from './components/About';
// import { Audio } from  'react-loader-spinner'

// import {Sugar} from 'react-preloaders';
function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <Mid/>
      <About/>
      {/* <Sugar/> */}
    </div>
  );
}

export default App;
