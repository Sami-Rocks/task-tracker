// Modules
import { useContext } from 'react'

// Components
import Button from '../../interface/button/Button'
import Dialog from '../../layout/dialog/Dialog'

// Context
import Dispatch from '../../../context/dispatch'

// Reducers
import { TASK_ACTIONS } from '../../../reducers/task'

// Types
import { Task } from '../../../types'

// Styles
import './DeleteTaskDialog.scss'

// Types
type DeleteTaskDialogProps = {
	cancel: () => void
	confirm: () => void
	task: Task
}

// Component: Model > Delete task dialog
function DeleteTaskDialog ({ cancel, confirm, task }: DeleteTaskDialogProps) {
	// Data
	const dispatch = useContext(Dispatch)

	// Functions
	function handleDelete () {
		dispatch({ type: TASK_ACTIONS.REMOVE, payload: task.id })
		if (confirm) confirm()
	}

	// Render
	return (
		<span data-model="delete-task-dialog">
			<Dialog onClose={cancel}>
				<Dialog.Header
					title="Delete Task"
					onClose={cancel} />
				<div className="tt-delete-task-dialog-content">
					<p>Are you sure you want to delete this task?</p>
				</div>
				<Dialog.Footer>
					<Button
						variant="secondary"
						onClick={cancel}
						text="No" />
					<Button
						onClick={handleDelete}
						text="Yes" />
				</Dialog.Footer>
			</Dialog>
		</span>
	)
}

// Export
export default DeleteTaskDialog
