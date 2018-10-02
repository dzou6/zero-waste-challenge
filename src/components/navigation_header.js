import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Layout, Tooltip } from 'antd';
import {Link} from 'react-router-dom';
import NavMenuItem from './nav_menu_item';

const menuItems = [
  {
    id: 'home',
    url: '/home',
    title:'What kind of waste is in the ocean?',
    imgFile: require('../static/nav_bar/bar_btn_1.svg')
  },
  {
    id: 'story',
    url: '/story/1',
    title:'How do your habits affect the ocean?',
    imgFile: require('../static/nav_bar/bar_btn_2.svg')
  },
  {
    id: 'calculator',
    url: '/calculator',
    title:'How many animals can you save?',
    imgFile: require('../static/nav_bar/bar_btn_3.svg')
  },
  {
    id: 'quiz',
    url: '/quiz',
    title:'Test your knowledge about habits',
    imgFile: require('../static/nav_bar/bar_btn_4.svg')
  },
  {
    id: 'habit-tracker',
    url: '/habit-tracker',
    title:'Track your habits\'s progress',
    imgFile: require('../static/nav_bar/bar_btn_5.svg')
  },
  {
    id: 'help-your-parents',
    url: '/help-your-parents',
    title:'Help your parents',
    imgFile: require('../static/nav_bar/bar_btn_6.svg')
  },
  {
    id: 'for-your-future',
    url: '/for-your-future',
    title:'For your future',
    imgFile: require('../static/nav_bar/bar_btn_7.svg')
  }
];

class NavigationHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: props.location.pathname
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.onRouteChanged(this.props.location.pathname);
    }
  }

  onRouteChanged(url) {
    this.setState({activeMenuItem: url});
  }

  onMenuItemClick(url) {
    this.setState({activeMenuItem: url});
  }

  renderMenuItems() {
    return menuItems.map(menuItem => {
        return (
          <NavMenuItem 
            key={menuItem.id} 
            isActive={this.state.activeMenuItem === menuItem.url}
            title={menuItem.title}
            onClick={(url) => this.onMenuItemClick(url)}
            routeUrl={menuItem.url} 
            btnImg={menuItem.imgFile} 
          />
        );
    })
  }

  //render the header componet of web app, allowing menu navigation
  render() {
    
    const { Header } = Layout;
    
    return (
      <Header style={{ padding: 0, position: 'fixed', display: 'flex', alignItems: 'center', zIndex: 10, width: '100%', height: 80, backgroundImage: `url(${require('../static/nav_bar/bar.svg')})` }}>
        <Tooltip title="Navigation panel" placement="bottom">
          <div style={{width: 120}}>
            <Link to='/'>
              <img src={require('../static/nav_bar/logo.svg')} alt="bar log"/>
            </Link>
          </div>
        </Tooltip>
        <div style={{flex: 1, display: 'flex', justifyContent: 'space-evenly'}}>
          {this.renderMenuItems()}
        </div>
      </Header>
    );
  }
}

export default withRouter(NavigationHeader);