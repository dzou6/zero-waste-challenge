import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Tooltip } from 'antd';

// component to render each menu item
class NavMenuItem extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
            nav_title:""
        }
    }

    onMouseEnter() {
        this.setState({isHovered: true});
    }

    onMouseLeave() {
        this.setState({isHovered: false});
    }

    render() {
        const {btnImg, routeUrl, isActive,title} = this.props;
        return (
            <Link 
                to={routeUrl} 
                onMouseEnter={() => this.onMouseEnter()}
                onMouseLeave={() => this.onMouseLeave()}
                onClick={() => this.props.onClick(routeUrl)}
            >
                <Tooltip title={title}>
                    <img width={this.state.isHovered || isActive? 80: 65} src={btnImg} alt="bar btn"/>
                </Tooltip>
            </Link>
        );
    }
}

export default NavMenuItem;