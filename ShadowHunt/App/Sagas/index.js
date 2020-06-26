import { takeLatest } from 'redux-saga/effects'
import API from '../Services/Api'

/* ------------- Types ------------- */
import { UserTypes } from '../Redux/UsersRedux'

/* ------------- Sagas ------------- */
import { getUser } from './UsersSagas'

/* ------------- API ------------- */
const api = API.create()

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
    yield [
        takeEvery(UserTypes.GET_USER_REQUEST, getUser),
    ]
}