import React from 'react';

const ScoreBoard = props => (
        <div className="jumbotron">
            <h1>Hello</h1>
            <h2>Youre Current Score: {props.score} </h2>
            <h2>CUrrent High Score: {props.topScore} </h2>
        </div>
    );

export default ScoreBoard;