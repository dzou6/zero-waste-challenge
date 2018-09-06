import React from 'react';
import HabitItem from './habit_item';

//function component to render habit box in story animation, including both good and bad habit animation
const HabitsBoxComponent = (props) => {
    const { goodHabitImg, badHabitImg, habitRef, habitType } = props;

    return habitRef != null ? (
        <HabitItem
            onAnimationFinished={() => props.onHabitRendered()}
            key={habitType + habitRef}
            habitsImg={habitType === 'bad' ? badHabitImg.map(img => {
                return require(`../static/habit_bad/${img}`);
            }) : goodHabitImg.map(img => {
                return require(`../static/habit_good/${img}`);
            })}
        />

    ) : null;
}

export default HabitsBoxComponent;