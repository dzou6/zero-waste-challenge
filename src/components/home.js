import React, { Component } from 'react';
import HomeSliders from '../components/home_slider';
import { Link } from 'react-router-dom';


//funciton component to render home page
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            opacity:0
        };
    }

    //event handler for react life cycle event
    componentDidMount() {
        //set read story opacity after 3.5 seconds
        setTimeout(() => this.setState({opacity:1}), 25000);
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
                            <span className="mb-4" style={{width: "500px", fontSize:"20px"}}>
                                <p>Hi, did you know every year more than 130,000 tonnes of plastics end up in the ocean?</p>
                                <p>These plastics are causing marine animals sick.</p>
                                <p>Would you be willing to take actions to save their lives?</p>
                            </span>
                            <Link to="/story/1"
                                style={{ width: '200px', marginTop: '5px',opacity:this.state.opacity}}
                                className="btn btn-primary btn-xl font-weight-light mb-1">
                                Read Story Now!
                            </Link>
                        </div>
                    </div>
                </div>
            );
        }
}

export default Home;