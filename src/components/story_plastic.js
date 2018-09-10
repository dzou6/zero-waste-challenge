import React, {Component} from 'react';
import styled from 'styled-components';
import posed from "react-pose";
import _ from 'lodash';
import HabitsBoxComponent from './habits_box';
import { ANIMATION_SPEED_ITEM } from '../constants/static_types';

const DetailContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 10px 20px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    background-image: ${props => `url(${props.bgImage})`};
`;

const HabitContainer = styled.div`
    height: 30%;
`;

const AnimationComponent = styled.div`
    height: 80%;
`;

const AnimationItem = styled(posed.div({
   0: {
       x: ({positions}) => positions[0].x, 
       y: ({positions}) => positions[0].y, 
    },
   1: {
       x: ({positions}) => positions[1].x, 
       y: ({positions}) => positions[1].y, 
       rotate: 180,
       transition: {
           duration: ANIMATION_SPEED_ITEM
        }
    },
    2: {
       x: ({positions}) => positions[2].x, 
       y: ({positions}) => positions[2].y, 
       rotate: 360,
       transition: {
           duration: ANIMATION_SPEED_ITEM
        }
    }
}))`
    position: absolute;
    height: 100px;
    width: 100px;
    background-size: contain;
    ${props => `
        background-image: url(${props.itemImg});
        transform: 
            ${props.pose == 3? 
                `translateX(${props.positions[2].x}px)
                 translateY(${props.positions[2].y}px)
                 rotate(360deg)
                 translateZ(0px) !important`
                : null
            };
    `}
`;

// transform: translateX(470px) translateY(240px) rotate(360deg) translateZ(0px);

class StoryPlasticComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            poseConfigs: {},
            storyOutputIdx: 0,
            selHabits: []
        };
    }


    onAnimationStart() {
        const {inputIndex, story} = this.props;
        this.setState({
            poseConfigs: {
                ...this.state.poseConfigs,
                [story.habits[inputIndex].id]: 0
            }
        });
        const interval = setInterval(() => {
            this.setState({
                poseConfigs: {
                    ...this.state.poseConfigs,
                    [story.habits[inputIndex].id]: this.state.poseConfigs[story.habits[inputIndex].id] + 1
                }
            });
            if(this.state.poseConfigs[story.habits[inputIndex].id] > 2) {
                clearInterval(interval);
                this.setState({storyOutputIdx: this.state.storyOutputIdx + 1});
                this.props.onOneAnimationFinished()
            }
        }, 1000);
        setTimeout(() => {
            const {story, inputIndex} = this.props;
            this.setState({selHabits: [...this.state.selHabits, story.habits[inputIndex]]});
        }, 500)
    }

    renderAnimationItems() {
        const {inputIndex} = this.props;
        return this.state.selHabits.length > 0? (
            this.state.selHabits.map(habit => {
                return _.map(habit.animationImg, img => {
                    return ( 
                        <AnimationItem key={inputIndex + img.file}
                            itemImg={require(`../static/story_animate/${img.file}`)}    
                            pose={this.state.poseConfigs[habit.id]}
                            positions={{
                                0: {x: 0, y: 0}, 
                                1: {x: 260, y: 150},
                                2: {x: img.x, y: img.y}
                            }}
                        />
                    );
                })
            }) 
            
        ): null;
    }

    render() {
        const {story, inputIndex} = this.props;
        return (
            <DetailContainer bgImage= {require(`../static/story_bg/${story.id}_bg.svg`)}>
                <HabitContainer>
                    <HabitsBoxComponent 
                        onHabitRendered={() => this.onAnimationStart()} 
                        goodHabitImg={inputIndex !== null? story.habits[inputIndex].goodHabitImg: null}
                        badHabitImg={inputIndex !== null? story.habits[inputIndex].badHabitImg: null}
                        habitRef={inputIndex}
                    />
                </HabitContainer>
                <AnimationComponent>
                    {this.renderAnimationItems()}
                    <img 
                        style={{marginTop: '60px'}} 
                        src={require(`../static/story_output/${story.id}_outputItem_${this.state.storyOutputIdx}.png`)} 
                        alt="story output" 
                    />
                </AnimationComponent>
            </DetailContainer>
        );
    }
}

export default StoryPlasticComponent;