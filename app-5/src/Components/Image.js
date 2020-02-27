import React, {Component} from 'react'

class Image extends Component {
    render(){
    return (
        <div>
            <img src={this.props.imageAdd} alt="shanyu" height="400" width="310" />
        </div>
        )
    }
}

export default Image;