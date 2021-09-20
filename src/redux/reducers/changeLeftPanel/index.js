import {
  FILTER_TRANSFERS
} from '../../constants'

const initialState = {
  filterTransfers: 0,
}

const changeLeftPanel = (state = initialState, action) => {
  if(FILTER_TRANSFERS === action.type) {
    return {
      ...state,
      filterTransfers: action.payload
    }
  } else {
    return state
  }
}

export default changeLeftPanel