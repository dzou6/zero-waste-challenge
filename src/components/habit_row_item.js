import React from 'react';
import { Tooltip } from 'antd';

//function component to render good VS bad habit list
const HabitRowItem = (props) => {
    const {habit, index} = props;
    return (
        <div className="habit-item-container">
            <div className="habit-title">
                {index}. {habit.title}
            </div>
            <div className="habit-pics">
                <div className="bad-habit">
                    <Tooltip placement="left" title={habit.badHabitDesc}>
                        <img width="160px" src={require(`../static/tracker_bad/${habit.id}_sad.png`)} alt="bad habit"/>
                    </Tooltip>
                </div>
                <div className="good-habit">
                    <Tooltip placement="right" title={habit.goodHabitDesc}>
                        <img width="160px" src={require(`../static/tracker_good/${habit.id}_happy.png`)} alt="good habit"/>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
};

export default HabitRowItem;
