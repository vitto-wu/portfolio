/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

const Tooltip = () => {
	const ref = useRef<HTMLDivElement>(null)
	const refs = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const xTo = gsap.quickTo(ref.current, 'x', {
			duration: 0.3,
			ease: 'power1.out'
		})
		const yTo = gsap.quickTo(ref.current, 'y', {
			duration: 0.3,
			ease: 'power1.out'
		})
		const xTos = gsap.quickTo(refs.current, 'x', {
			duration: 0.28,
			ease: 'power1.out'
		})
		const yTos = gsap.quickTo(refs.current, 'y', {
			duration: 0.28,
			ease: 'power1.out'
		})

		const mouseMove = (e: MouseEvent) => {
			xTo(e.clientX + 25)
			yTo(e.clientY + 25)
			xTos(e.clientX + 25)
			yTos(e.clientY + 25)
		}

		document.addEventListener('mousemove', mouseMove)

		return () => {
			document.removeEventListener('mousemove', mouseMove)
		}
	}, [])

	return (
		<div>
			<div
				ref={ref}
				className="w-[100px] h-[40px] rounded-md bg-red-300 fixed"
			></div>
			<span
				ref={refs}
				className="select-none text-secondary-400 pointer-events-none fixed z-[1000] hidden h-[40px] w-[100px] items-center justify-center text-center text-[14px] font-medium md:flex"
			>
				<span>⮡  View</span>
			</span>
		</div>
	)
}

export default Tooltip
