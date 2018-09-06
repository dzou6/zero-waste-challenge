import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import StoryGridItemComponent from '../components/story_grid_item';

//Stories Grid compoent to show multiple stories
// not in use for now
class StoriesGridComponent extends Component {

    //render each story in grid
    renderStoryGridItem() {
        return _.map(this.props.stories, story => {
            return <StoryGridItemComponent key={story.id} story={story} />
        });
    }

    //render story grid
    render() {
        return (
            <div className="container" style={{margin: "3rem auto"}}>
                <h2 className="text-center text-uppercase text-secondary mb-0 text-white">Stories</h2>
                <div className="row story-row mt-5">
                    {this.renderStoryGridItem()}
                </div>
            </div>
        );
    }
}

//map app state stories to story grid component props
const mapStateToProps = (state) => {
    return { stories: state.stories }
}

//establish connection between stroy gird component with redux.
export default connect(
    mapStateToProps, null
)(StoriesGridComponent);
