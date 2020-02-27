import React, {Component} from 'react';
import './App.css';
import ToDo from './Components/Todo'

class App extends Component {
  constructor(){
      super()
        this.state = {
          list: [],
          text: ''
        }
        this.updateList = this.updateList.bind(this)
  }
  
  updateList(){
    this.setState({
      list: [...this.state.list, this.state.text],
      input: ''
    });
  }

  render(){
    let list = this.state.list.map((e, i) => { 
    return <ToDo key={i} task={e} />; 
  });
    
    return (
      <div className="App">
        <h1>TO DO LIST</h1>
        
        <div>
        <input
          value={this.state.text} 
          placeholder="Anotha one"
          onChange={e => this
          .setState({text: e.target.value})}/>
          
          <button onClick={this.updateList}>SUBMIT</button>
        </div>
            
        <br />

            {list}

      </div>
    );
  }
}

export default App;
