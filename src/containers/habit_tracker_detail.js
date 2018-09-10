import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Carousel, Steps, Button, Icon } from 'antd';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import _ from 'lodash';
import HabitRowItem from '../components/habit_row_item';

const Step = Steps.Step;

const steps = [{
    title: 'Bad Habit VS Good Habit',
    icon: 'table'
}, {
    title: 'Zero-Waste Challenge Form',
    icon: 'schedule'
}, {
    title: 'How to Use the Form',
    icon: 'info-circle-o'
}];


class HabitTrackerDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 0
        }
    }

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

    renderHabitGrid() {
        const { habits } = this.props;
        return _.map(habits, (habit, index) => {
            return <HabitRowItem key={habit.id} habit={habit} index={index} />
        })
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    renderContent(step) {
        switch (step.title) {
            case steps[0].title:
                return (
                    <div className="steps-content">
                        {this.renderHabitGrid()}
                    </div>
                );
            case steps[1].title:
                return (
                    <div className="steps-content">
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
                );
            case steps[2].title:
                return (
                    <div className="steps-content">
                        <Carousel autoplay>
                            <div><img className="img-fluid mb-5 d-block mx-auto" src={require('../static/habit_good/demo-1.png')} alt="" /></div>
                            <div><img className="img-fluid mb-5 d-block mx-auto" src={require('../static/habit_good/demo-2.png')} alt="" /></div>
                            <div><img className="img-fluid mb-5 d-block mx-auto" src={require('../static/habit_good/bring own cups.png')} alt="" /></div>
                        </Carousel>
                    </div>
                );
            default: 
                console.warn('page not supprted');
        }
    }

    render() {
        const { current } = this.state;
        return (
            <div style={{
                width: "70%",
                textAlign: "left",
                padding: "10px"
            }}>
                <div className="steps-action">
                    {
                        current > 0
                        && (
                            <Button
                                style={{ fontSize: 20, backgroundColor: '#699def' }}
                                icon="left-circle-o"
                                onClick={() => this.prev()}>
                            </Button>
                        )
                    }
                    {
                        current < steps.length - 1
                        && (
                            <Button
                                style={{ marginLeft: 8, fontSize: 20, backgroundColor: '#699def' }}
                                type="primary"
                                icon="right-circle-o"
                                onClick={() => this.next()}>
                            </Button>)
                    }
                </div>
                <Steps current={current}>
                    {steps.map(item => <Step key={item.title} title={item.title} icon={<Icon type={item.icon} />}  />)}
                </Steps>
                {this.renderContent(steps[current])}

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