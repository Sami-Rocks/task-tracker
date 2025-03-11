// Modules
import { X } from 'react-feather'

// Styles
import './Header.scss'

// Types
type HeaderProps = {
	className?: string
	onClose?: () => void
	style?: React.CSSProperties
	title: string
}

// Component: Layout > Dialog > Header
function Header ({ className, onClose, style, title }: HeaderProps) {
	// Render
	return (
		<div
			className={
				'tt-dialog-header' +
				(className ? ` ${className}` : '')
			}
			style={style}>
			<h2>{title}</h2>
			{onClose && (
				<button
					className="tt-dialog-header-close"
					onClick={onClose}>
					<X />
				</button>
			)}
		</div>
	)
}

// Export
export default Header
