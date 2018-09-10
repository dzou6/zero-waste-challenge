import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

const NavMenuItem = (props) => {
    return (
        <Link to={props.routeUrl} 
            style={{ textDecoration: 'none' ,display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
            <div style={{height: '32px', lineHeight: '45px', fontSize: '20px'}}>
                <FontAwesomeIcon color={props.iconColor} icon={props.icon} />
            </div>
            <div style={{height: '32px', lineHeight: '20px'}}>
                {props.label}
            </div>
        </Link>
    );
}

export default NavMenuItem;