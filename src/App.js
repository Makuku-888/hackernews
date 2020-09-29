import React,{useState,useEffect} from 'react';
import './App.css';
import List from './Components/MyList';

function App() {
  const [content,setContent] = useState(null);

useEffect(() => {
fetch("http://hn.algolia.com/api/v1/search?tags=front_page")
.then(res => res.json())
.then(data => setContent());})
// .catch(()=>console.log("Not work"))


  return (
    <>
     <h1>Hackernews Clone</h1>
     <List data={content}/>
    </>
  );
}

export default App;
