import React from 'react';
import styled from 'styled-components';
import HabitItem from './habit_item';

const HabitsContainer = styled.div`
    display:flex;
    justify-content: space-between;
`;

const HabitsBoxComponent = (props) => {
    const {goodHabitImg, badHabitImg, habitRef} = props;
    
    return habitRef != null ? (
        <HabitsContainer>
            <HabitItem 
                onAnimationFinished={() => props.onHabitRendered()}
                key={`bad${habitRef}`} 
                habitsImg={badHabitImg.map(img => {
                    return require(`../static/habit_bad/${img}`);
                })}
            />
            <HabitItem 
                key={`good${habitRef}`} 
                habitsImg={goodHabitImg.map(img => {
                    return require(`../static/habit_good/${img}`);
                })}
            />
        </HabitsContainer>
        
    ) : null;
}

export default HabitsBoxComponent;