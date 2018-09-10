// import React, {Component} from 'react';
// import { Layout, Button } from 'antd';
// import {connect} from 'react-redux';
// import { withRouter } from 'react-router';
// import { FILE_NAME_START_POS } from '../constants/static_types'
// import StoryDropBin from '../components/story_drop_bin';
// import StoryInputItem from '../components/story_input_item';
// import HTML5Backend from 'react-dnd-html5-backend'
// import { DragDropContext } from 'react-dnd'
// import HabitItem from '../components/habit_item';
// import LoadingPanel from '../components/loading_panel';

// class StoryDetail extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             inputFiles: {}, 
//             outputFiles: {}, 
//             badHabitFiles: {}, 
//             goodHabitFiles: {}, 
//             dropTimes: 0
//         };
//     } 

//     componentDidMount() {
//         const inputFiles = this._getStaticImgFiles(require.context('../static/story_input', false, /.*\.png$/));
//         const outputFiles = this._getStaticImgFiles(require.context('../static/story_output', false, /.*\.png$/));
//         const badHabitFiles = this._getStaticImgFiles(require.context('../static/habit_bad', false, /.*\.png$/));
//         const goodHabitFiles = this._getStaticImgFiles(require.context('../static/habit_good', false, /.*\.png$/));
//         this.setState({
//             inputFiles
//         });
//         this.setState({
//             outputFiles
//         });
//         this.setState({
//             badHabitFiles
//         });
//         this.setState({
//             goodHabitFiles
//         })
//     }

//     _getStaticImgFiles(req) {
//         return req.keys().reduce((obj, itm) => {
//             const fileName = itm.substring(FILE_NAME_START_POS);
//             const id = fileName.split('_')[0];
//             if(!obj[id]) {
//                 obj[id] = [];
//             } 
//             obj[id].push(fileName);
//             return obj;
//         }, {});
//     }

//     inputItemDropped(item) {
//         this.setState(prevState => {
//             let inputFiles = prevState.inputFiles;
//             const idx = inputFiles[this.props.story.id].findIndex(file => file === item);
//             inputFiles[this.props.story.id].splice(idx, 1);
//             return {inputFiles};
//         });
//         this.setState({
//             dropTimes: this.state.dropTimes + 1
//         });
//     }

//     renderStoryInputItems() {
//         return this.state.inputFiles[this.props.story.id].map((file) => {
//             return (
//                 <StoryInputItem 
//                     handleDrop={(item) => this.inputItemDropped(item)} 
//                     key={file} 
//                     id={file}
//                     item={require(`../static/story_input/${file}`)} />
//             );
//         })
//     }

//     renderHibitItem() {
//         return this.props.story.habits.map((habit, index) => {
//             return <HabitItem key={habit.id} habit={habit} index={index+1} badHabit={this.state.badHabitFiles[habit.id]} goodHabit={this.state.goodHabitFiles[habit.id]} />
//         })
//     }

//     render() {

//         const {Content} = Layout;
//         const {story} = this.props;

//         if(!story) {
//             return <LoadingPanel />
//         }
        
//         return(
//             <Content>
//                 <div className="story-container">
//                     <div 
//                         className="story-info" 
//                         style={{backgroundImage: `url(${require(`../static/story_bg/${story.id}_bg.png`)})`}}>
//                         <div className="story-desc">
//                             {story.description}
//                         </div>
//                         <div className="story-interaction">
//                             <div className="story-input">
//                                 <div className="input-top">
//                                     <StoryDropBin />
//                                 </div>
//                                 <div className="input-bottom">
//                                     <ul className='input-list-container'>
//                                         {this.renderStoryInputItems()}
//                                     </ul>
//                                 </div>
//                             </div>
//                             <div className="story-output">
//                                 <img width="160px" src={require(`../static/story_output/${story.id}_outputItem_${this.state.dropTimes}.png`)} alt="output item"/>
//                             </div>
//                         </div>
//                     </div>
//                     <div
//                         className="habit-info">
//                         <div className="habit-notify-msg">
//                             <h3>Here are what you could do: </h3>
//                         </div>
//                         <div className="habit-detail">
//                             <ul className="habit-container">
//                                 {this.renderHibitItem()}
//                             </ul>
//                         </div>
//                         <div className="habit-nav-btn">
//                             <Button type="primary">Let's Do It!</Button>
//                         </div>
//                     </div>
//                 </div>
//             </Content>
//         );
//     }

// }

// const mapStateToProps = ({stories}, ownProps) => {
//     const {id} = ownProps.match.params;
//     const selectedStoryIdx = id? id: Object.keys(stories)[0] 
//     return { story: stories[selectedStoryIdx]}
// }


// StoryDetail = DragDropContext(HTML5Backend)(StoryDetail);
// export default withRouter(connect(
//     mapStateToProps,
//     null
// )(StoryDetail));
