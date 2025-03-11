// Components
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

// Styles
import './Dialog.scss'

// Types
type DialogProps = {
	children: React.ReactNode
	className?: string
	onClose?: () => void
	style?: React.CSSProperties
}

// Component: Layout > Dialog
function Dialog ({ children, className, onClose, style }: DialogProps) {
	// Render
	return (
		<div
			data-layout="dialog"
			className={
				'tt-dialog' +
				(className ? ` ${className}` : '')
			}
			onClick={onClose}
			style={style}>
			<div
				className="tt-dialog-content"
				onClick={e => e.stopPropagation()}>
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