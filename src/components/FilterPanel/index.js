import React from 'react'
import { connect } from 'react-redux'
import { filterList } from './filterList'
import { 
    filterTransfersAction
} from '../../redux/actions'
import './style.scss'

const FilterPanel = props => {
  const { filter, filterTransfers } = props
  return(
    <div className="panel">
        <p className="panel__title">Количество пересадок</p>
            {
            filterList.map(item => 
                <div className="checks" key={item.id} onClick={() => filterTransfers(item.id)}>
                    <div className={`checks__box ${filter === item.id && 'active'}`}></div>
                    <p className="checks__label">{item.title}</p>
                </div>
            )
            }
    </div>
  )
}

const mapStateToProps = state => {
    return {
        filter: state.changeLeftPanel.filterTransfers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        filterTransfers: payload => dispatch(filterTransfersAction(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel)