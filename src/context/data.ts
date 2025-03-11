// Modules
import { createContext } from 'react'
import { Task } from '../types'
import { Priority } from '../types'

// Types
type State = {
	tasks: Task[]
	priority: Priority | null
}

// Context: Data
const Data = createContext<State>({
	tasks: [],
	priority: null
})

// Export
export default Data
