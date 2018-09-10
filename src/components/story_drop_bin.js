import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver(),
        item: monitor.getItem()
    }
}

class StoryDropBin extends Component {
    render() {
        const {connectDropTarget, hovered, item} = this.props;

        const binFileName = hovered? 'rubbish_bin_open.png'
            : 'rubbish_bin_close.png'; 

        return connectDropTarget(
            <img width="120px" alt="rubbish bin" src={require(`../static/story_input/${binFileName}`)} />
        );
    }
}

export default DropTarget('item', {}, collect)(StoryDropBin);
