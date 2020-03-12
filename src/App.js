import React, {Component} from 'react'
import {
  TopPanel,
  TicketsAll,
  FilterPanel,
  LoadButton } from './components'
import { connect } from 'react-redux'
import { getDataFromApi } from './redux/actions'
import './App.scss'
const logo = './logo.png'

class App extends Component {
  state = {
    data: ''
  }
  
  componentDidMount(){
    const { getData } = this.props
    getData()
  }

  render(){
    return (
      <div className="App">
        <img className="App__logo" src={logo} alt="logo" />
        <div className="App__row">
          <div className="App__col">
          <FilterPanel />
          </div>
          <div className="App__col">
            <TopPanel />
            <TicketsAll />
            <LoadButton />
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    getData: ()=>dispatch(getDataFromApi())
  }
}

export default connect(null, mapDispatchToProps)(App);
