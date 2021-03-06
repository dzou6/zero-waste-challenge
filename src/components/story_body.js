import React, {Component} from 'react';
import { STORY_PLASTIC_ID } from '../constants/static_types';
import StoryPlasticComponent from './story_plastic';

//Story body component to render story detail information. For now, only supported plastic story
class StoryBodyComponent extends Component {
    render() {
        const {story, inputIndex, inputType, isTurtleTooltipVisible, isHabitTooltipVisible} = this.props;
        //render plastic story component when plastic id is 1
        switch(story.id) {
            case STORY_PLASTIC_ID:
                return (
                    <StoryPlasticComponent 
                        isTurtleTooltipVisible={isTurtleTooltipVisible}
                        isHabitTooltipVisible={isHabitTooltipVisible}
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