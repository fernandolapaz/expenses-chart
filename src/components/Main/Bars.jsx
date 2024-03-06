import React from 'react'

export default function Bars(props) {
	const [active, setActive] = React.useState(false)

	let today = ''
	switch (new Date().getDay()) {
		case 0:
			today = 'sun'
			break
		case 1:
			today = 'mon'
			break
		case 2:
			today = 'tue'
			break
		case 3:
			today = 'wed'
			break
		case 4:
			today = 'thu'
			break
		case 5:
			today = 'fri'
			break
		case 6:
			today = 'sat'
	}

	return (
		<>
			<li className='bar-box'>
				<span
					className='amount'
					style={{ visibility: active ? 'visible' : 'hidden' }}
				>
					{`$${props.amount}`}
				</span>

				<button
					className='bar'
					type='button'
					style={{
						height: `${props.amount / 5.6}rem`,
						backgroundColor:
							props.day === today ? 'hsl(186, 44%, 60%)' : 'hsl(10, 89%, 60%)',
					}}
					onMouseEnter={() => setActive(true)}
					onMouseLeave={() => setActive(false)}
					onFocus={() => setActive(true)}
					onBlur={() => setActive(false)}
					aria-label={`${props.day}'s spending was ${props.amount}`}
				></button>

				<span
					className='day'
					aria-hidden='true'
				>
					{props.day}
				</span>
			</li>
		</>
	)
}
