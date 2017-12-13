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
    this.forceUpdateMethod = this.forceUpdateMethod.bind(this)
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

  forceUpdateMethod() {
    this.forceUpdate()
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
            forceUpdateMethod={this.forceUpdateMethod}
            count={this.state.count}
          />
        ))}
      </div>
    )
  }
}

export default FavoriteThings
