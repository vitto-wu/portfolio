'use client'

import { animatePageIn } from '@/lib/animation'
import { ReactNode, useEffect, useState } from 'react'
import Navbar from '../components/navbar'

const Template = ({ children }: { children: ReactNode }) => {
	const [numOfCol, setNumOfCol] = useState(10)

	const getNumOfCol = () => {
		const width = document.documentElement.clientWidth
		if (width <= 640) return 5
		if (width <= 768) return 7
		return 10
	}

	const handleResize = () => {
		setNumOfCol(getNumOfCol())
	}

	useEffect(() => animatePageIn(), [numOfCol])

	useEffect(() => {
		animatePageIn()
		setNumOfCol(getNumOfCol())
		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<>
			<div className="pageTransition pointer-events-none fixed z-[100] flex h-screen w-screen flex-row">
				{[...Array(numOfCol)].map((_, i) => {
					return (
						<div key={i} className="h-full w-full bg-[#c9c9be]" />
					)
				})}
			</div>
			<main>
				<Navbar />
				{children}
			</main>
		</>
	)
}

export default Template
