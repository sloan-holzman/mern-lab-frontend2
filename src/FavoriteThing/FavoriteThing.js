import React, { Component } from "react"
import { Link } from "react-router-dom"

class FavoriteThing extends Component {
  render() {
    return (
      <div>
        <a href={this.props.url}>
          <h4>{this.props.description}</h4>
        </a>
        <img src={this.props.image_url} alt={this.props.description} />
      </div>
    )
  }
}

export default FavoriteThing
