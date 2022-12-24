import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }
  onGenerateRandomNumber = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)

    this.setState({randomNumber: newRandomNumber})
  }
  render() {
    const {randomNumber} = this.state
    return (
      <div className="app-container">
        <div className="random-num-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">Generate the Random Number 0 to 100</p>
          <button className="num-button" onClick={this.onGenerateRandomNumber}>
            Generate
          </button>
          <p className="num">{randomNumber} </p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
