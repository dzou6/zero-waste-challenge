import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

//function component to render each menu item
const NavMenuItem = (props) => {
    return (
        <Link to={props.routeUrl} 
            style={{ textDecoration: 'none' ,display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
            <div style={{height: '43px', lineHeight: '98px'}}>
                <FontAwesomeIcon color={props.iconColor} icon={props.icon} size="3x"/>
            </div>
            <div style={{height: '43px', lineHeight: '55px'}}>
                {props.label}
            </div>
        </Link>
    );
}

export default NavMenuItem;