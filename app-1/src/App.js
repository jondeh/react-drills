import React, {Component} from 'react';
import './App.css';
import InBox from './Components/InBox'

class App extends Component {
  constructor(){
      super()
          this.state = {
            text: '',
            updateText: ''
          }
      }


   
render(){
  return(
    <div className="body">
      <InBox />    
    </div>
    )
  }
}

export default App;
