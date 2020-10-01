import React from 'react';

const List = (props) => {
    return (
        <div>
        {props.query !== "blockchain" && !props.content.length && (
            <div>
            No items are matching your search! Please try another keyword.
            </div>
        )}
        {props.error && <div>Something did not work out here...</div>}
        <ul>
            {props.loading ? (
            <div>Loading data...</div>
            ) : (
            props.content.map((el) => {
                return (
                <li key={el.objectID}>
                    <span className="date">{el.created_at.slice(0, el.created_at.indexOf("T") )}</span>
                    <a href={el.url} target="blank"><span className="title">{el.title}</span></a><br/>
                    <span className="author">by: {el.author}</span>
                    <span className="points">Points: {el.points}</span>
                </li>
                );
            })
            )}
        </ul>
        </div>
    );
}


export default List;