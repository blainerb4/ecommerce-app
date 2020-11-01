import { UserActionTypes } from './user.types'
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

//exact string our reducer is remembering , action creator type 
//with reducers type expectation
// we have the action our component is going to leverage