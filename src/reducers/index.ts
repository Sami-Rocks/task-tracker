// Reducers
import tasks from './task'
import priority from './priority'

// Functions (Local)
const reduceReducers = (...reducers: any[]) => (previousState: any, action: any) => reducers.reduce(
	(newState, reducer) => reducer(newState, action),
	previousState
)

// Reducers: Application
const reducer = reduceReducers(tasks, priority)

// Export
export default reducer