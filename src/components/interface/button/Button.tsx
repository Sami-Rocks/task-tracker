// Styles
import './Button.scss'

// Types	
type ButtonProps = {
	className?: string
	children?: React.ReactNode
	onClick: () => void
	style?: React.CSSProperties
	text: string
}

// Component: Interface > Button
function Button ({ className, children, onClick, style, text}: ButtonProps) {
	// Render
	return (
		<button
			className={
				'tt-button' +
				(className ? ` ${className}` : '')
			}
			onClick={onClick}
			style={style}>
			{text || children}
		</button>
	)
}

// Export
export default Button