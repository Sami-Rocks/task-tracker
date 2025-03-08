// Modules
import { createRoot } from 'react-dom/client'

// Styles
import './styles/index.scss'

// Application
function Application () {
	// Render
	return(<div>Hello World</div>)
}

// Execution
createRoot(document.getElementById('root')!).render(<Application />)
