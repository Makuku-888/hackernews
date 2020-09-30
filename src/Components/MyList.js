import React from 'react';

const List = (props) => {
    return (
        <div>
        <ol className="listContainer">
            {props.content.map(el =>{
                return <li>
                <span className="date">{el.created_at.slice(0, el.created_at.indexOf("T") )}</span>
                <a href={el.url} target="blank"><span className="title">{el.title}</span></a><br/>
                <span className="author">by: {el.author}</span>
                <span className="points">Points: {el.points}</span>
                </li>
            })}
        </ol>
        </div>

    );
}


export default List;