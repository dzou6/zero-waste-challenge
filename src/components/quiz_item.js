import React,{Component} from 'react';
import {DragSource} from 'react-dnd';

//event handler for drag and drop
const itemSource = {
    //event handler when drag get started
    beginDrag(props){
        return props.item;
    },
    //event handler when drag ended
    endDrag(props,monitor,component){
        if(!monitor.didDrop()){
            return;
        }
        return props.handleDrop(props.item.id);
    }
    
}

//collect source to assign the drag drop related to component state
function collect(connect,monitor){
    return{
        connectDragSource:connect.dragSource(),
        connectDragPreview:connect.dragPreview(),
        isDragging:monitor.isDragging(),
    }
}


//Quiz Item component
class QuizItem extends Component {
    // render functiction to dispaly quiz item compnent
    render(){
        const{connectDragSource,item} = this.props;
        return connectDragSource(
            <img
                height="200px" 
                style={{marginTop:65}}
                src={require(`../static/quiz_items/Quiz${item.id}.png`)} 
                alt="quizitem" />
        )
    }
}

//export quiz item as drag source
export default DragSource('item',itemSource,collect)(QuizItem);