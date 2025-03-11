// Modules
import { useContext } from 'react'

// Components
import Select from '../../../components/interface/select/Select'

// Context
import Data from '../../../context/data'
import Dispatch from '../../../context/dispatch'

// Reducers
import { PRIORITY_ACTIONS } from '../../../reducers/priority'

// Constants
import { PRIORITY } from '../../../constants/priority'

// Styles
import './Filter.scss'

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
					...PRIORITY
				]}
				value={priority || ''} />
		</span>
	)
}

// Export
export default Filter
