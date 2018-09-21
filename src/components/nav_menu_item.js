import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// component to render each menu item
class NavMenuItem extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
        }
    }

    onMouseEnter() {
        this.setState({isHovered: true});
    }

    onMouseLeave() {
        this.setState({isHovered: false});
    }

    render() {
        const {btnImg, routeUrl, isActive} = this.props;
        return (
            <Link 
                to={routeUrl} 
                onMouseEnter={() => this.onMouseEnter()}
                onMouseLeave={() => this.onMouseLeave()}
                onClick={() => this.props.onClick(routeUrl)}
            >
                <img width={this.state.isHovered || isActive? 80: 65} src={btnImg} alt="bar btn"/>
            </Link>
        );
    }
}

export default NavMenuItem;