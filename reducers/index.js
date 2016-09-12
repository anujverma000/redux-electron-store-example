import {WINDOW_ACTIONS} from '../actionTypes'

export default function(state = {}, action = { type: undefined }){
	if (!action.payload) {
    	return state
  	}
	switch (action.type){
		case WINDOW_ACTIONS.OPEN_WINDOW:
			return {
				...state,
				notificationWindow: { open : true, ...action.payload }
			}
		case WINDOW_ACTIONS.CLOSE_WINDOW:
			return {
				...state,
				notificationWindow: { open : false }
			}
		case WINDOW_ACTIONS.DATA_FOR_MAIN_WINDOW:
			return{
				...state,
				...action.payload
			}
		default:
			return state
	}
}