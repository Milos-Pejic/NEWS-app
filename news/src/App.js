import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import { useEffect, useState } from "react"
import { getNews } from "./service"
import Technology from './components/Technology'
import Sport from './components/Sport'
import Bussines from './components/Bussines'
import Health from './components/Health'
import Headlines from './components/Headlines'
import Nav from './components/Nav'
import OneNews from './components/OneNews'



const App = () => {

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/headlines/:i" component={OneNews} />
        <Route exact path="/health/:i" component={OneNews} />
        <Route exact path="/bussines/:i" component={OneNews} />
        <Route exact path="/sport/:i" component={OneNews} />
        <Route exact path="/tehnology/:i" component={OneNews} />






        <Route path="/health">
          <Health />
        </Route>
        <Route path="/bussines">
          <Bussines />
        </Route>
        <Route path="/sport">
          <Sport />
        </Route>
        <Route path="/tehnology">
          <Technology />
        </Route>
        <Route exact path="/">
          <Headlines />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;

