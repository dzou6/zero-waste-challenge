import React,{Component} from 'react';
import {DragSource} from 'react-dnd';


const itemSource = {
    beginDrag(props){
        return props.item;
    },
    endDrag(props,monitor,component){
        if(!monitor.didDrop()){
            return;
        }
        return props.handleDrop(props.item.id);
    }
    
}

function collect(connect,monitor){
    return{
        connectDragSource:connect.dragSource(),
        connectDragPreview:connect.dragPreview(),
        isDragging:monitor.isDragging(),
    }
}

class QuizItem extends Component {
    render(){
        const{isDragging,connectDragSource,item} = this.props;
        return connectDragSource(
            <img style={{marginTop:60}} src={require(`../static/quiz_items/Quiz${item.id}.png`)} alt="quiz1" />
        )
    }
}

export default DragSource('item',itemSource,collect)(QuizItem);