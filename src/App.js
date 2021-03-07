import Header from "./Components/Header";
import React, { Component } from 'react'
import Movies from "./Components/Movies";
import {Switch, Route} from "react-router-dom";
import Favourites from "./Components/Favourites";
import Error from "./Components/Error";
import SingleMovie from "./Components/SingleMovie";





export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route  exact path='/movies/:id' component={SingleMovie}/>
          <Route exact path='/favourites' component={Favourites}/>
          <Route exact path='/' component = {Movies} />
          <Route component={Error}/>
        </Switch>
      </div>
    )
  }
}
