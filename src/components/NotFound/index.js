// Write your JS code here
import {Component} from 'react'

import './index.css'

class NotFound extends Component {
  componentDidMount() {
    const {history} = this.props
    history.replace('/bad-path')
  }

  render() {
    return (
      <div className="not-found-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
          alt="not-found"
          className="not-found-img"
        />
      </div>
    )
  }
}

export default NotFound
