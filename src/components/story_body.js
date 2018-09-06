import React, {Component} from 'react';
import { STORY_PLASTIC_ID } from '../constants/static_types';
import StoryPlasticComponent from './story_plastic';

//Story body component to render story detail information. For now, only supported plastic story
class StoryBodyComponent extends Component {
    render() {
        const {story, inputIndex, inputType} = this.props;
        switch(story.id) {
            case STORY_PLASTIC_ID:
                return (
                    <StoryPlasticComponent 
                        inputIndex={inputIndex} 
                        inputType={inputType}
                        story={story} 
                        onOneAnimationFinished={(type) => this.props.onOneAniFinished(type)}
                    />
                );
            default: 
                console.warn(`Story ${story.id} not supprted!`);
        }
    }
}

export default StoryBodyComponent;