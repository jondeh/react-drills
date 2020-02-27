import React, {Component} from 'react'

class Login extends Component {
    constructor() {
        super()
            this.state = {
                username: '',
                password: ''
            }
    }

    render(){
        return(
            <div>
                <span>Username: </span> <input onChange={e => this.setState({username: e.target.value})}/> {}
                <span>Password: </span> <input onChange={e => this.setState({password: e.target.value})}/> {}
                <button onClick={e => alert(`${this.state.username} ${this.state.password}`)}>SUBMIT</button>
            </div>
        )
    }
}

export default Login;