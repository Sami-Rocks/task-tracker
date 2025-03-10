// Styles
import './Footer.scss'

// Types
type FooterProps = {
	children: React.ReactNode
	className?: string
	style?: React.CSSProperties
}

// Component: Layout > Dialog > Footer
function Footer ({ children, className, style }: FooterProps) {
	// Render
	return (
		<div
			className={
				'tt-dialog-footer' +
				(className ? ` ${className}` : '')
			}
			style={style}>
			{children}
		</div>
	)
}

// Export
export default Footer
