// Helpers: Initialization > Get Initial State
function getInitialState () {
	const priority = JSON.parse(localStorage.getItem('priority') || '{}')
	const tasks = JSON.parse(localStorage.getItem('tasks') || '[]')

	// Return
	return { priority, tasks }
}

// Export
export default getInitialState