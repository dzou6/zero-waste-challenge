import React, { Component } from 'react';
import { Tabs, Icon } from 'antd';

class FutureContainer extends Component {
    render() {
        const {TabPane} = Tabs;
        return (
            <div style={{
                width: "900px",
                textAlign: "left",
                padding: "10px"
            }}>
                <Tabs 
                    style={{background: "#fff", padding: 10, borderRadius: 8,height: 608}}
                    type="card"
                >
                    <TabPane tab={<span><Icon type="line-chart" />Prediction</span>} key="1">Content of Tab Pane 1</TabPane>
                    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                </Tabs>
            </div>
        );
    }
}

export default FutureContainer;
