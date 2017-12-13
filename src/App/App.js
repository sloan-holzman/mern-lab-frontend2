import React, { Component } from 'react';
import Header from '../Header/Header.js'
import NewFavorite from '../NewFavorite/NewFavorite.js'
import FavoriteThings from '../FavoriteThings/FavoriteThings.js'
import FavoriteThing from '../FavoriteThing/FavoriteThing.js'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'



class App extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return(
      <Router>
        <div className="App">
          <nav>
            <Header />
          </nav>
          <main>
            <Switch>
              <Route
                path="/new-favorite"
                render={() => {
                  return (
                    <NewFavorite

                    />
                  )
                }}
              />
              <Route
                path="/favorite-things"
                render={() => {
                  return (
                    <FavoriteThings

                    />
                  )
                }}
              />
              <Route
                path="/*"
                render={() => {
                  return (
                    <Redirect to="/favorite-things" />
                  )
                }}
              />
            </Switch>
          </main>
        </div>
      </Router>);
  }
}

export default App;
