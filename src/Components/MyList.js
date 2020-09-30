import React from 'react';


const data = [
    
    {
        created_at: "2017-01-18T14:32:16.000Z",
        title: "What I Wish I'd Known About Equity Before Joining a Unicorn",
        url: "https://gist.github.com/yossorion/4965df74fd6da6cdc280ec57e83a202d",
        author: "yossorion",
        points: 1382,
        story_text: null,
        comment_text: null,
        num_comments: 558,
        story_id: null,
        story_title: null,
        story_url: null,
        parent_id: null,
        created_at_i: 1484749936,
        relevancy_score: 7205,
        _tags: [
        "story",
        "author_yossorion",
        "story_13426494"
        ],
        objectID: "13426494",
        _highlightResult: {
        title: {
        value: "What I Wish I'd Known About Equity Before Joining a <em>Unicorn</em>",
        matchLevel: "full",
        fullyHighlighted: false,
        matchedWords: [
        "unicorn"
        ]
        },
        url: {
        value: "https://gist.github.com/yossorion/4965df74fd6da6cdc280ec57e83a202d",
        matchLevel: "none",
        matchedWords: [ ]
        },
        author: {
        value: "yossorion",
        matchLevel: "none",
        matchedWords: [ ]
        }
        }
        },

        {
            created_at: "2017-01-18T14:32:16.000Z",
            title: "What I Wish I'd Known About Equity Before Joining a Unicorn",
            url: "https://gist.github.com/yossorion/4965df74fd6da6cdc280ec57e83a202d",
            author: "yossorion",
            points: 1382,
            story_text: null,
            comment_text: null,
            num_comments: 558,
            story_id: null,
            story_title: null,
            story_url: null,
            parent_id: null,
            created_at_i: 1484749936,
            relevancy_score: 7205,
            _tags: [
            "story",
            "author_yossorion",
            "story_13426494"
            ],
            objectID: "13426494",
            _highlightResult: {
            title: {
            value: "What I Wish I'd Known About Equity Before Joining a <em>Unicorn</em>",
            matchLevel: "full",
            fullyHighlighted: false,
            matchedWords: [
            "unicorn"
            ]
            },
            url: {
            value: "https://gist.github.com/yossorion/4965df74fd6da6cdc280ec57e83a202d",
            matchLevel: "none",
            matchedWords: [ ]
            },
            author: {
            value: "yossorion",
            matchLevel: "none",
            matchedWords: [ ]
            }
            }
            },

            {
                created_at: "2017-01-18T14:32:16.000Z",
                title: "What I Wish I'd Known About Equity Before Joining a Unicorn",
                url: "https://gist.github.com/yossorion/4965df74fd6da6cdc280ec57e83a202d",
                author: "yossorion",
                points: 1382,
                story_text: null,
                comment_text: null,
                num_comments: 558,
                story_id: null,
                story_title: null,
                story_url: null,
                parent_id: null,
                created_at_i: 1484749936,
                relevancy_score: 7205,
                _tags: [
                "story",
                "author_yossorion",
                "story_13426494"
                ],
                objectID: "13426494",
                _highlightResult: {
                title: {
                value: "What I Wish I'd Known About Equity Before Joining a <em>Unicorn</em>",
                matchLevel: "full",
                fullyHighlighted: false,
                matchedWords: [
                "unicorn"
                ]
                },
                url: {
                value: "https://gist.github.com/yossorion/4965df74fd6da6cdc280ec57e83a202d",
                matchLevel: "none",
                matchedWords: [ ]
                },
                author: {
                value: "yossorion",
                matchLevel: "none",
                matchedWords: [ ]
                }
                }
                }
]


const List = (props) => {
console.log(props.data)
    return (
        <div>
        <ul className="listContainer">
            {data.map(elemenet =>{
                return <li><span className="author">{elemenet.author}</span>
                <span className="points">Points: {elemenet.points}</span><br/>
                <span className="date">{elemenet.created_at}</span><br/>
                <span className="title">{elemenet.title}</span></li>
            })}
        </ul>
        </div>

    );
}


export default List;