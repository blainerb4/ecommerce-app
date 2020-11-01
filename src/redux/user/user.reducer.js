import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
};

export default userReducer;

//pass default value with state = INITIAL_STATE
//if state is ever undefined it will fal back and pass null value
//if state is ever null it will still pass null as valid state value
//anytime the set current user is the action type that gets fired
// we want to return a new object that represents a new object user reducer
//will transform into (evertyhgin on the state)

// above is a function that gets a state object and an action
//depending on what the type of action is
//switch statement will then check if the case for action type
//is equal to set current user then return new object out of reducer function
//if none of these action types match any of the case statement then just
//default to return the current state of what the reducer is (null)