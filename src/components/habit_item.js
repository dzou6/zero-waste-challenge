import React, {Component} from 'react';
import { ANIMATION_SPEED_HABIT } from '../constants/static_types';

class HabitItem extends Component{

    constructor(props) {
        super(props);
        this.imgs = this.props.habitsImg;
        this.state = {
            imgIndex: 0,
            renderCounter: 0
        };
        this.changeHabitImg = this.changeHabitImg.bind(this);
    }

    componentDidMount() {
        this.timeout = setTimeout(
            this.changeHabitImg,
            ANIMATION_SPEED_HABIT
        )
    }

    changeHabitImg() {
        this.setState({renderCounter: this.state.renderCounter + 1});
        if(this.state.renderCounter > this.imgs.length-1) {
            if(this.props.onAnimationFinished){
                this.props.onAnimationFinished();
            }
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

    render() {
        return (
            <img width="200px" 
                src={this.imgs[this.state.imgIndex]}
                alt="index"
            />
        );
    }
}

export default HabitItem;