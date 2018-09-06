import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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