import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

//function component to render each menu item
const NavMenuItem = (props) => {
    return (
        <Link to={props.routeUrl} 
            style={{ textDecoration: 'none' ,display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
            <div style={{height: '50px', lineHeight: '120px'}}>
                <FontAwesomeIcon color={props.iconColor} icon={props.icon} size="4x"/>
            </div>
            <div style={{height: '50px', lineHeight: '70px'}}>
                {props.label}
            </div>
        </Link>
    );
}

export default NavMenuItem;