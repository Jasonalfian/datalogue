import React, { Component } from 'react'
import Particles from 'react-particles-js';

export default class Particle extends Component {
    render() {
        return (
                <div className="App"> 
                  By Ankit Bansal 
                  <Particles 
                    params={{ 
                      particles: { 
                        color: {
                            value: "#000000"
                          }, 
                        number: { 
                          value: 200, 
                          density: { 
                            enable: true, 
                            value_area: 1000, 
                          } 
                        }, 
                      }, 
                    }} 
                  /> 
               
                </div> 
              ); 
    }
}
