import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import StoryGridItemComponent from '../components/story_grid_item';

class StoriesGridComponent extends Component {

    renderStoryGridItem() {
        return _.map(this.props.stories, story => {
            return <StoryGridItemComponent key={story.id} story={story} />
        });
    }

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

const mapStateToProps = (state) => {
    return { stories: state.stories }
}

export default connect(
    mapStateToProps, null
)(StoriesGridComponent);
