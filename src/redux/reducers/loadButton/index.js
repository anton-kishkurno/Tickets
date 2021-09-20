import { ADD_LOAD_TICKETS, FILTER_TICKETS } from '../../constants'

const initialState = {
  countItems: 5,
  filterData: null
}

const loadButton = (state = initialState, action) => {
  switch(action.type){
    case ADD_LOAD_TICKETS: 
      return {
        ...state,
        countItems: state.countItems += 5
      }
    case FILTER_TICKETS: 
      return {
        ...state,
        filterData: action.payload
      }
    default: 
      return state
  }
}

export default loadButton