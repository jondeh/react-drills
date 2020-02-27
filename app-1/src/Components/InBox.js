import React, { Component } from 'react'
import OutBox from './OutBox'

class InBox extends Component {
    constructor(){
        super()
            this.state = {
                text: '',
                updateText: ''
        }
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }
    
    handleKeyPress(e){
        if(e.keyCode === 13){
            this.setState({updateText: this.state.text})}
        }
      
 
    
    render(){
        return(
            <div>
                <textArea 
                    className="inBox"
                    onChange={e => this.setState({text: e.target.value})}
                    onKeyDown={this.handleKeyPress} 
                >
                
              </textArea>
              <OutBox 
                handyValue={this.state.updateText}/>

            </div>
        )
    }
}

export default InBox