// Modules
import { useContext } from 'react'

// Components
import Select from '../../../components/interface/select/Select'

// Context
import Data from '../../../context/data'
import Dispatch from '../../../context/dispatch'

// Reducers
import { PRIORITY_ACTIONS } from '../../../reducers/priority'

// Types
import { Priority } from '../../../types'

// Styles
import './Filter.scss'

// Data (Local)
const priorities: Priority[] = [
	{ label: 'Low', value: 'Low' },
	{ label: 'Medium', value: 'Medium' },
	{ label: 'High', value: 'High' }
]

// Component: Home > Filter
function Filter () {
	// Data
	const dispatch = useContext(Dispatch)
	const { priority } = useContext(Data)

	// Functions
	function handleChange (value: string) {
		dispatch({ type: PRIORITY_ACTIONS.SELECT, payload: value })
	}
	
	// Render
	return (
		<span data-component="filter">
			<Select
				className="tt-filter-select"
				onChange={event => handleChange(event.target.value)}
				options={[
					{ label: 'Any Priority', value: '' },
					...priorities
				]}
				value={priority || ''} />
		</span>
	)
}

// Export
export default Filter
