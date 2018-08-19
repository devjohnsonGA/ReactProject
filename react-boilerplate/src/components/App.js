import React, { Component } from "react"
import '../styles/App.css'

class App extends Component {
        constructor(props){
            super(props)
            this.state = {
                height: 100
            }
        }
        render(){
        var {name, age, bio, pic} = this.props;
        var {height} = this.state
        return(
            <div className="profile-box">
                <h1>Dev React App</h1>
                <h4>Name: {name}</h4>
                <h4>Age: {age}</h4>
                <h4>Bio: {bio}</h4>
                <img src={pic} height={height}/>
                <br />
                <button onClick={this.zoomIn.bind(this)}>+</button>
                <button onClick={this.zoomOut.bind(this)}>-</button>
            </div>
        )
    }
    zoomIn() {
        console.log(this)
        this.setState({height: this.state.height + 100})
    }
    zoomOut() {
        console.log(this)
        this.setState({height: this.state.height - 100})
    }
}

export default App

