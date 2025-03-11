// Types
import { Task, Priority, Action } from '../types'

// Data (local)
const actionGroupName = 'TASK'

// Constants (local)
const TASK_ACTIONS = {
	ADD: `ADD_${actionGroupName}`,
	REMOVE: `REMOVE_${actionGroupName}`,
	UPDATE: `UPDATE_${actionGroupName}`
}

// Reducer: Tasks
function tasks (state: { tasks: Task[], priority: Priority }, action: Action) {
	// Action
	switch (action.type) {
		case TASK_ACTIONS.ADD:
			return {
				...state,
				tasks: [
					...state.tasks,
					action.payload
				]
			}
		case TASK_ACTIONS.REMOVE:
			return {
				...state,
				tasks: state.tasks.filter((task: any) => task.id !== action.payload)
			}
		case TASK_ACTIONS.UPDATE:
			return {
				...state,
				tasks: state.tasks.map((task: any) => task.id === action.payload.id ? action.payload : task)
			}
		default:
			return state
	}
}

// Export
export default tasks
	