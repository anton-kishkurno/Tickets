import React from 'react'
import './style.scss'
import { connect } from 'react-redux'
import { expensiveAction, fastAction} from '../../redux/actions'

const TopPanel = props => {
  const {expensive, fast, selectExpensive, selectFast} = props
  
  return (
    <div className="top-panel">
      <p  className={`top-panel__button ${expensive && 'active'}`}
          onClick={selectExpensive}>
        Самый дешевый
      </p>
      <p  className={`top-panel__button ${fast && 'active'}`}
          onClick={selectFast}>
        Самый быстрый
      </p>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    expensive: state.changeTopPanel.expensive,
    fast: state.changeTopPanel.fast
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectExpensive: () => dispatch(expensiveAction()),
    selectFast: () => dispatch(fastAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopPanel)