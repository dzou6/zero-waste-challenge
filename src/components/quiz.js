import React, { Component } from 'react';
import QuizItem from './quiz_item';
import QuizTarget from './quiz_target';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd'
import styled from 'styled-components';
import { Modal,Button } from 'antd';

const QuizTargetComponent = styled.div`
    display:flex;
    justify-content:center;
    margin-top:20px;
`;

class Quiz extends Component {
    state = {
        items: [
            { id: 1, answer: 'no' },
            { id: 2, answer: 'yes' },
            { id: 3, answer: 'no' },
            { id: 4, answer: 'yes' },
            { id: 5, answer: 'no' },
            { id: 6, answer: 'yes' }
        ],
        optionVal: '',
        modalVisible: false,
        modalTitle: ''
    }

    onDropTarget(optionVal) {
        this.setState({optionVal});
    }

    onDropFinished(id) {
        if(this.state.optionVal === this.state.items[0].answer) {
            this.setState({modalTitle: 'Congratulation! You are correct! :)'});
        } else {
            this.setState({modalTitle: 'Sorry, you are wrong :('});
        }
        this.setState({modalVisible: true});
    }
    handleClick = () => {
        this.setState({ modalVisible: false });
      }

    render() {
        return (
            <div>
                <h2 className="text-white">Do you think it is a good habit that can help the turtle?</h2>
                <QuizTargetComponent>
                    <QuizTarget
                        onDropTarget={(optionVal) => this.onDropTarget(optionVal)}
                        optionVal="yes"
                        imgFile={require('../static/quiz_target/Yes.png')}
                    />
                    <QuizTarget
                        onDropTarget={(optionVal) => this.onDropTarget(optionVal)}
                        optionVal="no"
                        imgFile={require('../static/quiz_target/No.png')}
                    />
                </QuizTargetComponent>
                <QuizItem item={this.state.items[0]} handleDrop={id => this.onDropFinished(id)} />
                <Modal
                    visible={this.state.modalVisible}
                    title={this.state.modalTitle}
                    onOK={this.handleClick}
                    onCancel={this.handleClick}
                    footer={
                        <Button key="back" type="primary" onClick={this.handleClick}>
                          OK
                        </Button>
                      }
                >
                    <p>Drinking with plastic cups and straws will increase more plastic waste and harm turtle's health</p>
                </Modal>
            </div>
        );
    }
}
export default DragDropContext(HTML5Backend)(Quiz);