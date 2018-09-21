import React from 'react';
import { Link } from 'react-router-dom';

const NavPanelComponent = (props) => {
    return (
        <div style={{display: 'flex', minHeight: 'calc(100vh - 33px)' ,flex: 1, flexDirection: 'column'}}>
            <div style={{height: 70, background: '#055077', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30}}>
                <span>
                    <img width="90" src={require('../static/logo.png')} alt='logo' />
                </span>
                Zero-Waste Challenge
            </div>
            <div style={{display: 'flex',flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'column',backgroundImage: `url(${require('../static/home/bg.svg')})`, height: 665, width: 1024}}>
                    <div style={{display: 'flex', flex: 1, alignItems: 'center' , justifyContent: 'space-evenly'}}>
                        <Link to="/home">
                            <img src={require('../static/nav_item/btn_navi_01.svg')} alt="nav_01"/>
                        </Link>
                        <Link to="/story/1">
                            <img src={require('../static/nav_item/btn_navi_02.svg')} alt="nav_02"/>
                        </Link>
                        <Link to="/calculator">
                            <img src={require('../static/nav_item/btn_navi_03.svg')} alt="nav_03"/>
                        </Link>
                    </div>
                    <div style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'space-evenly'}}>
                        <Link to="/quiz">
                            <img src={require('../static/nav_item/btn_navi_04.svg')} alt="nav_04"/>
                        </Link>
                        <Link to="/habit-tracker">
                            <img src={require('../static/nav_item/btn_navi_05.svg')} alt="nav_05"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavPanelComponent;
