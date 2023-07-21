import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {dark: 'Dark Mode', light: 'Light Mode'}

  darkButton = () => {
    this.setState(pervState => ({light: pervState.light}))
  }

  lightButton = () => {
    this.setState(pervState => ({dark: pervState.dark}))
  }

  render() {
    const {dark, light} = this.state
    let butt
    if (dark === 'Dark Mode') {
      butt = (
        <button className="button" type="button" onClick={this.lightButton}>
          {light}
        </button>
      )
    } else {
      butt = (
        <button className="button" type="button" onClick={this.darkButton}>
          {dark}
        </button>
      )
    }
    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">Click To Change Mode</h1>
          {butt}
        </div>
      </div>
    )
  }
}

export default LightDarkMode
