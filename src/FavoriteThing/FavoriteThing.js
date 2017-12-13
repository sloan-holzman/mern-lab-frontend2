import React, { Component } from "react"
import { Link } from "react-router-dom"
import './FavoriteThing.css'
import axios from "axios"



class FavoriteThing extends Component {
  constructor(props) {
    super(props)
    this.increaseRank = this.increaseRank.bind(this)
    this.decreaseRank = this.decreaseRank.bind(this)
  }

increaseRank(e) {
  console.log(this.props.id)
  axios
    .put(`http://localhost:3001/api/favorite-things/increase-rank/${this.props.id}`)
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
}

decreaseRank(e) {
  console.log(this.props.id)
  axios
    .put(`http://localhost:3001/api/favorite-things/decrease-rank/${this.props.id}`)
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
}



  render() {
    return (
      <div>
        <a href={this.props.url}>
          <h4>{this.props.description}</h4>
        </a>
        <img src={this.props.image_url} alt={this.props.description} />
        <button onClick={this.decreaseRank}>Downvote</button>
        <button onClick={this.increaseRank}>Upvote</button>
        <p>{this.props.rank}</p>
      </div>
    )
  }
}

export default FavoriteThing
