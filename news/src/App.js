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
import OneHealth from './components/OneHealth'
import OneBussines from './components/OneBussines'
import OneSport from './components/OneSport'
import OneTechnology from './components/OneTechnology'


const App = () => {

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/headlines/:i" component={OneNews} />
        <Route exact path="/health/:i" component={OneHealth} />
        <Route exact path="/bussines/:i" component={OneBussines} />
        <Route exact path="/sport/:i" component={OneSport} />
        <Route exact path="/tehnology/:i" component={OneTechnology} />






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

