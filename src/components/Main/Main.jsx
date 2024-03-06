import React from 'react'
import Bars from './Bars'
import data from '../../data/data.json'
import { nanoid } from 'nanoid'
import { motion } from 'framer-motion'

export default function Main() {
	const graph = data.map(bar => (
		<Bars
			key={nanoid()}
			day={bar.day}
			amount={bar.amount}
		/>
	))

	const variants = {
		circle: {
			pathLength: [1, 0, 1],
			transition: {
				delay: 1,
				duration: 3,
			},
		},
	}

	return (
		<main>
			<section className='balance'>
				<h2 className='title'>
					<span className='label'>My balance</span>{' '}
					<span className='number'>$921.48</span>
				</h2>
				<svg
					className='logo'
					width='72'
					height='48'
					viewBox='0 0 72 48'
					xmlns='http://www.w3.org/2000/svg'
					aria-hidden='true'
				>
					<g
						fill='none'
						fillRule='evenodd'
					>
						<circle
							fill='#382314'
							cx='48'
							cy='24'
							r='24'
						/>
						<motion.circle
							stroke='#FFF'
							strokeWidth='2'
							cx='24'
							cy='24'
							r='23'
							variants={variants}
							animate='circle'
						/>
					</g>
				</svg>
			</section>

			<section className='spending'>
				<div className='daily'>
					<h2 className='title'>Spending - Last 7 days</h2>
					<ol className='graph'>{graph}</ol>
				</div>

				<div className='total'>
					<h2 className='title'>
						<span className='label'>Total this month</span>{' '}
						<span className='number'>$478.33</span>
					</h2>
					<p className='change'>
						<span className='number'>+2.4%</span>{' '}
						<span className='label'>from last month</span>
					</p>
				</div>
			</section>
		</main>
	)
}
