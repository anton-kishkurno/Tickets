import {
  GET_EXPENSIVE,
  GET_FAST,
  FILTER_TRANSFERS,
  LOAD_DATA,
  GET_DATA,
  ERROR_DATA,
  LOAD_PARAM,
  ERROR_PARAM,
  ADD_LOAD_TICKETS,
  FILTER_TICKETS
} from '../constants'

// Top Panel Actions
export const expensiveAction = () => {
  return {
    type: GET_EXPENSIVE,
  }
}

export const fastAction = () => {
  return {
    type: GET_FAST,
  }
}

// Left Panel Actions
export const filterTransfersAction = payload => {
  return {
    type: FILTER_TRANSFERS,
    payload
  }
}

//Get data Actions
const loadDataAction = () => {
  return {
    type: LOAD_DATA,
  }
}

const dataAction = payload => {
  return {
    type: GET_DATA,
    payload
  }
}

const errorDataAction = payload => {
  return {
    type: ERROR_DATA,
    payload
  }
}

const getTicketsFromApi = param => dispatch => {
  dispatch(loadDataAction())
  fetch('https://front-test.beta.aviasales.ru/tickets?searchId=' + param)
    .then(request => request.json())
    .then(data => dispatch(dataAction(data.tickets)))
    .catch(err => dispatch(errorDataAction(err)))
      
}


const loadParamAction = () => {
  return {
    type: LOAD_PARAM,
  }
}

const errorParamAction = payload => {
  return {
    type: ERROR_PARAM,
    payload
  }
}

export const getDataFromApi = () => dispatch => {
  dispatch(loadParamAction())
  fetch('https://front-test.beta.aviasales.ru/search')
    .then(request => request.json())
    .then(param => dispatch(getTicketsFromApi(param.searchId)))
    .catch(err => dispatch(errorParamAction(err)))
}

// Load Button Actions
export const loadButtonAction = () => {
  return {
    type: ADD_LOAD_TICKETS,
  }
}

export const checkFilterTicketsAction = payload => {
  return {
    type: FILTER_TICKETS,
    payload
  }
}


