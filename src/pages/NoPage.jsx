import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'

export default function NoPage() {
	return (
		<div
			style={{
				display: 'grid',
				justifyItems: 'center',
				gap: '2rem',
				backgroundColor: 'var(--clr-neutral-2)',
				borderRadius: '0.5rem',
				padding: '3rem',
				fontSize: '1.5rem',
				color: '#111',
				textAlign: 'center',
			}}
		>
			<img
				src={logo}
				alt=''
			/>
			<span aria-hidden='true'>❔</span>
			<h1>This page doesn't exist.</h1>
			<p>
				Back{' '}
				<Link
					to='/'
					style={{ color: 'dodgerblue', textDecoration: 'none' }}
				>
					Home
				</Link>
			</p>
		</div>
	)
}
