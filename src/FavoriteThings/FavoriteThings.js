import React, { Component } from 'react'
import axios from 'axios'
import FavoriteThing from '../FavoriteThing/FavoriteThing'

class FavoriteThings extends Component {
  constructor (props) {
    super(props)
    this.state = {
      favoriteThings: []
    }
    this.retrieveThings = this.retrieveThings.bind(this)
    this.setThings = this.setThings.bind(this)
  }

  retrieveThings() {
    axios.get('http://localhost:3000/api/favorite-things')
    .then((response) => {
      console.log(response)
      this.setThings(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  setThings (data) {
    this.setState({
      favoriteThings: data
    })
  }

  componentDidMount() {
    this.retrieveThings()
  }

  render () {
    return (
      <div>
        <h3>Favorite Things</h3>
        {this.state.favoriteThings.map(thing => (
          <FavoriteThing key={thing.id} description={thing.description} image_url={thing.image_url} url={thing.url}/>
        ))}
      </div>
    )
  }
}

export default FavoriteThings
