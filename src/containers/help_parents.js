import React, { Component } from 'react';
import { Tooltip } from 'antd';
import {connect} from 'react-redux';
import './help_parents.css'
import LoadingPanel from '../components/loading_panel';

class HelpParents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            kidTooltipVisible: false,
            kidTooltipTitle: '',
            parentTooltipVisible: false,
            parentTooltipTitle: '',
        }
    }

    renderParentCard(cards) {
        return cards.map(card => {
            return <img onClick={() => this.showTooltips(card.kidDialog, card.parentDialog)} style={{cursor: 'pointer'}} src={require(`../static/help_your_parents/Card_0${card.id}.svg`)} alt="parent card" />
        });
    }

    showTooltips(kidDialog, parentDialog) {
        this.setState({
            kidTooltipVisible: false,
            parentTooltipVisible: false
        })

        setTimeout(()=> {
            this.setState({
                kidTooltipVisible: true,
                kidTooltipTitle: kidDialog
            });
        }, 1000)
        

        setTimeout(()=> {
            this.setState({
                parentTooltipVisible: true,
                parentTooltipTitle: parentDialog
            });
        }, 2000)
    }


    render() {
        const {stories} = this.props;

        if(!stories[1]) {
            return <LoadingPanel />;
        }
        
        const {helpParents} =  stories[1];

        return (
            <div style={{ width: 1000 }}>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'space-evenly' }}>
                    <Tooltip
                        visible={this.state.kidTooltipVisible}
                        title={this.state.kidTooltipTitle} 
                        placement="rightTop" 
                        overlayClassName="helpParentstooltip">
                        <img src={require('../static/help_your_parents/child.svg')} alt="reusable straws" />
                    </Tooltip>
                    <Tooltip
                        visible={this.state.parentTooltipVisible}
                        title={this.state.parentTooltipTitle}
                        placement="rightTop" 
                        overlayClassName="helpParentstooltip">
                        <img src={require('../static/help_your_parents/mom.svg')} alt="reusable bags" />
                    </Tooltip>
                </div>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'space-evenly', marginTop: 20 }}>
                    {this.renderParentCard(helpParents)}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {stories: state.stories }
}

export default connect(
    mapStateToProps, null
 )(HelpParents);