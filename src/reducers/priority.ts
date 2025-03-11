// Types
import { Action } from '../types'

// Data (local)
const actionGroupName = 'PRIORITY'

// Constants (local)
const PRIORITY_ACTIONS = {
	SELECT: `SELECT_${actionGroupName}`
}

// Reducer: Priority
function priority (state: { priority: string }, action: Action) {
	// Action
	switch (action.type) {
		case PRIORITY_ACTIONS.SELECT:
			return { ...state, priority: action.payload }
		default:
			return state
	}
}

// Export
export default priority
export { PRIORITY_ACTIONS }