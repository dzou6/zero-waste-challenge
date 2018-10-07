import React, { Component } from 'react';
import QuizItem from '../components/quiz_item';
import QuizTarget from '../components/quiz_target';
import HTML5Backend from 'react-dnd-html5-backend';
import { default as TouchBackend } from 'react-dnd-touch-backend';
import {isMobile} from 'react-device-detect';
import { DragDropContext } from 'react-dnd';
import styled from 'styled-components';
import _ from 'lodash';
import { Modal, Button, Progress } from 'antd';
import { connect } from 'react-redux';
import LoadingPanel from '../components/loading_panel';
import { getAllQuiz } from '../actions/index';
import { Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faFrown } from '@fortawesome/fontawesome-free-regular';

//Component to have all quiz target components
const QuizTargetComponent = styled.div`
    display:flex;
    justify-content:center;
    margin-top:20px;
`;

//Quiz page
class Quiz extends Component {

    //constructor for quiz component, and init component state
    constructor(props) {
        super(props);
        this.state = {
            optionVal: '',
            tooltipVisible: false,
            modalVisible: false,
            modalTitle: '',
            modalOkText: '',
            modalClosable: false,
            isAnswerCorrect: false,
            candyNum: 0,
            shownItmIdx: Math.floor(Math.random() * 2)
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({tooltipVisible: true}), 2000);
    }

    //event handler when dragged item is dropped on the target
    onDropTarget(optionVal) {
        this.setState({optionVal});
    }

    //event handler when drop is finished
    onDropFinished(id) {
        const {quiz, quizInitLength} = this.props;
        if(this.state.optionVal === quiz[this.state.shownItmIdx].answer) {
            this.setState({modalTitle: 'Good Job!!! You are correct'});
            this.setState({modalOkText: 'Go to Next Question'});
            this.setState({isAnswerCorrect: true});
            this.setState({candyNum: this.state.candyNum + 1});
            if(this.state.candyNum === quizInitLength) {
                this.setState({modalTitle: 'Gooooooood job!!! You finish all the questions, excellent!!!!'});
                this.setState({modalOkText: 'Go to Challenge'});
                this.setState({modalClosable: true});
            }
        } else {
            this.setState({modalTitle: 'You can do better! Just try again'});
            this.setState({modalOkText: 'Retry'});
            this.setState({isAnswerCorrect: false});
        }
        this.setState({modalVisible: true});
        this.setState({tooltipVisible: false});
    }


    //handle click envent on modal
    handleClick = () => {
        const {quiz, quizInitLength} = this.props;
        this.setState({ modalVisible: false });
        if(this.state.isAnswerCorrect) {
            _.remove(quiz, itm => itm.id === quiz[this.state.shownItmIdx].id);
            if(quiz.length !== 0) {
                this.setState({shownItmIdx: Math.floor(Math.random() * quiz.length)});
            }
            if(this.state.candyNum === quizInitLength) {
                this.props.getAllQuiz();
                this.props.history.push('/habit-tracker');
            }
        }
        this.setState({tooltipVisible: true});
        setTimeout(() => this.setState({isAnswerCorrect: false}));
      }

    //handle cancle evetn for moda;
    handleCancel = () => {
        const {quizInitLength, quiz} = this.props;
        this.setState({ modalVisible: false });
        if(this.state.candyNum === quizInitLength) {
            this.setState({candyNum: 0, modalClosable: false});
            _.remove(quiz, itm => itm.id === quiz[this.state.shownItmIdx].id);
            this.props.getAllQuiz();
        }
    }

    renderCandyReward() {
        return this.state.candyNum !== 0? 
        (
            <div style={{position: 'relative', height: 0, left: 516, bottom: 180, fontSize: 20, width: 276}}>
                <span>You win:</span>
                <img width="100px"
                    alt="candy"
                    src={require('../static/quiz_output/candy_1.png')}
                /> X <span style={{fontSize: 40, marginLeft: 10}}>{this.state.candyNum}</span>
            </div>
        ): null;
    }

    renderProgressCircle() {
        const {candyNum} = this.state;
        const {quizInitLength} = this.props;
        return (
            <div style={{position: 'relative', height: 0, left: -56, bottom: 192, fontSize: 20, width: 316}}>
                <Progress 
                    type="circle" 
                    percent={(candyNum / quizInitLength) * 100} 
                    format={() => candyNum < quizInitLength? 
                        (<div style={{fontSize: 17}}>Question {candyNum + 1}</div>): 
                        (<div style={{fontSize: 17}}>Done</div>)} />
            </div>
            
        );
    }

    // render the quiz componet
    render() {
        const {quiz} = this.props;

        if(quiz.length === 0) {
            return <LoadingPanel />
        }

        return (
            <div>
                <h3 className="text-white">Do you think the image at the bottom shows a good habit?</h3>
                <QuizTargetComponent>
                    <QuizTarget
                        optionVal="yes"
                        onDropTarget={(optionVal) => this.onDropTarget(optionVal)}
                        imgFile={require('../static/quiz_target/Yes.png')}
                    />
                    <QuizTarget
                        optionVal="no"
                        onDropTarget={(optionVal) => this.onDropTarget(optionVal)}
                        imgFile={require('../static/quiz_target/No.png')}
                    />
                </QuizTargetComponent>
                <Tooltip 
                    overlayStyle={{fontSize: 20, zIndex: 900}}
                    title="Drag Me to Yes or No!" 
                    visible={this.state.tooltipVisible}>
                    <QuizItem item={quiz[this.state.shownItmIdx]} handleDrop={id => this.onDropFinished(id)} />
                </Tooltip>
                <div style={{fontSize: 20}}>{quiz[this.state.shownItmIdx].title}</div>
                {this.renderCandyReward()}
                {this.renderProgressCircle()}
                <Modal
                    visible={this.state.modalVisible}
                    closable={this.state.modalClosable}
                    title={
                        <div style={{fontSize:"18px"}}>
                            <FontAwesomeIcon 
                                icon={this.state.isAnswerCorrect? faSmile: faFrown}
                                size="3x" 
                                style={{marginRight: 40}}
                            />
                            {this.state.modalTitle}
                        </div>
                    }
                    onOK={this.handleClick}
                    onCancel={this.handleCancel}
                    footer={
                        <Button key="back" type="primary" onClick={this.handleClick}>
                          {this.state.modalOkText}
                        </Button>
                      }
                >
                    <p style={{fontSize:"18px"}}>
                        {quiz[this.state.shownItmIdx].desc}
                    </p>
                </Modal>
            </div>
        );
    }
}

//map redux app state to this component state
const mapStateToProps = (state) => {
    return { quiz: state.quiz, quizInitLength: state.quiz.length };
}

//define the drag and drop context
if(isMobile) {
    Quiz =  DragDropContext(TouchBackend)(Quiz);
} else {
    Quiz =  DragDropContext(HTML5Backend)(Quiz);
}

//establish connect between redux and quiz component
export default connect(
    mapStateToProps,
    {getAllQuiz: getAllQuiz}
)(Quiz);