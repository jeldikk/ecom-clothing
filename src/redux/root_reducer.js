import {combineReducers} from 'redux'

import userReducer from "./user/user.reducers"


export default combineReducers({
    user: userReducer
})