import React, {Component} from 'react';
import { ANIMATION_SPEED_HABIT } from '../constants/static_types';
import { Tooltip } from 'antd';

class HabitItem extends Component{

    //Habit Item component constructor
    constructor(props) {
        super(props);
        this.imgs = this.props.habitsImg;
        this.state = {
            imgIndex: 0,
            renderCounter: 0
        };
        this.changeHabitImg = this.changeHabitImg.bind(this);
    }

    //React lifecycle event after component did mount
    componentDidMount() {
        this.timeout = setTimeout(
            this.changeHabitImg,
            ANIMATION_SPEED_HABIT
        )
    }

    //Habit image animation renderer    
    changeHabitImg() {
        this.setState({renderCounter: this.state.renderCounter + 1});
        if(this.state.renderCounter > this.imgs.length-1) {
            // if(this.props.onAnimationFinished){
                this.props.onAnimationFinished();
            // }
        } else {
            this.setState( ({ imgIndex }) => {
                const nextImgIndex = ++imgIndex % this.imgs.length
                return { imgIndex: nextImgIndex }
              },  ()=> {
                this.timeout = setTimeout(
                  this.changeHabitImg,
                  ANIMATION_SPEED_HABIT
                )
              });
        }
    }

    //render habit image based on state image index.
    render() {
        const {tooltipTitle, isHabitTooltipVisible} = this.props;
        return (
            <Tooltip placement="top" title={tooltipTitle} visible={isHabitTooltipVisible}>
                <img width="230px" 
                    style={{marginTop: 70}}
                    src={this.imgs[this.state.imgIndex]}
                    alt="index"
                />
            </Tooltip>
        );
    }
}

export default HabitItem;