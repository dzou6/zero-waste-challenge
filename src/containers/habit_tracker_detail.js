import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Icon } from 'antd';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import _ from 'lodash';
import HabitRowItem from '../components/habit_row_item';
import { NextArrow, PrevArrow } from '../components/slider_arrow';
import Slider from 'react-slick';

//componet for habit tracker detail
class HabitTrackerDetail extends Component {

    constructor(props) {
        super(props);
        this.instructions = [
            require('../static/habit_good/demo-1.png'),
            require('../static/habit_good/demo-2.png'),
            require('../static/habit_good/bring own cups.png'),
        ];
    }

    //functio to download 0-waste challenge form
    downloadPdf() {
        const input = document.getElementById('imgToPrint');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF({
                    orientation: 'landscape',
                    unit: 'px',
                    format: [1050, 720]
                });
                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save("habit_tracker.pdf");
            })
            ;
    }

    //render the good vs bad habits grid
    renderHabitGrid() {
        const { habits } = this.props;
        return _.map(habits, (habit, index) => {
            return <HabitRowItem key={habit.id} habit={habit} index={index} />
        })
    }

    renderInstructions() {
        return this.instructions.map(instruction => {
            return (
                <div key={instruction}>
                    <img 
                        className="img-fluid mb-5 d-block mx-auto" 
                        src={instruction} 
                        alt="instruction" />
                </div>
            );
        })
    }


    //render habit tracker detail component
    render() {
        const TabPane = Tabs.TabPane;
        const sliderSettings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow color="#18bc9c" />,
            prevArrow: <PrevArrow color="#18bc9c" />
          }
        return (
            <div style={{
                width: "70%",
                textAlign: "left",
                padding: "10px"
            }}>
               <Tabs 
                style={{background: "#fff", padding: 10, borderRadius: 8}}
                type="card">
                <TabPane tab={<span><Icon type="table" />Bad Habit VS Good Habit</span>} key="1">
                    {this.renderHabitGrid()}
                </TabPane>
                <TabPane tab={<span><Icon type="schedule" />Zero-Waste Challenge Form</span>} key="2">
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <button  
                            style={{marginTop: '10px'}}
                            onClick={this.downloadPdf}
                            className="btn btn-primary btn-m font-weight-light mb-1">
                            Download  Here!
                        </button>
                        
                        <div id="imgToPrint">
                            <img width="800px" height="500px" className="img-fluid mx-auto" src={require('../static/habit_good/habit_table_v2.png')} alt="" />
                        </div>
                    </div>
                </TabPane>
                <TabPane tab={<span><Icon type="info-circle-o" />How to Use the Form</span>} key="3">
                    <div style={{width: 540, height: 625, margin: '0 auto'}}>
                    <Slider {...sliderSettings}>
                        {this.renderInstructions()}
                    </Slider>
                    </div>
                </TabPane>
               </Tabs>
            </div>

        );

    }
};

const mapStateToProps = (state) => {
    return { habits: state.habits };
}

export default connect(
    mapStateToProps,
    {}
)(HabitTrackerDetail);