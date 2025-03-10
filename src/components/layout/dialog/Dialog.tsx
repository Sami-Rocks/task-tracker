// Components
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

// Styles
import './Dialog.scss'

// Types
type DialogProps = {
	children: React.ReactNode
	className?: string
	style?: React.CSSProperties
}

// Component: Layout > Dialog
function Dialog ({ children, className, style }: DialogProps) {
	// Render
	return (
		<div
			data-layout="dialog"
			className={
				'tt-dialog' +
				(className ? ` ${className}` : '')
			}
			style={style}>
			<div className="tt-dialog-content">
				{children}
			</div>
		</div>
	)
}

// Properties
Dialog.Header = Header
Dialog.Footer = Footer

// Export
export default Dialog