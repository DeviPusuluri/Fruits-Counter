// Write your code here

import {Component} from 'react'

class FruitsCounter extends Component {
  state = {countM: 0, countB: 0}

  EatMango = () => {
    this.setState(prev => ({countM: prev.countM + 1}))
  }

  EatBanana = () => {
    this.setState(prev => ({countB: prev.countB + 1}))
  }

  render() {
    const {countM, countB} = this.state

    return (
      <div className="container">
        <h1 className="countText">
          Bob ate <span className="count">{countM}</span> mangoes{' '}
          <span className="count">{countB}</span> bananas
        </h1>
        <div className="imgContainer">
          <div className="imgA">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <button onClick={this.EatMango} className="button" type="button">
              Eat Mango
            </button>
          </div>

          <div className="imgA">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
            />
            <button onClick={this.EatBanana} className="button" type="button">
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
