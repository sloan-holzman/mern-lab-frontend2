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
  console.log("increase rank")
  axios
    .put(`http://localhost:3001/api/favorite-things/increase-rank/${this.props.id}`)
    .then(() =>{
      console.log("forcing update")
      this.props.forceUpdateMethod()
    })
    .catch(err => {
      console.log(err)
    })
}

decreaseRank(e) {
  console.log("decrease rank")
  axios
    .put(`http://localhost:3001/api/favorite-things/decrease-rank/${this.props.id}`)
    .then(() =>{
      console.log("forcing update")
      this.props.forceUpdateMethod()
    })
    .catch(err => {
      console.log(err)
    })
}



  render() {
    let buttons = null
        if  (this.props.rank > 1 && this.props.rank < this.props.count) {
          buttons = [
            <button onClick={this.increaseRank}>Upvote</button>,
            <button onClick={this.decreaseRank}>Downvote</button>
          ]
        } else if (this.props.rank == 1) {
          buttons = <button onClick={this.decreaseRank}>Downvote</button>
        }
        else {
          buttons = <button onClick={this.increaseRank}>Upvote</button>
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
