import {
  GET_EXPENSIVE,
  GET_FAST,
  GET_ALL,
  GET_NOT_TRANSFER,
  GET_ONE_TRANSFER,
  GET_TWO_TRANSFER,
  GET_THREE_TRANSFER,
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
export const allAction = () => {
  return {
    type: GET_ALL,
  }
}

export const notTransferAction = () => {
  return {
    type: GET_NOT_TRANSFER,
  }
}

export const oneTransferAction = () => {
  return {
    type: GET_ONE_TRANSFER,
  }
}

export const twoTransferAction = () => {
  return {
    type: GET_TWO_TRANSFER,
  }
}

export const threeTransferAction = () => {
  return {
    type: GET_THREE_TRANSFER,
  }
}

//Get data Actions
const loadDataAction = () => {
  return{
    type: LOAD_DATA,
  }
}

const dataAction = payload => {
  return{
    type: GET_DATA,
    payload
  }
}

const errorDataAction = payload => {
  return{
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
  return{
    type: LOAD_PARAM,
  }
}

const errorParamAction = payload => {
  return{
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
  return{
    type: ADD_LOAD_TICKETS,
  }
}

export const checkFilterTicketsAction = payload => {
  return{
    type: FILTER_TICKETS,
    payload
  }
}


