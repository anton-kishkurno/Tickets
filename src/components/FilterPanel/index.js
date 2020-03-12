import React from 'react'
import { connect } from 'react-redux'
import { 
  allAction, 
  notTransferAction,
  oneTransferAction,
  twoTransferAction,
  threeTransferAction
} from '../../redux/actions'
import './style.scss'

const FilterPanel = props => {
  const { all, notTransfer, oneTransfer, twoTransfer, threeTransfer,
    checkAll, checkNotTransfer, checkOneTransfer, checkTwoTransfer, checkThreeTransfer} = props
  return(
    <div className="panel">
      <p className="panel__title">Количество пересадок</p>
        <div className="checks" onClick={checkAll}>
          <div className={`checks__box ${all && 'active'}`}></div>
          <p className="checks__label">Все</p>
        </div>
        <div className="checks" onClick={checkNotTransfer}>
          <div className={`checks__box ${notTransfer && 'active'}`}></div>
          <p className="checks__label">Без пересадок</p>
        </div>
        <div className="checks" onClick={checkOneTransfer}>
          <div className={`checks__box ${oneTransfer && 'active'}`}></div>
          <p className="checks__label">1 пересадка</p>
        </div>
        <div className="checks" onClick={checkTwoTransfer}>
          <div className={`checks__box ${twoTransfer && 'active'}`}></div>
          <p className="checks__label">2 пересадки</p>
        </div>
        <div className="checks" onClick={checkThreeTransfer}>
          <div className={`checks__box ${threeTransfer && 'active'}`}></div>
          <p className="checks__label">3 пересадки</p>
        </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    all: state.changeLeftPanel.all,
    notTransfer: state.changeLeftPanel.notTransfer,
    oneTransfer: state.changeLeftPanel.oneTransfer,
    twoTransfer: state.changeLeftPanel.twoTransfer,
    threeTransfer: state.changeLeftPanel.threeTransfer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkAll: () => dispatch(allAction()),
    checkNotTransfer: () => dispatch(notTransferAction()),
    checkOneTransfer: () => dispatch(oneTransferAction()),
    checkTwoTransfer: () => dispatch(twoTransferAction()),
    checkThreeTransfer: () => dispatch(threeTransferAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel)