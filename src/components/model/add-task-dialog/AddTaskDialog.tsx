// Modules
import { useState, useContext } from 'react'

// Components
import Button from '../../interface/button/Button'
import Dialog from '../../layout/dialog/Dialog'
import Input from '../../interface/input/Input'
import Select from '../../interface/select/Select'
import TextArea from '../../interface/text-area/TextArea'

// Context
import Dispatch from '../../../context/dispatch'

// Constants
import { PRIORITY } from '../../../constants/priority'

// Types
import { Task } from '../../../types'

// Reducers
import { TASK_ACTIONS } from '../../../reducers/task'

// Styles
import './AddTaskDialog.scss'

// Types
type AddTaskDialogProps = {
	cancel: () => void
	confirm: () => void
	task?: Task
}

// Component: Model > Add task dialog
function AddTaskDialog ({ cancel, confirm, task }: AddTaskDialogProps) {
	// State
	const [formData, setFormData] = useState({
		id: task?.id || Date.now(),
		title: task?.title || '',
		description: task?.description || '',
		priority: task?.priority || 'low',
		completed: task?.completed || false
	})

	// Data
	const title = task ? 'Edit Task' : 'Add Task'
	const dispatch = useContext(Dispatch)

	// Functions
	function updateFormData (name: string, value: string) {
		setFormData({ ...formData, [name]: value })
	}
	function onSubmit () {
		if (task) {
			dispatch({
				type: TASK_ACTIONS.UPDATE,
				payload: formData
			})
		} else {
			dispatch({
				type: TASK_ACTIONS.ADD,
				payload: formData
			})
		}
		if (confirm) confirm()
	}

	// Render
	return (
		<span data-model="add-task-dialog">
			<Dialog onClose={cancel}>
				<Dialog.Header
					title={title}
					onClose={cancel}
				/>
				<div className="tt-add-task-dialog-form">
					<form>
						<Input
							label="Title"
							name="title"
							onChange={(event) => updateFormData('title', event.target.value)}
							value={formData.title}
						/>
						<TextArea
							label="Description"
							name="description"
							onChange={(event) => updateFormData('description', event.target.value)}
							value={formData.description}
						/>
						<Select
							label="Priority"
							name="priority"
							onChange={(event) => updateFormData('priority', event.target.value)}
							options={PRIORITY}
							value={formData.priority}
						/>
					</form>
				</div>
				<Dialog.Footer>
					<Button
						variant="secondary"
						onClick={cancel}
						text="Cancel"
					/>
					<Button
						onClick={onSubmit}
						text="Confirm"
					/>
				</Dialog.Footer>
			</Dialog>
		</span>
	)
}

// Export
export default AddTaskDialog
