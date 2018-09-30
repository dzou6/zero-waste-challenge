import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Icon } from 'antd';
import PredictLineChart from '../components/predict_line_chart';
import For_health from '../components/for_health';
import LoadingPanel from '../components/loading_panel';
import _ from 'lodash';

class FutureContainer extends Component {
    render() {
        const { TabPane } = Tabs;
        const { stories } = this.props; 

        if(!stories[1]) {
            return <LoadingPanel />
        }

        let lineChartData = _.cloneDeep(stories[1].predictData);

        const fishAvgWeight = 856911.875 * 1400000000 / 0.25 / 0.05 / 0.05 / 3500000000000;
        //predict data
        for (let i = 2018; i <= 2100; i++) {
            lineChartData.push({
                year: i,
                plasticInOcean: Math.round(3448.2 * i - 6679322.7)
            });
        }

        return (
            <div style={{
                width: "900px",
                textAlign: "left",
                padding: "10px"
            }}>
                <Tabs
                    style={{ background: "#fff", padding: 10, borderRadius: 8, height: 608 }}
                    type="card"
                >
                    <TabPane tab={<span><Icon type="line-chart" />Prediction</span>} key="1">
                        <div style={{textAlign: "center", color:"#18bc9c", fontWeight: "bold", fontSize: "1.3em"}}>
                            Ocean Plastic Waste VS Fish in Asutralia
                        </div>
                        <PredictLineChart data={lineChartData} fishAvgWeight={fishAvgWeight}></PredictLineChart>
                    </TabPane>
                    <TabPane tab={<span><Icon type="fa-user-md" />For your health</span>} key="2">
                        <div style={{textAlign: "center", color:"#18bc9c", fontWeight: "bold", fontSize: "1.3em"}}>
                            Do you know what kind of disease might be caused by keep using plastic? Click the circle on body!
                        </div>
                        <For_health></For_health>
                    </TabPane>
                    <TabPane tab={<span><Icon type="info-circle" />About</span>} key="3">
                        <div style={{ backgroundColor: '#17a2b8', color: "#fff", margin: 20, padding: 10, fontSize: "1.2em", borderRadius: 10, height: 518 }}>
                            <p style={{ fontSize: "1.2em" }}>About Zero-waste Challenge </p>
                            <p style={{marginTop: 50}}>
                                <img style={{ float: 'right' }} src={require('../static/logo.png')} alt="logo" />
                                Zero-waste Challenge cares about kids education on the war on plastic waste and we value the trust of
                                 Australian families choosing us to help their kids develop zero-waste habit.
                            </p>
                            <p>The Zero-waste Challenge website is designed to attract 6 - 8 years old children.
                                It provides interactive games for children to know how they use plastic can affect marine animals and their health.
                                So children can learn by play and alternativaly develop a zero-waste habit towards plastics and influence grow-ups.
                                Fix problem from root!
                            </p>
                            <p>
                            Zero-waste Challenge provides a progress towards the goal of motivating children to develop zero-waste habit. Children
                             can play with animation, game, calculator and quiz to understand the urgency of developing zero-waste habit towards 
                             plastic and gain motivation. Parents can help kids develop the habit by telling them some information provided on the 
                             website and giving rewards to children if they achieve their daily goal.
                            </p>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { stories: state.stories }
}

export default connect(
    mapStateToProps, null
)(FutureContainer);
