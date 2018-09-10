import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { connect } from 'react-redux';
import { getAllStories } from '../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import {withRouter} from 'react-router';

class StoriesSideBar extends Component {

    componentDidMount() {
        this.props.getAllStories();
    }

    renderStories() {
        
        return _.map(this.props.stories, (story) => {
            return (
                <Menu.Item key={story.id}>
                    <Link to={`/story/${story.id}`}>
                        {story.title}
                    </Link>
                </Menu.Item>
            );
        });
    }

    render() {
        const {Sider} = Layout;
        const {id} = this.props.match.params;
        const menuSelectedKeys = id? id: Object.keys(this.props.stories)[0];
        return (
            <Sider 
                width={200} 
                style={{overflow: 'auto', left: 0, background: '#fff'}}>
                <Menu
                    mode="inline"
                    selectedKeys={[menuSelectedKeys]}
                    style={{ height: '100%', borderRight: 0}}
                >
                    {this.renderStories()}
                </Menu>
            </Sider>
        );
    }
}

const mapStateToProps = (state) => {
    return { stories: state.stories }
}

export default withRouter(
    connect(
        mapStateToProps, 
        { getAllStories }
    )(StoriesSideBar)
);