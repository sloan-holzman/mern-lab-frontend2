import React, { Component } from "react"
import axios from "axios"
import FavoriteThing from "../FavoriteThing/FavoriteThing"

class FavoriteThings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favoriteThings: [],
      count: 0
    }
    this.retrieveThings = this.retrieveThings.bind(this)
    this.setThings = this.setThings.bind(this)
    this.increaseRank = this.increaseRank.bind(this)
    this.decreaseRank = this.decreaseRank.bind(this)
  }

  retrieveThings() {
    axios
      .get("http://localhost:3001/api/favorite-things")
      .then(response => {
        console.log(response)
        this.setThings(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  increaseRank(e,id) {
    e.preventDefault()
    axios
      .put(`http://localhost:3001/api/favorite-things/increase-rank/${id}`)
      .then((response) =>{
        console.log(response)
        console.log("increased")
        this.retrieveThings()
      })
      .catch(err => {
        console.log(err)
      })
      console.log("increased!!")
  }

  decreaseRank(e,id) {
    e.preventDefault()
    axios
      .put(`http://localhost:3001/api/favorite-things/decrease-rank/${id}`)
      .then(() =>{
        console.log("forcing update")
        this.retrieveThings()
      })
      .catch(err => {
        console.log(err)
      })
  }

  setThings(data) {
    this.setState({
      favoriteThings: data,
      count: (data.length)
    })
  }

  componentDidMount() {
    this.retrieveThings()
  }


  render() {
    return (
      <div>
        <h3>Favorite Things</h3>
        {this.state.favoriteThings.map(thing => (
          <FavoriteThing
            key={thing._id}
            id={thing._id}
            description={thing.description}
            image_url={thing.image_url}
            url={thing.url}
            rank={thing.rank}
            increaseRank={this.increaseRank}
            decreaseRank={this.decreaseRank}
            count={this.state.count}
          />
        ))}
      </div>
    )
  }
}

export default FavoriteThings
