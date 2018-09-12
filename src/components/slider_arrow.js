import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//arrow circle left to display for previous icon
export const PrevArrow = (props) => {
    const { className, onClick } = props
    return (
        <div 
            className={className}
            onClick={onClick}
        >
            <FontAwesomeIcon
                icon="arrow-circle-left"
                color={props.color? props.color: "#fff"}
                size="2x"
            />
        </div>
    );
  }
  
//arrow circle right to display for next icon
export const NextArrow = (props) => {
    const { className, onClick } = props
    return (
        <div 
            className={className}
            onClick={onClick}
        >
            <FontAwesomeIcon
                icon="arrow-circle-right"
                color={props.color? props.color: "#fff"}
                size="2x"
            />
        </div>
    );
  }