import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

//event handler for drag and drop
const targetSource = {
    //event handler when item get dropped on this component
    drop(props, monitor, component) {
        return props.onDropTarget(props.optionVal);
    }
}

//collect all drag drop related props to this compoent state
function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver(),
        item: monitor.getItem(),
    }
}

//Quiz Target componet
class QuizTarget extends Component {
    //used to render quiz target compnent
    render() {
        const { connectDropTarget, hovered, imgFile, optionVal } = this.props;
        const backgroundColor = hovered ? '#4286f4' : 'white';
        return connectDropTarget(
            <img 
                style={{marginRight: optionVal === 'yes'? 100 : 0 ,backgroundColor, borderRadius: 7}}  
                src={imgFile} alt="target option" 
            />
        );
    }
}

//export quiz target component as the drop target
export default DropTarget('item', targetSource, collect)(QuizTarget);