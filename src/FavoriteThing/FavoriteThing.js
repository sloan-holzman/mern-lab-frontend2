import React, { Component } from 'react'



class FavoriteThing extends Component {
  render() {

    return(
      <div>
        <h4>{this.props.description}</h4>
        <p>{this.props.url}</p>
        <img src={this.props.image_url} alt={this.props.description}/>
      </div>
    )
  }
}


export default FavoriteThing
