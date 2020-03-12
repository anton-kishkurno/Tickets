import React, { Component } from 'react'
import './style.scss'
import { connect } from 'react-redux'
import { Ticket } from '../../components'
import { checkFilterTicketsAction } from '../../redux/actions'

class TicketsAll extends Component {

  getLengthStops = segments => {
    let stopsAll = 0
    segments.forEach(element => {
      if(stopsAll < element.stops.length){
        stopsAll = element.stops.length
      }
    });
    return stopsAll
  }

  getFilterData = data => {
    const { notTransfer, oneTransfer, twoTransfer, threeTransfer, checkFilterTickets } = this.props
    const filterChecks = [notTransfer, oneTransfer, twoTransfer, threeTransfer]
    let filterData = data
    let indexFilter = []

    filterChecks.forEach((check, index) =>{
      if(check){
        indexFilter = [...indexFilter, index]
      }
    })
    
    if(indexFilter.length){
      filterData = data.filter(element =>
        indexFilter.includes(this.getLengthStops(element.segments))
      )
    }
    checkFilterTickets(filterData)
    
    return filterData
  }

  getSortData = data => {
    const { expensive } = this.props
    return data.sort((a, b)=>{
      if(expensive){
        return a.price - b.price
      }else{
        const first = (a.segments[0].duration + a.segments[1].duration)
        const last = (b.segments[0].duration + b.segments[1].duration)
        return first - last
      }
    })
  }
  
  render(){

    const{ data, countItems } = this.props
    const filterData = data && this.getFilterData(data)
    const sortData = filterData && this.getSortData(filterData)

    return (
      <div className="tickets">
        {
          filterData && sortData.slice(0, countItems).map((el, index)=>
            <Ticket key={index + el.price} 
                    price={el.price.toLocaleString('ru')} 
                    carrier={el.carrier} 
                    segments={el.segments}/>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.getData.data,
    expensive: state.changeTopPanel.expensive,
    notTransfer: state.changeLeftPanel.notTransfer,
    oneTransfer: state.changeLeftPanel.oneTransfer,
    twoTransfer: state.changeLeftPanel.twoTransfer,
    threeTransfer: state.changeLeftPanel.threeTransfer,
    countItems: state.loadButton.countItems
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkFilterTickets: payload => dispatch(checkFilterTicketsAction(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketsAll)