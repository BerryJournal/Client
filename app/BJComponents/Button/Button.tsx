import './Button.scss'

export interface ButtonProps {
	variant?:
		| 'normal'
		| 'outlined'
		| 'info'
		| 'success'
		| 'warning'
		| 'danger'
		| 'utility'
		| 'outlined-info'
		| 'outlined-success'
		| 'outlined-warning'
		| 'outlined-danger'
		| 'outlined-utility'
	size?: 's' | 'm' | 'l' | 'xl'
	children: string
	disabled?: boolean
	width?: 'auto' | 'max'
	styles?: {}
	onClick?: () => void
}

export const Button = ({
	variant = 'normal',
	size = 'm',
	children,
	width = 'auto',
	styles,
	onClick,
	...props
}: ButtonProps) => {
	return (
		<button
			type='button'
			className={[
				'bj-button',
				`bj-button--${size}`,
				`bj-button--${variant}`,
				`bj-button--${width}`,
			].join(' ')}
			style={{ ...styles }}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	)
}
