import React, {Component} from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import { Modal, Button } from 'antd';
import LoadingPanel from '../components/loading_panel';
import StoryBodyComponent from '../components/story_body';
import StoryInputComponent from '../components/story_input';

const StoryContainer = styled.div`
    margin: 10px auto;
    height: 682px;
    width: 1000px;
    border: 3px solid #18bc9c;
    text-align: center;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
`;

const StorySider = styled.div`
    background: #d3fff6;
    border-radius: 8px;
    padding: 5px;
    display: inline;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-left: 3px solid #18bc9c;
`;

class StoryBoxComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputIndex: null,
            isStoryPlaying: false,
            boxKey: 0,
            animationCounter: 0,
            showModal: false,
        }
    }

    onAnimationFinished() {
        this.setState({isStoryPlaying: false});
        this.setState({animationCounter: this.state.animationCounter + 1});
        if(this.state.animationCounter === this.props.story.storyInputs.length) {
            this.setState({showModal: true});
        }
    }

    handleOk(e) {
        this.setState({showModal: false});
        this.props.history.push('/habit-tracker');
    }

    handleCancel(e) {
        this.setState({boxKey: this.state.boxKey + 1});
        this.setState({
            inputIndex: null,
            animationCounter: 0
        });
        // this.setState
        this.setState({showModal: false});
    }

    render() {
        const {story} = this.props; 
        if(!story) {
            return <LoadingPanel />
        }
        return (
            <div>
                <span style={{color: 'white', fontWeight: '700', fontSize: '1.2em', paddingBottom: '10px'}}>{story.title}</span>
                <StoryContainer key={this.state.boxKey}>
                    <StoryBodyComponent 
                        story={story} 
                        inputIndex={this.state.inputIndex}
                        onOneAniFinished={() => this.onAnimationFinished()}
                    />
                    <StorySider>
                        <StoryInputComponent 
                            onStoryInputClicked={(index) => this.setState({inputIndex: index, isStoryPlaying: true})}
                            storyInputs={story.storyInputs}
                            isStoryPlaying={this.state.isStoryPlaying}
                        />
                    </StorySider>
                    <Modal
                        centered
                        maskClosable={false}
                        title="Turtle: I am dying. Can you please help me?"
                        visible={this.state.showModal}
                        footer={[
                            <Button key="submit" type="primary" onClick={this.handleOk.bind(this)}>
                                Let's Do It!
                            </Button>
                        ]}
                        onCancel={this.handleCancel.bind(this)}
                    >
                        <p style={{display: "flex"}}><img className="img-fluid mb-0" style={{margin: '0 auto'}} src={require('../static/story_end/Story1_Ending_sad.png')} alt="story end"></img></p>
                    </Modal>
                </StoryContainer>
            </div>
            
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const {id} = ownProps.match.params;
    return {story: state.stories[id]}
}

export default withRouter(
    connect( 
        mapStateToProps,
        null
    )(StoryBoxComponent)
);