import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

class Header extends Component {
  render() {
    return(
      <div>
        <nav>
          <h1>FavoriteThings App</h1>
          <Link to="/">Home</Link>
          <Link to="/new-favorite">New Favorite</Link>
        </nav>
      </div>
    )
  }
}


export default Header
