// Styles
import './Button.scss'

// Types	
type ButtonProps = {
	className?: string
	children?: React.ReactNode
	onClick: () => void
	style?: React.CSSProperties
	text: string
	variant?: 'primary' | 'secondary'
}

// Component: Interface > Button
function Button ({ className, children, onClick, style, text, variant = 'primary' }: ButtonProps) {
	// Render
	return (
		<button
			className={
				'tt-button' +
				(className ? ` ${className}` : '') +
				(variant ? ` tt-button--${variant}` : '')
			}
			onClick={onClick}
			style={style}>
			{text || children}
		</button>
	)
}

// Export
export default Button