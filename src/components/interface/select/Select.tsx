// Styles
import './Select.scss'

// Types
type SelectProps = {
	className?: string
	label?: string
	name?: string
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
	options: string[]
	value: string
}

// Component: Interface > Select
function Select ({ className, label, name, onChange, options, value }: SelectProps) {
	// Render
	return (
		<span
			data-interface="select"
			className={
				'tt-select' +
				(className ? ` ${className}` : '')
			}>
			{label && (
				<label htmlFor={name}>{label}</label>
			)}
			<select
				name={name}
				onChange={onChange}
				value={value}>
				{options && options.length > 0 &&
					options.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))
				}
			</select>
		</span>
	)
}

// Export
export default Select

