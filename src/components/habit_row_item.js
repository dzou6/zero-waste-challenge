import React from 'react';

const HabitRowItem = (props) => {
    const {habit, index} = props;
    return (
        <div className="habit-item-container">
            <div className="habit-title">
                {index}. {habit.title}
            </div>
            <div className="habit-pics">
                <div className="bad-habit">
                    <img width="160px" src={require(`../static/tracker_bad/${habit.id}_sad.png`)} alt="bad habit"/>
                </div>
                <div className="good-habit">
                    <img width="160px" src={require(`../static/tracker_good/${habit.id}_happy.png`)} alt="good habit"/>
                </div>
            </div>
        </div>
    )
};

export default HabitRowItem;
