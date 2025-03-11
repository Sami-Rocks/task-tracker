// Modules
import { createContext } from 'react'
import type { Dispatch } from 'react'
import { Action } from '../types'

// Context: Dispatch
const Dispatch = createContext<Dispatch<Action>>(() => {})

// Export
export default Dispatch
