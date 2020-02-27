import React, { Component } from 'react';
import '../App.css';


class OutBox extends Component{
    constructor() {
        super()
            this.state = {
                text: ''
        }
    }
    
    render() {
        return(
            <div>
                <textArea 
                    className="outBox">

                        {this.props.handyValue} 
                
                </textArea>

            </div>
        )
    }
}

export default OutBox