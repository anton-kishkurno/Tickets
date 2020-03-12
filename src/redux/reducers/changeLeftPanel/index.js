import {
  GET_ALL,
  GET_NOT_TRANSFER,
  GET_ONE_TRANSFER,
  GET_TWO_TRANSFER,
  GET_THREE_TRANSFER
} from '../../constants'

const initialState = {
  all: true,
  notTransfer: false,
  oneTransfer: false,
  twoTransfer: false,
  threeTransfer: false,
}

const changeLeftPanel = (state = initialState, action) => {
   switch(action.type){
    case GET_ALL:
      return {
        ...state,
        all: !state.all,
        notTransfer: false,
        oneTransfer: false,
        twoTransfer: false,
        threeTransfer: false
      }

    case GET_NOT_TRANSFER:
      return {
        ...state,
        notTransfer: !state.notTransfer,
        all: false
      }

    case GET_ONE_TRANSFER:
      return {
        ...state,
        oneTransfer: !state.oneTransfer,
        all: false
      }

    case GET_TWO_TRANSFER:
      return {
        ...state,
        twoTransfer: !state.twoTransfer,
        all: false
      }

    case GET_THREE_TRANSFER:
      return {
        ...state,
        threeTransfer: !state.threeTransfer,
        all: false
      }

    default: 
     return state
   }
}

export default changeLeftPanel