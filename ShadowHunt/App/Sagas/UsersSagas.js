import { call, put } from 'redux-saga/effects'
import UserActions from '../Redux/UsersRedux'

export function* getUser(action) {
  const { email, password } = action.payload;
  console.log(email)
    // try {
    //     console.log("response", response)
    //     if (response.ok) {          
    //         yield put(UserActions.getUserSuccess(response.data.drinks))
    //     } else {
    //         yield put(UserActions.getUserFailure('Connection problems :('))
    //     }
    // } catch (error) {
    //     yield put(UserActions.getUserFailure(error.message))
    // }
}