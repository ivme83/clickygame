import React from 'react';
import "./ScoreBoard.css";

const ScoreBoard = props => (
        <div className="navbar fixed-top">
            <ul className="navbar-nav">
                <li className="nav-item"><h1>Top Score: {props.topScore}</h1></li>
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item"><h1>Current Score: {props.score}</h1></li>
            </ul>
        </div>
    );

export default ScoreBoard;