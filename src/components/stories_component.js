import React from 'react';
import { Layout } from 'antd';

import StoriesSideBar from "../containers/stories_sidebar";
// import StoryDetail from '../containers/story_detail';

const StoriesComponent = () => {
    return (
        <Layout>
            <StoriesSideBar />
            {/* <StoryDetail /> */}
        </Layout>
    );
}

export default StoriesComponent;