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
        for (let i = 2018; i <= 2100; i++) {
            lineChartData.push({
                year: i,
                plasticInOcean: Math.round(3448.2 * i -6679322.7)
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
                        <div style={{textAlign: "center", color:"#18bc9c", fontWeight: "bold", fontSize: "1.3em", marginBottom: "1.5em"}}>
                            If we don't take actions now, the amount of plastic will surpass the number of fish in the future!
                        </div>
                        <PredictLineChart data={lineChartData} fishAvgWeight={fishAvgWeight}></PredictLineChart>
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
