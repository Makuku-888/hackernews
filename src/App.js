import React,{useState,useEffect} from 'react';
import './App.css';
import Header  from "./Components/Header";
import List from './Components/MyList';
import Footer from './Components/Footer';


function App() {
  return (
    <>
     <Header />
     <h1>Hackernews Clone</h1>
     <List />
     <Footer />
    </>
  );
}

export default App;
