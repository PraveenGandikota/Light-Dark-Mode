// Write your code here
/*
  render() {
    const {isDarkMode} = this.state
    return (
      <div >
        <h1>click to change Mode</h1>
        {isDarkMode}?<button>Light Mode</button>:<button>Dark Mode</button>
      </div>
    )
  }
}

import {Component} from 'react'
import './index.css'*/

import './index.css'
import {Component} from 'react'

/*class LightDarkMode extends Component {
  state = {isDarkMode: true}

  modeChange = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }*/
class lightDarkMode extends Component {
  state = {isDarkMode: true}

  modeChange = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    let buttonText
    let cardColor
    let textColor
    const {isDarkMode} = this.state

    if (isDarkMode) {
      buttonText = 'Light Mode'
      cardColor = 'dark'
      textColor = 'textWhite'
    } else {
      buttonText = 'Dark Mode'
      cardColor = 'light'
      textColor = 'textBlack'
    }

    return (
      <div className="bg">
        <div className={`card ${cardColor}`}>
          <h1 className={`heading ${textColor}`}>Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.modeChange}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default lightDarkMode
/*
import './index.css'
import {Component} from 'react'

class lightDarkMode extends Component {
  state = {isDark: true}

  modeChange = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    let buttonText
    let cardColor
    let textColor
    const {isDark} = this.state

    if (isDark) {
      buttonText = 'Light Mode'
      cardColor = 'dark'
      textColor = 'textWhite'
    } else {
      buttonText = 'Dark Mode'
      cardColor = 'light'
      textColor = 'textBlack'
    }

    return (
      <div className="bg">
        <div className={`card ${cardColor}`}>
          <h1 className={`heading ${textColor}`}>Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.modeChange}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default lightDarkMode
*/
