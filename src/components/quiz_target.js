import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

const targetSource = {
    drop(props, monitor, component) {
        return props.onDropTarget(props.optionVal);
    }
}


function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver(),
        item: monitor.getItem(),
    }
}

class QuizTarget extends Component {
    render() {
        const { connectDropTarget, hovered, imgFile, optionVal } = this.props;
        const backgroundColor = hovered ? '#4286f4' : '';
        return connectDropTarget(
            <img 
                style={{marginRight: optionVal === 'yes'? 100 : 0 ,backgroundColor, borderRadius: 7}}  
                src={imgFile} alt="target option" 
            />
        );
    }
}

export default DropTarget('item', targetSource, collect)(QuizTarget);