import React from 'react';
import { Layout } from 'antd';
import HabitTrackerDetail from '../containers/habit_tracker_detail';

//function component to render Habit Tracker layout
const HabitTrackerComponent = () => {
    return (
        <Layout>
            <HabitTrackerDetail />
        </Layout>
    );
}

export default HabitTrackerComponent;