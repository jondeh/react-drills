import React, {Component} from 'react'

class TheList extends Component {
    constructor(){
        super()
            this.state = {
                array: [
                    'Find the supplier',
                    'Send Lisa flowers',
                    'Buy drugs',
                    'Capture Rome'
                ]
            }
    }

    render(){
        return(
            <div className="parent">
                <ol>
                    
                    <li className="list">
                        { this.state.array[0]}
                    </li>
                    
                    <li className="list">
                        { this.state.array[1]}
                    </li>
                    
                    <li className="list">
                        { this.state.array[2]}
                    </li>
                    <li className="list">
                        { this.state.array[3]}
                    </li>
                    

                </ol>
            </div>
        )
    }
}

export default TheList