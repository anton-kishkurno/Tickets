import React, { useEffect } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Home } from './containers'
import { connect } from 'react-redux'
import { getDataFromApi } from './redux/actions'
import './App.scss'

const App = props => {
    const { getData } = props
    useEffect(() => {
      getData()
    },[getData])

    return (
        <Router>
            <Switch>
                <Route exact path={'/'}>
                  <Home />
                </Route>
            </Switch>
        </Router>
    )
}

const mapDispatchToProps = dispatch => {
  return{
    getData: () => dispatch(getDataFromApi())
  }
}

export default connect(null, mapDispatchToProps)(App);
