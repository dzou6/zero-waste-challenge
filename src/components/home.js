import React from 'react';
import HomeSliders from '../components/home_slider';
import { Link } from 'react-router-dom';


const Home = () => {

    return (
        <div className="container">
            <HomeSliders animDuration={3} />
            <div style={{position: "relative", height: "0px"}}>
            
                <div style={{
                    position: "relative",
                    fontSize: "1.1em",
                    bottom: "650px"
                }}>
                    <span className="mb-4" style={{width: "500px"}}>
                        <p>Little Angel</p>
                        <p>Do you know every year more than 130,000 tonnes of plastics end up in the ocean?</p>
                        <p>These plastics are causing marine animals die</p>
                        <p>Would you be willing to take actions to save their lives?</p>
                    </span>
                    <Link to="/story/1"
                        style={{ width: '200px', marginTop: '5px' }}
                        className="btn btn-primary btn-xl font-weight-light mb-1">
                        Read Story Now!
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;