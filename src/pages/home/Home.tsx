// Modules
import { useState } from 'react'

// Components
import AddTaskDialog from '../../components/model/add-task-dialog/AddTaskDialog'
import Button from '../../components/interface/button/Button'
import TaskCard from '../components/task-card/TaskCard'

// Styles
import './Home.scss'

// Data
const tasks = [
	{
		id: 1,
		title: 'Task 1',
		description: 'Task 1 description',
	},
	{
		id: 2,
		title: 'Task 2',
		description: 'Task 2 description',
	}
]

// Page: Home
function Home () {
	// State
	const [isCreatingTask, setIsCreatingTask] = useState(false)

	// Render
	return (
		<div data-page="home">
			<h1 className="tt-headline">Task Tracker</h1>
			<p className="tt-paragraph">Track your tasks and get things done</p>
			<Button
				className="tt-button"
				onClick={() => setIsCreatingTask(true)}
				text="Get Started" />
			<div className="tt-task-list">
				{tasks.map(task =>
					<TaskCard
						key={task.id}
						task={task} />
				)}
			</div>
			{isCreatingTask && (
				<AddTaskDialog
					cancel={() => setIsCreatingTask(false)}
					confirm={() => setIsCreatingTask(false)}
				/>
			)}
		</div>
	)
}

// Export
export default Home