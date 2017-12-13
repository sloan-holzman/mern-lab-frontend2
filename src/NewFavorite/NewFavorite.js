import React, { Component } from "react"
import axios from "axios"

class NewFavorite extends Component {
  constructor(props) {
    super(props)

    this.state = {
      description: "",
      url: "",
      image_url: ""
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.onSubmitForm = this.onSubmitForm.bind(this)
  }

  componentDidMount() {}

  handleInputChange(e) {
    const value = e.target.value
    const name = e.target.name

    this.setState({
      [name]: value
    })
  }

  onSubmitForm(e) {
    e.preventDefault()
    axios
      .post("http://localhost:3001/api/favorite-things", {
        description: this.state.description,
        url: this.state.url,
        image_url: this.state.image_url
      })
      .then(() => {
        this.props.history.push("/favorite-things/")
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <h3>New Favorite</h3>
        <form onSubmit={e => this.onSubmitForm(e)}>
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="url"
            placeholder="Url"
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="image_url"
            placeholder="Image Url"
            onChange={this.handleInputChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default NewFavorite
