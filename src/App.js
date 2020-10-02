import React, { useState , useEffect } from 'react';
import Header  from "./Components/Header";
import SearchBar from "./Components/SearchBar"
import List from './Components/MyList';
import Footer from './Components/Footer';
import './App.css';
import AwesomeComponent from './Components/AwesomeComponent'

const INITIAL_QUERY = "blockchain";
const LIMIT = "&hitsPerPage=20";

function App() {

  const [content, setContent] = useState([]);
  const [query, setQuery] = useState(INITIAL_QUERY);
  const [spinner, setSpinner] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [auto, setAuto] = useState(false);
  
  useEffect(() => {
    setSpinner(true);
    setError(false);
    setLoading(true);
    const getData = () => {
      fetch(`https://hn.algolia.com/api/v1/search?query=${query}${LIMIT}`)
        .then((res) => res.json())
        .then(data => {
          setContent(data.hits);
          setSpinner(false);
        })
        .catch(() => setError(true));
    };
    if (!auto) {
      getData();
      setAuto(true);
    } else {
      setInterval(() => getData(), 300000);
    }
    setLoading(false);
  }, [query, auto]);
    
  return (
    <>
     <Header />
     <SearchBar setquery={setQuery} query={query} />
     <AwesomeComponent loading={spinner}/>
     {!spinner && <List content={content} loading={loading} error={error} query={query} />}
     <Footer />
    </>
  );
}

export default App;
