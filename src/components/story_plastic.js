import React, {Component} from 'react';
import styled from 'styled-components';
import posed from "react-pose";
import _ from 'lodash';
import HabitItem from './habit_item';
import HabitsBoxComponent from './habits_box';
import { ANIMATION_SPEED_ITEM } from '../constants/static_types';

//styled component to render story detail
const DetailContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    background: transparent;
`;

//styled component for habit part
const HabitContainer = styled.div`
    ${props => `
        display: flex;
        flex: 0.5;
        flex-direction: column;
        border-radius: 8px;
        margin-right: ${props.mr}
        margin-left: ${props.ml}
        background-image: url(${props.bgImage});
    `}
`;

//styled componet to contain habit animation
const HabitAnimationComponent = styled.div`
    height: 30%;
`;

//styled compoent to contain story animation
const AnimationItemComponent = styled.div`
    height: 80%;
`;

//styled component to style each of plastic rubbish item, and define the react pose behaviour for each item.
const AnimationItem = styled(posed.div({
   0: {
        x: ({positions}) => positions[0].x,
        y: ({positions}) => positions[0].y,
        transition: {
            duration: ANIMATION_SPEED_ITEM
         }
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

//Component for plastic story
class StoryPlasticComponent extends Component {

    //constructor function for story plastic compoent.
    constructor(props) {
        super(props);
        this.state = {
            badHabit: {
                poseConfigs: {},
                storyOutputIdx: 0,
                selHabits: []
            },
            goodHabit: {
                poseConfigs: {},
                selHabits: []
            }
        };
    }

    //event handler when bad habit animation get started
    onBadHabitAnimationStart() {
        const {inputIndex, story} = this.props;
        this.setState(prevState => ({
            ...prevState,
            badHabit: {
                ...prevState.badHabit,
                poseConfigs: {
                    ...prevState.badHabit.poseConfigs,
                    [story.habits[inputIndex].id]: 0
                }
            }
        }));
        this.setState(prevState => ({
            ...prevState,
            badHabit: {
                ...prevState.badHabit,
                selHabits: [
                    ...prevState.badHabit.selHabits,
                    story.habits[inputIndex]
                ]
            }
        }));
        const interval = setInterval(() => {
            this.setState(prevState => ({
                ...prevState,
                badHabit: {
                    ...prevState.badHabit,
                    poseConfigs: {
                        ...prevState.badHabit.poseConfigs,
                        [story.habits[inputIndex].id]: prevState.badHabit.poseConfigs[story.habits[inputIndex].id] + 1
                    }
                }
            }));
            if(this.state.badHabit.poseConfigs[story.habits[inputIndex].id] > 2) {
                clearInterval(interval);
                this.setState(prevState => ({
                    ...prevState,
                    badHabit: {
                        ...prevState.badHabit,
                        storyOutputIdx: prevState.badHabit.storyOutputIdx + 1
                    }
                }));
                this.props.onOneAnimationFinished("bad")
            }
        }, 1000);
    }

    //event handler when good habit animation get started
    onGoodHabitAnimationStart() {
        const {inputIndex, story} = this.props;
        this.setState(prevState => ({
            ...prevState,
            goodHabit: {
                ...prevState.goodHabit,
                poseConfigs: {
                    ...prevState.goodHabit.poseConfigs,
                    [story.habits[inputIndex].id]: 0
                }
            }
        }));
        this.setState(prevState => ({
            ...prevState,
            goodHabit: {
                ...prevState.goodHabit,
                selHabits: [
                    ...prevState.goodHabit.selHabits,
                    story.habits[inputIndex]
                ]
            }
        }));
        const interval = setInterval(() => {
            this.setState(prevState => ({
                ...prevState,
                goodHabit: {
                    ...prevState.goodHabit,
                    poseConfigs: {
                        ...prevState.goodHabit.poseConfigs,
                        [story.habits[inputIndex].id]: prevState.goodHabit.poseConfigs[story.habits[inputIndex].id] + 1
                    }
                }
            }));
            if(this.state.goodHabit.poseConfigs[story.habits[inputIndex].id] > 2) {
                clearInterval(interval);
                this.props.onOneAnimationFinished("good")
            }
        }, 1000);
    }

    //render all animation items for specific story input
    renderBadHabitAnimationItems() {
        const {inputIndex} = this.props;
        return this.state.badHabit.selHabits.length > 0? (
            this.state.badHabit.selHabits.map(habit => {
                return _.map(habit.badHabitAnimationImg, img => {
                    return ( 
                        <AnimationItem key={inputIndex + img.file}
                            itemImg={require(`../static/story_animate/${img.file}`)}    
                            pose={this.state.badHabit.poseConfigs[habit.id].toString()}
                            positions={{
                                0: {x: 0, y: 20}, 
                                1: {x: 170, y: 105},
                                2: {x: img.x, y: img.y}
                            }}
                        />
                    );
                })
            }) 
            
        ): null;
    }

    renderGoodHabitAnimationItems() {
        const {inputIndex} = this.props;
        return this.state.goodHabit.selHabits.length > 0? (
            this.state.goodHabit.selHabits.map(habit => {
                return _.map(habit.goodHabitAnimationImg, img => {
                    return ( 
                        <AnimationItem key={inputIndex + img.file}
                            itemImg={require(`../static/story_animate/${img.file}`)}    
                            pose={this.state.goodHabit.poseConfigs[habit.id].toString()}
                            positions={{
                                0: {x: 370, y: 15}, 
                                1: {x: 220, y: 120},
                                2: {x: img.x, y: img.y}
                            }}
                        />
                    );
                })
            }) 
            
        ): null;
    }

    //render plastic story component
    render() {
        const {story, inputIndex, inputType} = this.props;
        return (
            <DetailContainer>
                <HabitContainer mr="2px" bgImage= {require(`../static/story_bg/${story.id}_bad_bg.svg`)}>
                    <HabitAnimationComponent>
                        <HabitsBoxComponent 
                            onHabitRendered={() => this.onBadHabitAnimationStart()} 
                            badHabitImg={inputIndex !== null? story.habits[inputIndex].badHabitImg: null}
                            habitRef={inputType === 'bad'? inputIndex : null}
                            habitType="bad"
                        />
                    </HabitAnimationComponent>
                    <AnimationItemComponent>
                        {this.renderBadHabitAnimationItems()}
                        <img 
                            width="200px"
                            style={{marginTop: '170px', marginLeft: "165px"}} 
                            src={require(`../static/story_output/${story.id}_outputItem_${this.state.badHabit.storyOutputIdx}.png`)} 
                            alt="story output" 
                        />
                    </AnimationItemComponent>
                </HabitContainer>
                <HabitContainer ml="2px" bgImage= {require(`../static/story_bg/${story.id}_good_bg.svg`)}>
                    <HabitAnimationComponent>
                        <HabitsBoxComponent 
                            onHabitRendered={() => this.onGoodHabitAnimationStart()} 
                            goodHabitImg={inputIndex !== null? story.habits[inputIndex].goodHabitImg: null}
                            habitRef={inputType === 'good'? inputIndex : null}
                            habitType="good"
                        />
                    </HabitAnimationComponent>
                    <AnimationItemComponent>
                        {this.renderGoodHabitAnimationItems()}
                        <img 
                            width="200px"
                            style={{marginTop: '176px', marginRight: "140px", transform: "rotate(75deg)"}} 
                            src={require(`../static/story_output/${story.id}_outputItem_0.png`)} 
                            alt="story output" 
                        />
                    </AnimationItemComponent>
                </HabitContainer>
            </DetailContainer>
        );
    }
}

export default StoryPlasticComponent;