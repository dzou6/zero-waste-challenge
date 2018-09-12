import React, {Component} from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//styled component to render input image. background img re-rendered based on props setting.
const InputImage = styled.div`
    margin: 5px;
    width: 80px;
    height: 80px;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    pointer-events: auto;
    ${props => `
        background-image: url(${props.inputBg});
        opacity: ${(props.clicked || props.storyPlaying)? 0.2: 1};
        pointer-events: ${(props.clicked || props.storyPlaying)? 'none': 'auto'};;
    `}
`;
//componet to render story input buttons, which allow user to play story animation
class StoryInputComponent extends Component {

    //constructor function for story input. init state for clicked
    constructor(props) {
        super(props);
        this.state = {
            clicked: {},
        }
    }

    //handle event when input button get clicked
    onInputClicked(index) {
        this.setState({clicked: {...this.state.clicked, [index]: true}});
        this.setState({isStoryPlaying: true});
        this.props.onStoryInputClicked(index);
    }

    //render the story input buttons
    render() {
        const {storyInputs} = this.props;
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <FontAwesomeIcon 
                    icon="hand-point-down"
                    color="#18bc9c"
                    size="3x"
                />
                {storyInputs.map((input, index) => {
                    return (
                        <InputImage 
                            key={input}
                            index={index}
                            onClick={() => this.onInputClicked(index)}
                            clicked={this.state.clicked[index]}
                            storyPlaying={this.props.isStoryPlaying}
                            imgOpacity={this.state.clicked[index]? '0.5': '1'}
                            inputBg={require(`../static/story_input/${input}`)}/>
                    );
                })}
                <FontAwesomeIcon 
                    icon="hand-point-up"
                    color="#18bc9c"
                    size="3x"
                />
            </div>
        );
    }
    
}

export default StoryInputComponent;