import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
    getUserRequest: null,
    getUserSuccess: ['respuesta'],
    getUserFailure: ['error']
})

export const UserTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
    user: [],
    status: '',
    fetching: true,
    errorMessage: '',
    error: false
})

/* ------------- Reducers ------------- */
export const getUserRequest = (state, action) => {
    const { tipo } = action
    return state.merge({ fetching: true, error: false, errorMessage: '' })
}

export const getUserSuccess = (state, action) => {
    return state.merge({ fetching: false, error: false, errorMessage: '', user: action.respuesta })
}

export const getUserFailure = (state, action) => {
    return state.merge({ fetching: false, error: true, errorMessage: action.error })
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_USER_REQUEST]: getUserRequest,
    [Types.GET_USER_SUCCESS]: getUserSuccess,
    [Types.GET_USER_FAILURE]: getUserFailure
})