// Components
import Button from '../../components/interface/button/Button'

// Styles
import './Home.scss'

// Page: Home
function Home () {
	// Render
	return (
		<div data-page="home">
			<h1 className="tt-headline">Task Tracker</h1>
			<p className="tt-paragraph">Track your tasks and get things done</p>
			<Button
				className="tt-button"
				onClick={() => {}}
				text="Get Started" />
		</div>
	)
}

// Export
export default Home