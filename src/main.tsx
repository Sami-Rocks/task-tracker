// Modules
import { createRoot } from 'react-dom/client'

// Styles
import './styles/index.scss'

// Pages
import Home from './pages/home/Home'

// Application
function Application () {
	// Render
	return(<Home />)
}

// Execution
createRoot(document.getElementById('root')!).render(<Application />)
