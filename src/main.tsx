// Modules
import { useReducer } from 'react'
import { createRoot } from 'react-dom/client'

// Context
import Tasks from './context/data'
import Dispatch from './context/dispatch'
// Data
import defaultInitialState from './data/initialState'

// Reducers
import applicationReducer from './reducers'

// Helpers
import getInitialState from './helpers/initialization'

// Styles
import './styles/index.scss'

// Pages
import Home from './pages/home/Home'

// Application
function Application () {
	// State
	const [state, dispatch] = useReducer(applicationReducer, defaultInitialState, getInitialState)

	// Render
	return(
		<Tasks.Provider value={state}>
			<Dispatch.Provider value={dispatch}>
				<Home />
			</Dispatch.Provider>
		</Tasks.Provider>
	)
}

// Execution
createRoot(document.getElementById('root')!).render(<Application />)
