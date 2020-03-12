import { 
  LOAD_DATA,
  GET_DATA,
  ERROR_DATA,
  ERROR_PARAM,
  LOAD_PARAM
} from '../../constants'

const initialState = {
  loadParam: false,
  errParam: '',
  loadData: false,
  data: null,
  errData: ''
}

const getData = (state = initialState, action) => {
  switch(action.type){
    case LOAD_PARAM: 
      return {
        ...state,
        loadParam: true,
      }
    case ERROR_PARAM: 
      return {
        ...state,
        errParam: action.payload
      }
    case LOAD_DATA: 
      return {
        ...state,
        loadData: true
      }
    case GET_DATA: 
      return {
        ...state,
        data: action.payload
      }
    case ERROR_DATA: 
      return {
        ...state,
        errData: action.payload
      }
    default:
      return state
  }
}

export default getData