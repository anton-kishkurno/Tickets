import {
  GET_EXPENSIVE,
  GET_FAST
} from '../../constants'

const initialState = {
  expensive: true,
  fast: false,
}

const changeTopPanel = (state = initialState, action) => {
  switch(action.type){
    case GET_EXPENSIVE:
      return {
        ...state,
        expensive: true,
        fast: false
      }
    case GET_FAST: 
      return {
        ...state,
        expensive: false,
        fast: true
      }
    default: {
      return state
    }
  }
}

export default changeTopPanel