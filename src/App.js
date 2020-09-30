import React, { useState , useEffect } from 'react';
import Header  from "./Components/Header";
import SearchBar from "./Components/SearchBar"
import List from './Components/MyList';
import Footer from './Components/Footer';
import './App.css';

const INITIAL_VAL = "https://hn.algolia.com/api/v1/search?query=redux&hitsPerPage=20";

// const INITIAL_URL = "https://hn.algolia.com/api/v1/search?query=";
// const INITIAL_QUERY = "redux";
// const LIMIT = "&hitsPerPage=5";

function App() {

  const [content, setContent] = useState([]);
  const [url, setUrl] = useState(INITIAL_VAL);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setContent(data.hits))
      .catch(e => console.log("oh no! sth went wrong...", e))
  }, [url])

  return (
    <>
     <Header />
     <SearchBar seturl={setUrl} url={url} />
     <List content={content}/>
     <Footer />
    </>
  );
}

export default App;
