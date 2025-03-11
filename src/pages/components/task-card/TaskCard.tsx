// Styles
import './TaskCard.scss'

// Type
type Task = {
	id: number
	title: string
	description: string
}

// Component: Home > Task Card
function TaskCard ({ task }: { task: Task }) {
	// Render
	return (
		<div
			data-component="task-card"
			className="tt-task-card">
			<div className='tt-task-card-text'>
				<h3 className="tt-task-card-title">{task.title}</h3>
				<p className="tt-task-card-description">{task.description}</p>
			</div>
			<div className='tt-task-card-actions'>
				<button className='tt-task-card-edit'>Edit</button>
				<button className='tt-task-card-delete'>Delete</button>
			</div>
		</div>
	)
}

// Export
export default TaskCard
