import React from 'react'
import { connect } from 'react-redux'
import { loadButtonAction } from '../../redux/actions'
import './style.scss'

const LoadButton = props => {
  const { addLoadTickets, filterTickets, count } = props
  const tickets = filterTickets && filterTickets.length
  return (
    filterTickets && 
    <div className="button">
      <div  className={`button__click ${tickets < count && 'disabled'}`}
            onClick={addLoadTickets}>Показать еще</div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    filterTickets: state.loadButton.filterData,
    count: state.loadButton.countItems,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addLoadTickets: () => dispatch(loadButtonAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadButton)