import React, { Component } from 'react';

class About extends Component{
        render() {
                    return (
                            <div style={{ backgroundColor: '#17a2b8', color: "#fff", margin: 20, padding: 10, fontSize: "1.2em", borderRadius: 10, height: 585,width:882 }}>
                                <p style={{ fontSize: "1.2em", marginTop: 20}}>About Zero-waste Challenge </p>
                                <p style={{marginTop: 50, 'text-align': 'justify'}}>
                                    <img style={{ float: 'right' }} src={require('../static/logo.png')} alt="logo" />
                                    Zero-waste Challenge aims to educate kids on the war on plastic waste and we value the trust of 
                                    Australian families in choosing us to help their kids develop zero-waste habits.
                                </p>
                                <p style={{marginTop: 50, 'text-align': 'justify'}}>
                                    The Zero-waste Challenges website is designed to attract 6-8 years old children. It provides 
                                    interactive games for children to understand that plastic can affect marine animals and their health. 
                                    So, Children can learn through games and alternatively develop a zero-waste habit towards plastics and 
                                    influence grow-ups. We aim to fix problems from the root!
                                </p>
                                <p style={{marginTop: 50, 'text-align': 'justify'}}>
                                    Zero-waste Challenge tries to progress towards the goal of motivating children to develop zero-waste habits. 
                                    Children can interact with animations, games, calculators, and quizzes to understand the urgency of developing 
                                    zero-waste habits towards plastic and gain motivation. Parents can help kids develop these habits by providing them 
                                    with information provided on the website and giving rewards to children if they achieve their daily goal of developing 
                                    a zero-waste habit.
                                </p>
                            </div>);
                }
            }

    export default About;