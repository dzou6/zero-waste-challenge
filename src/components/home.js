import React, { Component } from 'react';
import HomeSliders from '../components/home_slider';
import { Link } from 'react-router-dom';


//funciton component to render home page
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showPlayBtn: false
        };
    }

    //event handler for react life cycle event
    componentDidMount() {
        //set read story opacity after 3.5 seconds
        setTimeout(() => this.setState({showPlayBtn: true}), 22000);
    }

    render(){
            return (
                <div className="container">
                    <HomeSliders/>
                    <div style={{position: "relative", height: "0px"}}>
                    
                        <div style={{
                            position: "relative",
                            fontSize: "1.1em",
                            bottom: "598px"
                        }}>
                            <span className="mb-4" style={{width: "501px", fontSize:"20px"}}>
                                <p>Hi, did you know over 130,000 tonnes(16,250 elephants) of plastics end up in the ocean yearly?</p>
                                <p>These plastics are making marine animals sick.</p>
                                <p>Would you be willing to take actions to save their lives?</p>
                            </span>
                            {this.state.showPlayBtn? (
                                <Link to="/story/1"
                                style={{ width: '200px', marginTop: '5px',opacity:this.state.opacity}}
                                className="btn btn-primary btn-xl font-weight-light mb-1">
                                Play Game Now!
                            </Link>
                            ): null}
                            
                        </div>
                    </div>
                </div>
            );
        }
}

export default Home;