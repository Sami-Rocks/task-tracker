// Modules
import { Edit,Trash2 } from 'react-feather'

// Styles
import './TaskCard.scss'

// Components
import DeleteTaskDialog from '../../../components/model/delete-task-dialog/DeleteTaskDialog'
import EditTaskDialog from '../../../components/model/add-task-dialog/AddTaskDialog'

// Types
import { Task } from '../../../types'
import { useState } from 'react'


// Component: Home > Task Card
function TaskCard ({ task }: { task: Task }) {
	// State
	const [isEditingTask, setIsEditingTask] = useState(false)
	const [isDeletingTask, setIsDeletingTask] = useState(false)

	// Render
	return (
		<div
			data-component="task-card"
			className="tt-task-card">
			<div className='tt-task-card-text'>
				<h4 className="tt-task-card-title">{task.title}</h4>
				<p className="tt-task-card-description">{task.description}</p>
			</div>
			<div className='tt-task-card-actions'>
				<button
					className='tt-task-card-edit'
					onClick={() => setIsEditingTask(true)}>
					<Edit />
				</button>
				<button
					className='tt-task-card-delete'
					onClick={() => setIsDeletingTask(true)}>
					<Trash2 color='red' />
				</button>
			</div>
			{isEditingTask && (
				<EditTaskDialog
					task={task}
					cancel={() => setIsEditingTask(false)}
					confirm={() => setIsEditingTask(false)} />
			)}
			{isDeletingTask && (
				<DeleteTaskDialog
					task={task}
					cancel={() => setIsDeletingTask(false)}
					confirm={() => setIsDeletingTask(false)} />
			)}
		</div>
	)
}

// Export
export default TaskCard
