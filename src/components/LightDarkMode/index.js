import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {dark: true}

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  checkMark = () => {
    const {dark} = this.state
    return dark ? 'Dark Mode' : 'Light Mode'
  }

  colorClass = () => {
    const {dark} = this.state
    return dark ? 'Light-Mode' : 'Dark-Mode'
  }

  headClass = () => {
    const {dark} = this.state
    return dark ? 'Dark-Mode' : 'Light-Mode'
  }

  render() {
    const darkMode = this.checkDark()
    return (
      <div className="container">
        <div className={`sub-container ${this.colorClass()}`}>
          <h1 className={`heading ${this.headClass()}`}>
            Click To Change Mode
          </h1>
          <button className="button" type="button" onClick={this.onClickButton}>
            {darkMode}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
