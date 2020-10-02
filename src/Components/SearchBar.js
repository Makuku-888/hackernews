import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = (props) => {
    const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.children[0].value) {
        alert("please enter some keyword!");
        return;
    }
    console.log("inital query:", props.query);
    const newQuery = e.target.children[0].value;
    props.setquery(newQuery);
    console.log("url was reset with:", newQuery);
    e.target.children[0].value = "";
    };

    return (
        <div className="search-container">
            <form className="search" onSubmit={handleSubmit}>
                <input className="input" type="text" placeholder="search news"></input>
                <button className="searchButton"><FaSearch /></button>
            </form>
      </div>

    );
};

export default SearchBar;