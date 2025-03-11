// Modules
import { ChangeEvent } from 'react'

// Styles
import './TextArea.scss'

// Types
type TextAreaProps = {
	className?: string
	label?: string
	name?: string
	onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
	value: string
}

// Component: Interface > Text Area
function TextArea ({ className, label, name, onChange, value }: TextAreaProps) {
	// Render
	return (
		<span
			data-interface="text-area"
			className={
				'tt-text-area' +
				(className ? ` ${className}` : '')
			}>
			{label && (<label htmlFor={name}>{label}</label>)}
			<textarea
				name={name}
				onChange={onChange}
				value={value}
			/>
		</span>
	)
}

// Export
export default TextArea
