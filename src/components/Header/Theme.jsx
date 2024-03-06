import React from 'react'
import { PiMoonDuotone } from 'react-icons/pi'
import { PiSunDimDuotone } from 'react-icons/pi'

export default function Theme() {
	const [dark, setDark] = React.useState(false)
	const [hover, setHover] = React.useState(false)

	const root = document.querySelector(':root')

	React.useEffect(() => {
		const mode = localStorage.getItem('mode')
		if (mode && mode === 'dark') {
			root.classList.add('dark')
			setDark(true)
		}
	}, [])

	const handleToggle = () => {
		setDark(prevDark => !prevDark)
		root.classList.toggle('dark')
		if (root.classList.contains('dark')) {
			localStorage.setItem('mode', 'dark')
		} else {
			localStorage.setItem('mode', 'light')
		}
	}

	const handleEnter = () => {
		setHover(true)
	}

	const handleLeave = () => {
		setHover(false)
	}

	return (
		<button
			className='theme-btn'
			type='button'
			aria-label='Theme toggle'
			onClick={handleToggle}
			style={{
				position: 'fixed',
				top: '0.5rem',
				right: '0.5rem',
				width: '2rem',
				height: '2rem',
			}}
			onMouseEnter={handleEnter}
			onMouseLeave={handleLeave}
			onFocus={handleEnter}
			onBlur={handleLeave}
		>
			<PiMoonDuotone
				style={{
					width: '100%',
					display: dark ? 'none' : 'block',
					color: hover ? 'steelblue' : '#99a',
				}}
				aria-hidden='true'
			/>
			<PiSunDimDuotone
				style={{
					width: '100%',
					display: dark ? 'block' : 'none',
					color: hover ? 'goldenrod' : '#99a',
				}}
				aria-hidden='true'
			/>
		</button>
	)
}
