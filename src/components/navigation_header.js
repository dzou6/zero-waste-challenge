import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Layout, Menu } from 'antd';
import NavMenuItem from './nav_menu_item';

class NavigationHeader extends Component {
  render() {
    const { pathname } = this.props.location;
    const { Header } = Layout;
    // let rootPath = pathname.split('/')[1];
    // if(rootPath && rootPath === 'story') {
    //   rootPath = '/stories';
    // } else {
    //   rootPath = pathname;
    // }


    return (
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo">
          Zero-Waste Challenge
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['/']}
          selectedKeys={[pathname]}
          style={{ lineHeight: '64px', float: "right" }}
        >
          <Menu.Item key="/">
            <NavMenuItem routeUrl="/" icon="home" label="Home" iconColor="#f0c24b" />
          </Menu.Item>
          <Menu.Item key="/story/1">
            <NavMenuItem routeUrl="/story/1" icon="book-reader" label="Story" iconColor="#ea7066" />
          </Menu.Item>
          <Menu.Item key="/habit-tracker">
            <NavMenuItem routeUrl="/habit-tracker" icon="tasks" label="Challenge" iconColor="#a597e7" />
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default withRouter(NavigationHeader);