import React, {Component} from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import { Modal, Button } from 'antd';
import LoadingPanel from '../components/loading_panel';
import StoryBodyComponent from '../components/story_body';
import StoryInputComponent from '../components/story_input';

//styled component for story container
const StoryContainer = styled.div`
    margin: 10px auto;
    height: 606px;
    width: 1024px;
    border: 3px solid #18bc9c;
    text-align: center;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
`;

//style componet to story left sider bar to include story input btns
const StoryLeftSider = styled.div`
    background: #d3fff6;
    border-radius: 8px;
    padding: 5px;
    display: inline;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-right: 3px solid #18bc9c;
`;


//style componet to story right sider bar to include story input btns
const StoryRightSider = styled.div`
    background: #d3fff6;
    border-radius: 8px;
    padding: 5px;
    display: inline;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-left: 3px solid #18bc9c;
`;

//Story Box componet to display story detail
class StoryBoxComponent extends Component {
    //constructor function
    constructor(props) {
        super(props);
        this.state = {
            inputIndex: null,
            inputType: null,
            isStoryPlaying: false,//check current story playing or not to control button ocupacity
            boxKey: 0,
            badAnimationCounter: 0,
            goodAnimationCounter: 0,
            showModal: false,
            modalTitle: '',
            modalImg: 'Story1_Ending_sad.png',
            modalOkText: '',
            isModalExternalRoute: false,
            isTurtleTooltipVisible: false,
            isHabitTooltipVisible: false,
        }
    }

    //event handeler after animation completed
    onAnimationFinished(type) {
        this.setState({isStoryPlaying: false});
        if(type === 'bad') {
            this.setState({badAnimationCounter: this.state.badAnimationCounter + 1, isTurtleTooltipVisible: true});
        } else {
            this.setState({goodAnimationCounter: this.state.goodAnimationCounter + 1});
        }
        if(this.state.badAnimationCounter === this.props.story.storyBadInputs.length) {
            this.setState({
                isTurtleTooltipVisible: false,
                isHabitTooltipVisible: false,
                showModal: true,
                modalTitle: 'Turtle: I am sick. Can you please help me?',
                modalImg: 'Story1_Ending_sad.png',
                modalOkText: `Let's Do It!`,
                isModalExternalRoute: true,
            });
        }
        if(this.state.goodAnimationCounter === this.props.story.storyGoodInputs.length) {
            this.setState({
                isTurtleTooltipVisible: false,
                isHabitTooltipVisible: false,
                showModal: true,
                modalTitle: 'Turtle: You are making a better world!',
                modalImg: 'Story1_Ending_happy.png',
                modalOkText: `Let's Replay!`,
                isModalExternalRoute: false
            });
        }
    }

    //handle ok button event for modal
    handleOk(e) {
        this.setState({showModal: false});
        if(this.state.isModalExternalRoute) {
            this.props.history.push('/habit-tracker');
        } else {
            this.setState({boxKey: this.state.boxKey + 1});
            this.setState({
                inputIndex: null,
                badAnimationCounter: 0,
                goodAnimationCounter: 0
            });
        }
    }

    //close modal when modal get canceled
    handleCancel(e) {
        this.setState({boxKey: this.state.boxKey + 1});
        this.setState({
            inputIndex: null,
            badAnimationCounter: 0,
            goodAnimationCounter: 0
        });
        // this.setState
        this.setState({showModal: false});
    }

    //render story box componet
    render() {
        const {story} = this.props; 
        if(!story) {
            return <LoadingPanel />  // if data hasn't retrieved from database.
        }
        return (
            <div>
                <span style={{color: 'white', fontWeight: '700', fontSize: '1.4em', paddingBottom: '10px'}}>{story.title}</span>
                <StoryContainer key={this.state.boxKey}>
                    <StoryLeftSider>
                        <StoryInputComponent 
                            onStoryInputClicked={(index) => this.setState({inputIndex: index, isStoryPlaying: true, inputType: 'bad', isTurtleTooltipVisible: false, isHabitTooltipVisible: true})}
                            storyInputs={story.storyBadInputs}
                            type="bad"
                            isStoryPlaying={this.state.isStoryPlaying}
                        />
                    </StoryLeftSider>
                    <StoryBodyComponent 
                        story={story} 
                        isTurtleTooltipVisible={this.state.isTurtleTooltipVisible}
                        isHabitTooltipVisible={this.state.isHabitTooltipVisible}
                        inputIndex={this.state.inputIndex}
                        inputType={this.state.inputType}
                        onOneAniFinished={(type) => this.onAnimationFinished(type)}
                    />
                    <StoryRightSider>
                        <StoryInputComponent 
                            onStoryInputClicked={(index) => this.setState({inputIndex: index, isStoryPlaying: true, inputType: 'good', isTurtleTooltipVisible: false, isHabitTooltipVisible: true})}
                            storyInputs={story.storyGoodInputs}
                            type="good"
                            isStoryPlaying={this.state.isStoryPlaying}
                        />
                    </StoryRightSider>
                    <Modal
                        centered
                        maskClosable={false}
                        title={this.state.modalTitle}
                        visible={this.state.showModal}
                        footer={[
                            <Button key="submit" type="primary" onClick={this.handleOk.bind(this)}>
                                {this.state.modalOkText}
                            </Button>
                        ]}
                        onCancel={this.handleCancel.bind(this)}
                    >
                        <p style={{display: "flex"}}>
                            <img 
                                className="img-fluid mb-0" 
                                style={{margin: '0 auto'}} 
                                src={require(`../static/story_end/${this.state.modalImg}`)} 
                                alt="story end"
                            />
                        </p>
                    </Modal>
                </StoryContainer>
            </div>
            
        );
    }
}

//map app state stories to this component props
const mapStateToProps = (state, ownProps) => {
    const {id} = ownProps.match.params;
    return {story: state.stories[id]}
}

//esbalish connection between react and redux
export default withRouter(
    connect( 
        mapStateToProps,
        null
    )(StoryBoxComponent)
);