// Modules
import { useState } from 'react'

// Components
import Button from '../../interface/button/Button'
import Dialog from '../../layout/dialog/Dialog'
import Input from '../../interface/input/Input'
import Select from '../../interface/select/Select'

// Types
import { Task } from '../../../types'

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
		id: task?.id || 0,
		title: task?.title || '',
		description: task?.description || '',
		priority: task?.priority || '',
		completed: task?.completed || false
	})

	// Data
	const title = task ? 'Edit Task' : 'Add Task'

	// Functions
	function updateFormData (name: string, value: string) {
		setFormData({ ...formData, [name]: value })
	}
	function onSubmit () {
		if (confirm) confirm()
	}

	// Render
	return (
		<span data-model="add-task-dialog">
			<Dialog>
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
						<Input
							label="Description"
							name="description"
							onChange={(event) => updateFormData('description', event.target.value)}
							value={formData.description}
						/>
						<Select
							label="Priority"
							name="priority"
							onChange={(event) => updateFormData('priority', event.target.value)}
							options={['Low', 'Medium', 'High']}
							value={formData.priority}
						/>
					</form>
				</div>
			</Dialog>
			<Dialog.Footer>
				<Button
					onClick={cancel}
					text="Cancel"
				/>
				<Button
					onClick={onSubmit}
					text="Confirm"
				/>
			</Dialog.Footer>
		</span>
	)
}

// Export
export default AddTaskDialog
