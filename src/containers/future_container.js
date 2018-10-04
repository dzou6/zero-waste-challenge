import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Icon } from 'antd';
import PredictLineChart from '../components/predict_line_chart';
import For_health from '../components/for_health';
import LoadingPanel from '../components/loading_panel';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//componet to show future information for user
class FutureContainer extends Component {
    //render function to display the future page
    render() {
        const { TabPane } = Tabs;
        const { stories } = this.props; 

        if(!stories[1]) {
            return <LoadingPanel />
        }

        let lineChartData = _.cloneDeep(stories[1].predictData);
        const fishData = _.cloneDeep(stories[1].reefFishData);
        let totalFishWeight = 0;
        let avgFish = 0;
        for (let i = 0;i < fishData.length; i++){
            totalFishWeight += fishData[i].total      
        }
        avgFish = totalFishWeight/fishData.length;
        const fishAvgWeight = avgFish * 1400000000 / 0.25 / 0.05 / 0.05 / 3500000000000;
        //predict data
        for (let i = 2018; i <= 2060; i++) {
            lineChartData.push({
                year: i,
                plasticInOcean: Math.round(3003.2 * i - 2480 * i* i + 1.200 * i* i * i- 6679322.7)
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
                    <TabPane tab={<span><FontAwesomeIcon icon="user-md"/>  For your health</span>} key="2">
                        <div style={{textAlign: "center", color:"#18bc9c", fontWeight: "bold", fontSize: "1.3em"}}>
                            Do you know what kind of disease might be caused by keep using plastic?
                        </div>
                        <For_health></For_health>
                    </TabPane>
                    <TabPane tab={<span><Icon type="line-chart" />Prediction</span>} key="1">
                        <div style={{textAlign: "center", color:"#18bc9c", fontWeight: "bold", fontSize: "1.3em"}}>
                            Ocean Plastic Waste VS Fish in Asutralia
                        </div>
                        <PredictLineChart data={lineChartData} fishAvgWeight={fishAvgWeight}></PredictLineChart>
                    </TabPane>
                    <TabPane tab={<span><Icon type="info-circle" />About</span>} key="3">
                        <div style={{ backgroundColor: '#17a2b8', color: "#fff", margin: 20, padding: 10, fontSize: "1.2em", borderRadius: 10, height: 518 }}>
                            <p style={{ fontSize: "1.2em" }}>About Zero-waste Challenge </p>
                            <p style={{marginTop: 50}}>
                                <img style={{ float: 'right' }} src={require('../static/logo.png')} alt="logo" />
                                Zero-Waste Challenge aims to educate kids on the war on plastic waste and we value the trust of 
                                Australian families in choosing us to help their kids develop zero-waste habits.

                            </p>
                            <p>The Zero-Waste Challenges website is designed to attract 6-8 years old children. It provides 
                                interactive games for children to understand that plastic can affect marine animals and their health. 
                                So, Children can learn through games and alternatively develop a zero-waste habit towards plastics and 
                                influence grow-ups. We aim to fix problems from root!

                            </p>
                            <p>
                            Zero-Waste Challenge aims to progress towards the goal of motivating children to develop zero-waste habits. 
                            Children can interact with animations, games, calculators and quizzes to understand the urgency of developing 
                            zero-waste habits towards plastic and gain motivation. Parents can help kids develop these habits by providing 
                            them with information provided on the website and giving rewards to children if they achieve their daily goal on developing zero-waste habit.
                            </p>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

//map application state for stories
const mapStateToProps = (state) => {
    return { stories: state.stories }
}

//export future container
export default connect(
    mapStateToProps, null
)(FutureContainer);
