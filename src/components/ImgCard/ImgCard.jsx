import React from 'react';
import "./ImgCard.css";

const ImgCard = props => {

    return (
        <div>
            <img id={props.id} className="img-thumbnail" src={props.imgSrc} alt={props.name} onClick={() => props.setToClicked(props.id)}/><span>{props.id}+{props.clck}</span>
        </div>
    );
}

export default ImgCard;