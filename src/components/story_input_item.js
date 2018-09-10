import React, {Component} from 'react';
import { DragSource } from 'react-dnd';

const itemSource = {
    beginDrag({id}) {
        return {
            id
        }
    },
    endDrag(props, monitor, componet) {
        if(!monitor.didDrop()) {
            return;
        }
        return props.handleDrop(props.id);
    }
}

const collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging(),
    }
}

class StoryInputItem extends Component {
    render() {
        const {item, isDragging, connectDragSource} = this.props;
        const opacity = isDragging ? 0 : 1;
        return connectDragSource(
            <li>
                <img width="70px" src={item} alt="story input item" style={{opacity}}/>
            </li>
        );
    }
}

export default DragSource('item', itemSource, collect)(StoryInputItem);
