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
            kidTooltipUrl: '',
            kidTooltipTitle: '',
            parentTooltipVisible: false,
            parentTooltipTitle: '',
        }
    }

    renderParentCard(cards) {
        return cards.map(card => {
            return <img key={card.id} onClick={() => this.showTooltips(card.kidDialog, card.parentDialog, card.kidUrl)} style={{cursor: 'pointer'}} src={require(`../static/help_your_parents/Card_0${card.id}.svg`)} alt="parent card" />
        });
    }

    showTooltips(kidDialog, parentDialog, kidUrl) {
        this.setState({
            kidTooltipVisible: false,
            parentTooltipVisible: false,
            kidTooltipUrl: '',
        })

        setTimeout(()=> {
            this.setState({
                kidTooltipVisible: true,
                kidTooltipTitle: kidDialog,
                kidTooltipUrl: kidUrl,
            });
        }, 1000)
        

        setTimeout(()=> {
            this.setState({
                parentTooltipVisible: true,
                parentTooltipTitle: parentDialog
            });
        }, 2000)
    }

    renderTooltipTitle(title, url) {
        return (
            <div>{title} <span><a href={url}>{url}</a></span></div>
        );
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
                        title={this.renderTooltipTitle(this.state.kidTooltipTitle, this.state.kidTooltipUrl)}
                        placement="rightTop" 
                        overlayClassName="helpParentstooltip">
                        <img src={require('../static/help_your_parents/child.svg')} alt="reusable straws" />
                    </Tooltip>
                    <Tooltip
                        visible={this.state.parentTooltipVisible}
                        title={this.renderTooltipTitle(this.state.parentTooltipTitle, null)}
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