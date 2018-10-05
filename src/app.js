import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Layout, Modal, Button, Input, Icon, Tag } from 'antd';


import NavigationHeader from './components/navigation_header';
import StoriesGridComponent from './containers/stories_grid';
import StoryBoxComponent from './containers/story_box';
import Home from './components/home';
import HabitTrackerDetail from './containers/habit_tracker_detail';
import Quiz from './containers/quiz';
import Calculator from './components/calculator';
import HelpYourParents from './containers/help_parents';
import NavPanelComponent from './components/nav_panel';
import FutureContainer from './containers/future_container';
import About from './components/about';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: true,
            password: '',
            errMsg: ''
        };
    }

    handleOk() {
        if (this.state.password === '123456') {
            this.setState({ modalVisible: false });
        } else {
            this.setState({ password: '' });
            this.setState({ errMsg: 'Error! Wrong password. Please retry!' });
        }
    }

    renderErrMsg() {
        return this.state.errMsg !== '' ? (
            <Tag color="red">{this.state.errMsg}</Tag>
        ) : null;
    }

    render() {
        const { Content, Footer } = Layout;
        return (
            <Layout>
                {this.props.location.pathname !== '/'? <NavigationHeader />: null}
                <Content className="bg-primary text-white text-center"
                    style={{ minHeight: this.props.location.pathname !== '/'? 'calc(100vh - 113px)' : 'calc(100vh - 33px)', marginTop: this.props.location.pathname !== '/'? 80: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Switch>
                        <Route path="/about" component={About}/>
                        <Route path="/for-your-future" component={FutureContainer}/>
                        <Route path="/help-your-parents" component={HelpYourParents}/>
                        <Route path="/habit-tracker" component={HabitTrackerDetail} />
                        <Route path="/calculator" component={Calculator} />
                        <Route path="/story/:id" component={StoryBoxComponent} />
                        <Route path="/stories" component={StoriesGridComponent} />
                        <Route path="/quiz" component={Quiz} />
                        <Route path="/home" component={Home} />
                        <Route path="/" component={NavPanelComponent} />
                    </Switch>
                </Content>
                <Footer style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 33, padding: 0}}>
                    Zero-Waste Challenge ©{(new Date()).getFullYear()}
                </Footer>
                <Modal
                    closable={false}
                    centered={true}
                    title={null}
                    visible={false}
                    maskStyle={{ backgroundColor: '#18BC9C' }}
                    footer={[<Button key="submit" type="primary" onClick={() => this.handleOk()}>
                        Submit
                            </Button>]}>
                    {this.renderErrMsg()}
                    <Input
                        value={this.state.password}
                        onChange={(e) => this.setState({ password: e.target.value })}
                        type="password"
                        onPressEnter={() => this.handleOk()}
                        addonBefore={<Icon type="lock" theme="outlined" />}
                        placeholder="enter your password here!" />
                </Modal>
            </Layout>
        );
    }
}

export default withRouter(App);