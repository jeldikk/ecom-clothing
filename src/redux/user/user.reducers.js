import {UserActionTypes} from "./user.types"


let INITIAL_STATE = {
    currentState: null
}

const userReducer = (state=INITIAL_STATE, action) => {

    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return {
                
                currentUser: action.payload
            };
        default:
            return state;
    }
}

export default userReducer