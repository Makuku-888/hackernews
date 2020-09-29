import React from 'react';
import './App.css';
import List from './Components/MyList';
import Header  from "./Components/Header";

function App() {
  return (
    <>
     <Header />
     <h1>Hackernews Clone</h1>
     <List />
    </>
  );
}

export default App;
