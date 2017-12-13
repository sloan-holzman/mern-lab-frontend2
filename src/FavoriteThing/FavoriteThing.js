import React, { Component } from "react"
import { Link } from "react-router-dom"
import './FavoriteThing.css'
import axios from "axios"



class FavoriteThing extends Component {
  constructor(props) {
    super(props)
  }





  render() {
    let buttons = null
        if  (this.props.rank > 1 && this.props.rank < this.props.count) {
          buttons = [
            <button onClick={ (e) => this.props.increaseRank(e, this.props.id) }>Upvote</button>,
            <button onClick={(e) => this.props.decreaseRank(e, this.props.id)}>Downvote</button>
          ]
        } else if (this.props.rank == 1) {
          buttons = <button onClick={(e) => this.props.decreaseRank(e, this.props.id)}>Downvote</button>
        }
        else {
          buttons = <button onClick={(e) => this.props.increaseRank(e, this.props.id)}>Upvote</button>
        }
    return (
      <div>
        <a href={this.props.url}>
          <h4>{this.props.description}</h4>
        </a>
        <img src={this.props.image_url} alt={this.props.description} />
        <div>
          {buttons}
        </div>
        <p>Rank: {this.props.rank}</p>
      </div>
    )
  }
}

export default FavoriteThing
