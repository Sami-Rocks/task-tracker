// Modules
import { createContext } from 'react'
import { Task } from '../types'

// Types
type State = {
	tasks: Task[]
	priority: string | null
}

// Context: Data
const Data = createContext<State>({
	tasks: [],
	priority: null
})

// Export
export default Data
