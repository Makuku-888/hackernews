import React, { useState , useEffect } from 'react';
import Header  from "./Components/Header";
import SearchBar from "./Components/SearchBar"
import List from './Components/MyList';
import Footer from './Components/Footer';
import './App.css';
import AwesomeComponent from './Components/AwesomeComponent'
import DisplayArticle from './Components/DisplayArticle'

const INITIAL_VAL = "https://hn.algolia.com/api/v1/search?query=redux&hitsPerPage=20";

// const INITIAL_URL = "https://hn.algolia.com/api/v1/search?query=";
// const INITIAL_QUERY = "redux";
// const LIMIT = "&hitsPerPage=5";

function App() {

  const [content, setContent] = useState([]);
  const [url, setUrl] = useState(INITIAL_VAL);
  const [spinner,setSpinner] = useState(false);
  const [selectStory, setSelectStory] = useState([]);

  useEffect(() => {
    // start spinner
    setSpinner(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setContent(data.hits);
        // stop spinner
        setSpinner(false);

      })
      .catch(e => console.log("oh no! sth went wrong...", e))
    },[url])

    useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setSelectStory(data.hits.id)
      })
    },[url])

    
  return (
    <>
     <Header />
     <SearchBar seturl={setUrl} url={url} />
     <AwesomeComponent loading={spinner}/>
     {!spinner && <List content={content}/>}
     <Footer />
    </>
  );
}

export default App;
