// Helpers: Initialization > Get Initial State
function getInitialState () {
	const priority = JSON.parse(localStorage.getItem('priority') || 'null')
	const tasks = JSON.parse(localStorage.getItem('tasks') || '[]')

	// Return
	return { priority, tasks }
}

// Export
export default getInitialState