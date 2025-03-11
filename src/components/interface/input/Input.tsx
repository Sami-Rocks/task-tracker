// Styles
import './Input.scss'

// Types
type InputProps = {
	className?: string
	label?: string
	name?: string
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	type?: string
	value: string
}

// Component: Interface > Input
function Input ({ className, label, name, onChange, type, value }: InputProps) {
	// Render
	return (
		<span
			data-interface="input"
			className={
				'tt-input' +
				(className ? ` ${className}` : '')
			}>
			{label && (<label htmlFor={name}>{label}</label>)}
			<input
				name={name}
				onChange={onChange}
				type={type || 'text'}
				value={value}
			/>
		</span>
	)
}

// Export
export default Input
