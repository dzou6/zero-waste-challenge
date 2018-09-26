import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Layout } from 'antd';
import {Link} from 'react-router-dom';
import NavMenuItem from './nav_menu_item';

class HelpParents extends Component {







    
    render() {
        
        const { Header } = Layout;
        
        return (
            <div>
                <div style={{flex: 1, display: 'flex', justifyContent: 'space-evenly'}}>
                    <img src={require('../static/help_your_parents/child.svg')} alt="reusable straws"/>
                    <img src={require('../static/help_your_parents/mom.svg')} alt="reusable bags"/>
                </div>
                <div style={{flex: 1, display: 'flex', justifyContent: 'space-between'}}>
                    <img src={require('../static/help_your_parents/Card_01.svg')} alt="reusable straws"/>
                    <img src={require('../static/help_your_parents/Card_02.svg')} alt="reusable bags"/>
                    <img src={require('../static/help_your_parents/Card_03.svg')} alt="reusable boxs"/>
                </div>
            </div>
        );
    }
}

export default HelpParents;