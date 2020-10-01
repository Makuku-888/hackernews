import React from "react";
//import Header from "./Header";

const DisplayArticle = (props) => {
    return (
        <div>
        <ol className="listContainer">
            {props.open.title.map(el =>{
                return <li>
                <a href={el.url} target="blank"><span className="title">{el.title}</span></a><br/>
                <span className="author">by: {el.author}</span>
                <span className="points">Points: {el.points}</span>
                <span className="comments">Comments: {el.comment_text}</span>
                </li>
            })}
        </ol>
        </div>

    );
}

export default DisplayArticle;


