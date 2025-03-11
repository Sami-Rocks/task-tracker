// Modules
import { useEffect, useState } from 'react'

// Styles
import './Search.scss'

// Types
type SearchProps = {
	value: string
	onChange: (value: string) => void
}

// Component: Home > Search
function Search ({ value, onChange }: SearchProps) {
	// State
	const [queryText, setQueryText] = useState('')
	const [isProcessing, setIsProcessing] = useState(false)

	// Effects
	useEffect(() => {
		let timer: ReturnType<typeof setTimeout>
		if (isProcessing) {
			timer = setTimeout(() => {
				if (queryText !== value) onChange(queryText)
				setIsProcessing(false)
			}, 50)
		} else if (queryText !== value) setQueryText(value)
		return () => clearTimeout(timer)
	}, [queryText])

	// Render
	return (
		<span
			data-component="search"
			className="tt-search">
			<input
				type="text"
				placeholder="Search"
				value={value}
				onChange={({ target: { value } }) => {
					setQueryText(value)
					setIsProcessing(true)
				}} />
		</span>
	)
}

// Export
export default Search
