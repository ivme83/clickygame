import React from 'react';
import "./Header.css";
import Background from '../imgs/triangle-stroke.png';

let sectionStyle = {
    backgroundImage: `url(${Background})`
};

const Header = () => <div className="click-header" style={ sectionStyle }><h1>Clicky Game</h1></div>;

export default Header;