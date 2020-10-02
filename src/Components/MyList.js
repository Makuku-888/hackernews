import React from 'react';
import { FaDivide } from 'react-icons/fa';

const List = (props) => {
    console.log("PROPS", props.content)
    return (

        <div>
        {(props.query !== "blockchain" && !props.content.length) && (
            <div className="no-content">
                <span>
            No items are matching your search! Please try another keyword.
                </span>
            </div>
        )}
        {props.error && <div>Something did not work out here...</div>}        
        <ol className="listContainer">
            {props.content.filter(el => el.title).map((el) => {
                return (
                <li key={el.objectID}>
                    <span className="date">{el.created_at.slice(0, el.created_at.indexOf("T") )}</span>
                    <a href={el.url} target="blank"><span className="title">{el.title}</span></a><br/>
                    <span className="author">by: {el.author}</span>
                    <span className="points">Points: {el.points}</span>
                </li>
                );
            })
            }
        </ol>
        </div>
    );
}


export default List;