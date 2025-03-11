// Modules
import { useState, useContext, useEffect, use } from 'react'

// Components
import AddTaskDialog from '../../components/model/add-task-dialog/AddTaskDialog'
import Button from '../../components/interface/button/Button'
import TaskCard from '../components/task-card/TaskCard'
import Search from '../components/search/Search'
import Filter from '../components/filter/Filter'

// Types
import { Task } from '../../types'

// Styles
import './Home.scss'

// Context
import Data from '../../context/data'

// Page: Home
function Home () {
	// State
	const [data, setData] = useState<Task[]>([])
	const [isCreatingTask, setIsCreatingTask] = useState(false)
	const [searchQueryText, setSearchQueryText] = useState('')

	// Data
	const { tasks, priority } = useContext(Data)

	// Effects
	useEffect(() => {
		if (searchQueryText) {
			const filteredTasks = tasks.filter(task =>
				task.title.toLowerCase().includes(searchQueryText.toLowerCase())
				|| task.description.toLowerCase().includes(searchQueryText.toLowerCase())
			)
			setData(filteredTasks)
		}
	}, [tasks, searchQueryText])
	useEffect(() => {
		if (priority) {
			const filteredTasks = tasks.filter(task => task.priority === priority)
			setData(filteredTasks)
		} else setData(tasks)
	}, [tasks, priority])
	useEffect(() => {
		setData(tasks)
	}, [tasks])
	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])
	useEffect(() => {
		localStorage.setItem('priority', JSON.stringify(priority))
	}, [priority])
	useEffect(() => console.log(data), [data])

	// Render
	return (
		<div data-page="home">
			<h1 className="tt-headline">Task Tracker</h1>
			<p className="tt-paragraph">Track your tasks and get things done</p>
			<Button
				className="tt-button"
				onClick={() => setIsCreatingTask(true)}
				text="Add Task" />
			<div className="tt-filter">
				<Search
					value={searchQueryText}
					onChange={setSearchQueryText} />
				<Filter />
			</div>
			<div className="tt-task-list">
				{!!data.length
					? data.map(task =>
						<TaskCard
							key={task.id}
							task={task} />
					)
					: <p className="tt-paragraph">No tasks found</p>
				}
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