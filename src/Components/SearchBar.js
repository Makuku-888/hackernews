import React from "react";

const SearchBar = (props) => {

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("inital url", props.url);
      const newUrl =
        props.url.slice(0, props.url.indexOf("=") + 1) +
        e.target.children[0].value + "&hitsPerPage=20";
      props.seturl(newUrl);
      console.log("url was reset with: ", newUrl);
    };
  
    return (
        <div className="search-container">
            <form className="search" onSubmit={handleSubmit}>
                <input type="text"></input>
                <button>search topic</button>
            </form>
      </div>
    );
  };

export default SearchBar;