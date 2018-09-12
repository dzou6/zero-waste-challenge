import React, { Component } from 'react';
import QuizItem from '../components/quiz_item';
import QuizTarget from '../components/quiz_target';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd'
import styled from 'styled-components';
import _ from 'lodash';
import { Modal,Button } from 'antd';
import { connect } from 'react-redux';
import LoadingPanel from '../components/loading_panel';
import { getAllQuiz } from '../actions/index';
import { Tooltip } from 'antd';

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
            isAnswerCorrect: false,
            shownItmIdx: Math.floor(Math.random() * 7)  
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
        const {quiz} = this.props;
        if(this.state.optionVal === quiz[this.state.shownItmIdx].answer) {
            this.setState({modalTitle: 'Congratulations! You are correct :)'});
            this.setState({modalOkText: 'Go to Next Question'});
            this.setState({isAnswerCorrect: true});
        } else {
            this.setState({modalTitle: 'Sorry, you are wrong :( '});
            this.setState({modalOkText: 'Retry'});
            this.setState({isAnswerCorrect: false});
        }
        this.setState({modalVisible: true});
    }


    //handle click envent on modal
    handleClick = () => {
        const {quiz} = this.props;
        this.setState({ modalVisible: false });
        if(this.state.isAnswerCorrect) {
            _.remove(quiz, itm => itm.id === quiz[this.state.shownItmIdx].id);
            console.log(quiz.length);
            if(quiz.length !== 0) {
                this.setState({shownItmIdx: Math.floor(Math.random() * (quiz.length - 1))});
            } else {
                this.props.getAllQuiz();
            }
            
        }
        this.setState({isAnswerCorrect: false});
      }

    //handle cancle evetn for moda;
    handleCancel = () => {
        this.setState({ modalVisible: false });
    }

    // render the quiz componet
    render() {
        const {quiz} = this.props;

        if(quiz.length == 0) {
            return <LoadingPanel />
        }

        return (
            <div>
                <h3 className="text-white">Do you think the image at the bottom shows a good habit that can help the turtle?</h3>
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
                    overlayStyle={{fontSize: 20}}
                    title="Drag Me to Yes or No!" 
                    visible={this.state.tooltipVisible}>
                    <QuizItem item={quiz[this.state.shownItmIdx]} handleDrop={id => this.onDropFinished(id)} />
                </Tooltip>
                <Modal
                    visible={this.state.modalVisible}
                    title={this.state.modalTitle}
                    onOK={this.handleClick}
                    onCancel={this.handleCancel}
                    footer={
                        <Button key="back" type="primary" onClick={this.handleClick}>
                          {this.state.modalOkText}
                        </Button>
                      }
                >
                    <p>
                        {quiz[this.state.shownItmIdx].desc}
                    </p>
                </Modal>
            </div>
        );
    }
}

//map redux app state to this component state
const mapStateToProps = (state) => {
    return { quiz: state.quiz };
}

//define the drag and drop context
Quiz =  DragDropContext(HTML5Backend)(Quiz);

//establish connect between redux and quiz component
export default connect(
    mapStateToProps,
    {getAllQuiz: getAllQuiz}
)(Quiz);