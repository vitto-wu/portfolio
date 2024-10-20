'use client'

import { cn } from '@/lib/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { ReactElement, useRef } from 'react'

const MagneticIcon = ({
	children,
	className
}: {
	children: ReactElement
	className?: string
}) => {
	const ref = useRef<HTMLDivElement>(null)

	useGSAP(() => {
		if (!ref.current) return

		const xTo = gsap.quickTo(ref?.current, 'x', {
			duration: 1,
			ease: 'elastic.out(1, 0.3)'
		})
		const yTo = gsap.quickTo(ref?.current, 'y', {
			duration: 1,
			ease: 'elastic.out(1, 0.3)'
		})

		const mouseMove = (e: MouseEvent) => {
			const { clientX, clientY } = e
			const { top, left, width, height } =
				ref?.current?.getBoundingClientRect() || {
					top: 0,
					left: 0,
					width: 0,
					height: 0
				}
			const x = clientX - left - width / 2
			const y = clientY - top - height / 2
			xTo(x)
			yTo(y)
		}

		const mouseLeave = (e: MouseEvent) => {
			xTo(0)
			yTo(0)
		}

		ref?.current?.addEventListener('mousemove', mouseMove)
		ref?.current?.addEventListener('mouseleave', mouseLeave)

		return () => {
			ref?.current?.removeEventListener('mousemove', mouseMove)
			ref?.current?.removeEventListener('mouseleave', mouseLeave)
		}
	}, [])

	const childElement = React.cloneElement(children, { ref: ref })

	return <div className={cn(className, 'relative')}>{childElement}</div>
}

export default MagneticIcon
