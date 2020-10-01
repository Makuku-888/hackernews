import React from "react";

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
        <form onSubmit={handleSubmit}>
            <input className="search" type="text"></input>
            <button className="search">search topic</button>
        </form>
    </div>
    );
};

export default SearchBar;