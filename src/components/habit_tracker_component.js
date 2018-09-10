import React from 'react';
import { Layout } from 'antd';
import HabitTrackerDetail from '../containers/habit_tracker_detail';

const HabitTrackerComponent = () => {
    return (
        <Layout>
            <HabitTrackerDetail />
        </Layout>
    );
}

export default HabitTrackerComponent;